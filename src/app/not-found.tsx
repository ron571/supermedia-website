import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en-NZ">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#1B2A4A", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "40px 24px" }}>
          <p style={{ color: "#E8621A", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>404</p>
          <h1 style={{ color: "#ffffff", fontSize: 40, fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>Page not found</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, marginBottom: 40, maxWidth: 420, margin: "0 auto 40px" }}>
            This page doesn&apos;t exist — or has moved.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ background: "#E8621A", color: "#fff", padding: "12px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
              Back to home
            </Link>
            <Link href="/superscan" style={{ border: "1px solid #fff", color: "#fff", padding: "12px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
              Run Superscan →
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
