import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, company, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("Contact submission (no Resend key):", { name, email, company, message });
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
    return NextResponse.json(
      { error: "Failed to send message — please email ron@supermedia.co.nz directly" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
