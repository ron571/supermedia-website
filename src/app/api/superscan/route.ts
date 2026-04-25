import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;
import { createHash } from "crypto";
import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { SuperscanSchema, type SuperscanResult } from "@/lib/schemas";

const SYSTEM_PROMPT = `You are Superscan, an AI media analysis tool built by Super Media — an independent NZ media consultancy run by Ron Sneddon, a 35-year media veteran.

Your job is to analyse a New Zealand advertiser's current media mix and return a sharp, specific, independent read on how it is performing. You are not a chatbot. You do not ask follow-up questions. You produce a structured analysis based only on the inputs provided.

Tone: Direct, intelligent, collegial. Like a smart senior colleague giving a frank opinion — not a consultant hedging every sentence. No jargon. No hype. No generic advice.

Rules:
- Every observation must be specific to the inputs given. Never produce generic advice.
- Lead with observations, not recommendations. "Here is what we see" not "here is what you should do."
- Do not mention competitor agencies or media buying platforms by name.
- If spend is "Prefer not to say", adjust analysis accordingly and acknowledge briefly.
- The "question" field is the most important output. It must be a single, sharp, specific question the marketer could take to their agency tomorrow.
- Always ground observations in NZ market context.
- Return valid JSON only. No preamble, no explanation outside the JSON structure.

Output format (strict JSON):
{
  "currentMix": "2–3 sentence summary of what the user has told us.",
  "risks": ["observation 1", "observation 2", "observation 3 (optional)"],
  "opportunities": ["opportunity 1", "opportunity 2 (optional)"],
  "question": "One specific question worth asking their agency."
}`;

function buildUserPrompt(data: {
  channels: string[];
  channelsOther?: string;
  spendRange: string;
  audience: string;
}): string {
  const lines = [
    `Channels currently running: ${data.channels.join(", ")}`,
    data.channelsOther
      ? `Additional channels: ${data.channelsOther}`
      : null,
    `Annual media spend range: ${data.spendRange}`,
    `Target audience: ${data.audience}`,
    "",
    "Run the Superscan analysis.",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

function hashIp(ip: string): string {
  const salt = process.env.RATE_LIMIT_SALT ?? "super-media-default-salt";
  return createHash("sha256").update(ip + salt).digest("hex");
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

let ratelimitHour: Ratelimit | null = null;
let ratelimitDay: Ratelimit | null = null;

function getRateLimiters() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return { hour: null, day: null };
  }

  if (!ratelimitHour) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimitHour = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "superscan:hour",
    });
    ratelimitDay = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "24 h"),
      prefix: "superscan:day",
    });
  }

  return { hour: ratelimitHour, day: ratelimitDay };
}

async function sendLeadNotification(
  data: { channels: string[]; channelsOther?: string; spendRange: string; audience: string; email: string },
  result: SuperscanResult
): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const scanDate = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

  const risksHtml = result.risks.map((r) => `<li>${r}</li>`).join("");
  const oppsHtml = result.opportunities.map((o) => `<li>${o}</li>`).join("");

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz",
    to: "ron@supermedia.co.nz",
    subject: `New Superscan — ${data.email} · ${data.spendRange}`,
    html: `
      <h2>New Superscan lead</h2>
      <p><strong>Date:</strong> ${scanDate}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Channels:</strong> ${data.channels.join(", ")}${data.channelsOther ? ` + ${data.channelsOther}` : ""}</p>
      <p><strong>Spend range:</strong> ${data.spendRange}</p>
      <p><strong>Audience:</strong> ${data.audience}</p>
      <hr/>
      <h3>Results delivered</h3>
      <p><strong>Mix summary:</strong> ${result.currentMix}</p>
      <h4>Risks</h4><ul>${risksHtml}</ul>
      <h4>Opportunities</h4><ul>${oppsHtml}</ul>
      <p><strong>Agency question:</strong> ${result.question}</p>
    `,
  });
}

async function sendResultsEmail(
  email: string,
  result: SuperscanResult
): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://supermedia.co.nz/contact";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://supermedia.co.nz";

  const risksHtml = result.risks
    .map((r) => `<li style="margin-bottom:8px;">${r}</li>`)
    .join("");
  const oppsHtml = result.opportunities
    .map((o) => `<li style="margin-bottom:8px;">${o}</li>`)
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:sans-serif;color:#3A4A65;background:#fff;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr><td style="background:#1B2A4A;padding:32px 40px;">
      <p style="color:#fff;font-size:20px;font-weight:700;letter-spacing:0.04em;margin:0;">SUPER <span style="font-size:9px;font-weight:500;letter-spacing:0.2em;color:#888;">MEDIA</span></p>
    </td></tr>
    <tr><td style="padding:40px;">
      <p style="color:#E8621A;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 16px;">Your Superscan Results</p>
      <h1 style="color:#1B2A4A;font-size:26px;font-weight:700;margin:0 0 24px;">Here's what we found.</h1>

      <h2 style="color:#1B2A4A;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">Your Current Mix</h2>
      <p style="margin:0 0 32px;">${result.currentMix}</p>

      <h2 style="color:#1B2A4A;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">Where the Risk Is</h2>
      <ul style="margin:0 0 32px;padding-left:20px;">${risksHtml}</ul>

      <h2 style="color:#1B2A4A;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">The Opportunity</h2>
      <ul style="margin:0 0 32px;padding-left:20px;">${oppsHtml}</ul>

      <div style="background:#1B2A4A;border-radius:4px;padding:24px;margin-bottom:32px;">
        <p style="color:#E8621A;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 8px;">One Question Worth Asking Your Agency</p>
        <p style="color:#fff;font-size:18px;font-weight:600;margin:0;">&ldquo;${result.question}&rdquo;</p>
      </div>

      <p style="font-size:15px;margin:0 0 20px;">Want a deeper read? A 30-minute conversation with Ron costs nothing.</p>
      <a href="${calendlyUrl}" style="display:inline-block;background:#E8621A;color:#fff;text-decoration:none;font-weight:600;padding:12px 24px;border-radius:4px;">Book a call with Ron</a>
    </td></tr>
    <tr><td style="background:#101E35;padding:24px 40px;">
      <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;">
        © 2026 Super Media · <a href="${siteUrl}/privacy" style="color:rgba(255,255,255,0.4);">Privacy Policy</a> · <a href="mailto:ron@supermedia.co.nz" style="color:rgba(255,255,255,0.4);">ron@supermedia.co.nz</a>
      </p>
    </td></tr>
  </table>
</body>
</html>`;

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz",
    to: email,
    subject: "Your Superscan results",
    html,
  });
}

export async function POST(req: NextRequest) {
  // Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = SuperscanSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Rate limiting
  const ip = getClientIp(req);
  const hashedIp = hashIp(ip);
  const { hour, day } = getRateLimiters();

  if (hour && day) {
    const [hourResult, dayResult] = await Promise.all([
      hour.limit(hashedIp),
      day.limit(hashedIp),
    ]);

    if (!hourResult.success || !dayResult.success) {
      return NextResponse.json(
        {
          error:
            "You've run a few scans already — try again in an hour or email ron@supermedia.co.nz",
        },
        { status: 429 }
      );
    }
  }

  // Claude API
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  let resultJson: SuperscanResult;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      temperature: 0.4,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: buildUserPrompt(data),
        },
      ],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    // Strip markdown code fences if present
    const cleaned = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();
    resultJson = JSON.parse(cleaned) as SuperscanResult;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Claude API error:", message);
    return NextResponse.json(
      { error: "Analysis failed — please try again", detail: message },
      { status: 500 }
    );
  }

  // Non-blocking side effects
  Promise.allSettled([
    sendResultsEmail(data.email, resultJson),
    sendLeadNotification(data, resultJson),
  ]).catch((err) => console.error("Side effect error:", err));

  return NextResponse.json(resultJson);
}
