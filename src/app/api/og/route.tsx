import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B2A4A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#E8621A",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                backgroundColor: "#E8621A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontSize: "28px", fontWeight: 900 }}>S</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#fff", fontSize: "22px", fontWeight: 700, letterSpacing: "0.04em" }}>
                SUPER
              </span>
              <span style={{ color: "#888", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em" }}>
                MEDIA
              </span>
            </div>
          </div>

          {/* Main text */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#E8621A",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Independent NZ Media Intelligence
            </span>
            <span
              style={{
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "800px",
              }}
            >
              No network. No commissions. No conflicts.
            </span>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>
              supermedia.co.nz
            </span>
            <div
              style={{
                backgroundColor: "#E8621A",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Run your Superscan →
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
