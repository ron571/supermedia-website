import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

  if (!process.env.RESEND_API_KEY) {
    console.log("Newsletter signup (no Resend key):", email);
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
