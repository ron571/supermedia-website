import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SocialScanEnquirySchema, type SocialScanResult } from "@/lib/schemas";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = SocialScanEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }

  const data = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    // No email configured — still return success so the user gets confirmation
    console.warn("RESEND_API_KEY not set — Social Scan enquiry not emailed");
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

  // Parse scan results if provided
  let scanResult: SocialScanResult | null = null;
  if (data.scanResultJson) {
    try {
      scanResult = JSON.parse(data.scanResultJson) as SocialScanResult;
    } catch {
      // Non-fatal
    }
  }

  // Build platform rows for the email
  const platformRowsHtml = scanResult?.platforms
    .map((p) => {
      const statusColors: Record<string, string> = {
        active: "#22c55e",
        present: "#f59e0b",
        inactive: "#f97316",
        absent: "#9ca3af",
      };
      const color = statusColors[p.status] ?? "#9ca3af";
      return `
        <tr>
          <td style="padding:6px 8px;font-size:13px;color:#1B2A4A;font-weight:600;">${p.name}</td>
          <td style="padding:6px 8px;font-size:13px;"><span style="color:${color};font-weight:600;">${p.status}</span></td>
          <td style="padding:6px 8px;font-size:13px;color:#3A4A65;">${p.score}/10</td>
          <td style="padding:6px 8px;font-size:12px;color:#6b7280;">${p.finding}</td>
        </tr>`;
    })
    .join("") ?? "";

  const headlineFindingsHtml = scanResult?.headlineFindings
    .map((f) => `<li style="margin-bottom:6px;">${f}</li>`)
    .join("") ?? "";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:sans-serif;color:#3A4A65;background:#fff;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;">
    <tr><td style="background:#1B2A4A;padding:28px 40px;">
      <p style="color:#fff;font-size:20px;font-weight:700;letter-spacing:0.04em;margin:0;">SUPER <span style="font-size:9px;font-weight:500;letter-spacing:0.2em;color:#888;">MEDIA</span></p>
    </td></tr>
    <tr><td style="padding:32px 40px;">
      <p style="color:#E8621A;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 12px;">New Social Scan Enquiry</p>
      <h2 style="color:#1B2A4A;font-size:22px;font-weight:700;margin:0 0 24px;">Full report requested</h2>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;width:140px;">Submitted:</td><td style="padding:6px 0;">${submittedAt}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Scanned entity:</td><td style="padding:6px 0;">${data.scanName} (${data.scanEntityType})</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Contact name:</td><td style="padding:6px 0;">${data.contactName}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Email:</td><td style="padding:6px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        ${data.phone ? `<tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Phone:</td><td style="padding:6px 0;">${data.phone}</td></tr>` : ""}
        ${data.organisation ? `<tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Organisation:</td><td style="padding:6px 0;">${data.organisation}</td></tr>` : ""}
        ${data.serviceInterest ? `<tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">Service interest:</td><td style="padding:6px 0;font-weight:700;color:#E8621A;">${{ full_report: "Full Scan Report", ai_footprint: "AI Footprint Audit", content_strategy: "Content Strategy", benchmarking: "Benchmarking Report" }[data.serviceInterest] ?? data.serviceInterest}</td></tr>` : ""}
        <tr><td style="padding:6px 0;font-weight:600;color:#1B2A4A;">How they heard about us:</td><td style="padding:6px 0;">${data.howHeard || "Not provided"}</td></tr>
      </table>

      ${data.message ? `
      <div style="background:#f9fafb;border-left:3px solid #E8621A;padding:12px 16px;margin-bottom:24px;">
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6b7280;margin:0 0 6px;">Message</p>
        <p style="margin:0;">${data.message}</p>
      </div>` : ""}

      ${scanResult ? `
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
      <p style="color:#E8621A;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin:0 0 8px;">Scan Summary Delivered to User</p>
      <p style="margin:0 0 4px;"><strong>Grade:</strong> ${scanResult.overallGrade} (${scanResult.overallScore}/100)</p>
      <p style="margin:0 0 16px;">${scanResult.summary}</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:13px;">
        <thead>
          <tr style="background:#f3f4f6;">
            <th style="padding:8px;text-align:left;color:#1B2A4A;">Platform</th>
            <th style="padding:8px;text-align:left;color:#1B2A4A;">Status</th>
            <th style="padding:8px;text-align:left;color:#1B2A4A;">Score</th>
            <th style="padding:8px;text-align:left;color:#1B2A4A;">Finding</th>
          </tr>
        </thead>
        <tbody>${platformRowsHtml}</tbody>
      </table>

      <p style="margin:0 0 4px;"><strong>Media coverage:</strong> ${scanResult.mediaCoverage.status} — ${scanResult.mediaCoverage.finding}${scanResult.mediaCoverage.utilizationGap ? " <em>(Utilization gap identified)</em>" : ""}</p>

      ${scanResult.aiVisibility ? `
      <p style="margin:12px 0 4px;"><strong>AI visibility:</strong> Citation readiness — <strong>${scanResult.aiVisibility.citationReadiness}</strong>. ${scanResult.aiVisibility.aiSearchFinding}</p>
      <p style="margin:0 0 4px;">${scanResult.aiVisibility.contentIndexability}</p>` : ""}

      ${scanResult.benchmarking ? `
      <p style="margin:12px 0 4px;"><strong>Benchmarking (${scanResult.benchmarking.sector}):</strong> NZ peers — <strong>${scanResult.benchmarking.nzPeerRating}</strong>. ${scanResult.benchmarking.nzPeerContext}</p>
      <p style="margin:0 0 4px;">${scanResult.benchmarking.globalStandardGap}</p>` : ""}

      <p style="margin:16px 0 4px;font-weight:600;color:#1B2A4A;">Headline findings shown to user:</p>
      <ul style="margin:0;padding-left:20px;">${headlineFindingsHtml}</ul>
      ` : ""}
    </td></tr>
    <tr><td style="background:#101E35;padding:20px 40px;">
      <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;">
        © 2026 Super Media · <a href="mailto:ron@supermedia.co.nz" style="color:rgba(255,255,255,0.4);">ron@supermedia.co.nz</a>
      </p>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz",
      to: "ron@supermedia.co.nz",
      replyTo: data.email,
      subject: `Social Scan — ${data.scanName} · ${data.contactName}${data.serviceInterest && data.serviceInterest !== "full_report" ? ` · ${{ ai_footprint: "AI Footprint Audit", content_strategy: "Content Strategy", benchmarking: "Benchmarking Report" }[data.serviceInterest] ?? ""}` : ""}`,
      html,
    });
  } catch (err) {
    console.error("Social Scan enquiry email failed:", err instanceof Error ? err.message : String(err));
    // Still return success — don't block the user
  }

  return NextResponse.json({ ok: true });
}
