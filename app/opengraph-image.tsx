import { ImageResponse } from "next/og";
import { divisions } from "@/data/divisions";

export const alt = "Fidinda Solutions — Finance, Management, Healthcare & Travel in Phnom Penh, Cambodia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Auto-generated social share image (used by Facebook, WhatsApp, Telegram, LinkedIn…). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1C095A",
          color: "white",
          padding: "70px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1C095A",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Fidinda Solutions</div>
            <div style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", letterSpacing: 4 }}>PHNOM PENH · CAMBODIA</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 90, height: 6, background: "#E1041C", marginBottom: 28 }} />
          <div style={{ fontSize: 60, lineHeight: 1.15, fontWeight: 700, maxWidth: 1000 }}>
            Your Trusted Partner for Finance, Management, Healthcare & Travel
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {divisions.map((d) => (
            <div
              key={d.slug}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                borderLeft: "6px solid #E1041C",
                fontSize: 24,
                fontFamily: "sans-serif",
              }}
            >
              {d.shortName}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
