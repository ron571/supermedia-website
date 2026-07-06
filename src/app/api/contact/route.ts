import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { ContactSchema } from "@/lib/schemas";

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_KV_REST_API_URL || !process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN,
  });
}

async function saveSubmission(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
  howHeard?: string;
}): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    console.warn("Upstash Redis not configured — contact form submission not saved for admin visibility.");
    return;
  }

  const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  const record = {
    id,
    submittedAt: new Date().toISOString(),
    submittedAtNZ: new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" }),
    name: data.name,
    email: data.email,
    company: data.company ?? null,
    message: data.message,
    howHeard: data.howHeard ?? null,
  };

  try {
    await redis.pipeline()
      .set(`sm:contact:submission:${id}`, JSON.stringify(record))
      .zadd("sm:contact:submissions", { score: now, member: id })
      .exec();
  } catch (err) {
    console.error("Contact form Redis storage error:", err);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const { name, email, company, message, howHeard } = parsed.data;

  // Save regardless of whether email is configured, so the enquiry is never lost.
  try {
    await saveSubmission({ name, email, company, message, howHeard });
  } catch (err) {
    console.error("saveSubmission failed:", err instanceof Error ? err.message : String(err));
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — contact form not emailed (saved to Redis if configured):", { name, email, company });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz",
      to: "ron@supermedia.co.nz",
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:sans-serif;color:#3A4A65;max-width:600px;">
          <div style="background:#1B2A4A;padding:24px 32px;margin-bottom:0;">
            <p style="color:#fff;font-size:18px;font-weight:700;letter-spacing:0.04em;margin:0;">
              SUPER <span style="font-size:9px;font-weight:500;letter-spacing:0.2em;color:#888;">MEDIA</span>
            </p>
          </div>
          <div style="background:#E8621A;padding:12px 32px;">
            <p style="color:#fff;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0;">New Contact Enquiry</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1B2A4A;width:120px;">Name</td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1B2A4A;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#E8621A;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1B2A4A;">Company</td>
                <td style="padding:8px 0;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1B2A4A;vertical-align:top;">Message</td>
                <td style="padding:8px 0;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1B2A4A;">How they heard about us</td>
                <td style="padding:8px 0;">${howHeard || "Not provided"}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;">
              <a href="mailto:${email}?subject=Re: Your enquiry to Super Media"
                 style="display:inline-block;background:#E8621A;color:#fff;text-decoration:none;font-weight:600;padding:10px 20px;border-radius:4px;font-size:14px;">
                Reply to ${name} →
              </a>
            </div>
          </div>
          <div style="background:#101E35;padding:16px 32px;">
            <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;">Submitted ${submittedAt} via supermedia.co.nz/contact</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend contact error:", err);
    // Submission is already saved above — don't fail the user's request over an email hiccup.
  }

  return NextResponse.json({ ok: true });
}
