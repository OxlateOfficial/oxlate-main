import { ImageResponse } from "next/og";

export const alt = "Oxlate — Web & Mobile Software Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#F5F2EC",
          color: "#111111",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Architectural Datum Hairline Grid Borders */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px solid rgba(217, 212, 204, 0.9)",
            display: "flex",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          {/* Logo Mark + Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5F2EC",
                fontWeight: 900,
                fontSize: "24px",
                letterSpacing: "-1px",
              }}
            >
              X
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "0.35em",
                color: "#111111",
              }}
            >
              O X L A T E
            </div>
          </div>

          {/* Chapter & Scope Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#A87445",
              textTransform: "uppercase",
            }}
          >
            <span>EST. 2025</span>
            <span style={{ color: "#D9D4CC" }}>//</span>
            <span style={{ color: "#6C6B66" }}>FOUNDER-LED STUDIO</span>
          </div>
        </div>

        {/* Center Editorial Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "#A87445",
              textTransform: "uppercase",
            }}
          >
            Founder-Led Software Studio • Direct Builder Access
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#111111",
            }}
          >
            Fast, reliable websites &amp; mobile apps for growing businesses.
          </div>
        </div>

        {/* Bottom Metadata & Discipline Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(217, 212, 204, 0.8)",
            paddingTop: "24px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              fontSize: "14px",
              color: "#6C6B66",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span>Web Applications</span>
            <span style={{ color: "#A87445" }}>/</span>
            <span>Mobile Apps</span>
            <span style={{ color: "#A87445" }}>/</span>
            <span>Internal Tools</span>
          </div>

          <div
            style={{
              fontSize: "14px",
              color: "#111111",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            oxlate.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
