import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

async function saveSubscriber(email: string): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    console.warn("Upstash Redis not configured — newsletter subscriber not saved to a persistent list.");
    return;
  }

  const now = Date.now();
  const record = {
    email,
    signedUpAt: new Date().toISOString(),
    signedUpAtNZ: new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" }),
  };

  try {
    // Keyed by email so re-signups update the timestamp instead of duplicating.
    await redis.pipeline()
      .set(`sm:newsletter:subscriber:${email.toLowerCase()}`, JSON.stringify(record))
      .zadd("sm:newsletter:subscribers", { score: now, member: email.toLowerCase() })
      .exec();
  } catch (err) {
    console.error("Newsletter Redis storage error:", err);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email } = body as Record<string, string>;

  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
  }

  // Save to the persistent list regardless of whether email is configured.
  try {
    await saveSubscriber(email.trim());
  } catch (err) {
    console.error("saveSubscriber failed:", err instanceof Error ? err.message : String(err));
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — newsletter notification not emailed (subscriber saved to Redis if configured):", email);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const signedUpAt = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

  try {
    // Notify Ron of the new subscriber
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz",
      to: "ron@supermedia.co.nz",
      subject: `New newsletter subscriber — ${email}`,
      html: `
        <div style="font-family:sans-serif;color:#3A4A65;max-width:600px;">
          <div style="background:#1B2A4A;padding:24px 32px;">
            <p style="color:#fff;font-size:18px;font-weight:700;letter-spacing:0.04em;margin:0;">
              SUPER <span style="font-size:9px;font-weight:500;letter-spacing:0.2em;color:#888;">MEDIA</span>
            </p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <p style="color:#E8621A;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 16px;">New Newsletter Subscriber</p>
            <p style="font-size:16px;margin:0 0 8px;"><strong>${email}</strong></p>
            <p style="color:#888;font-size:13px;margin:0;">Signed up ${signedUpAt}</p>
          </div>
          <div style="background:#101E35;padding:16px 32px;">
            <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0;">Via supermedia.co.nz footer signup</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Newsletter Resend error:", err);
    // Don't surface the error to the user — the signup is noted even if the notification fails
  }

  return NextResponse.json({ ok: true });
}
