import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0e13",
          backgroundImage:
            "radial-gradient(60% 70% at 85% 15%, rgba(94,234,212,0.18), transparent 65%)",
          color: "#e8eef5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#5eead4",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              border: "2px solid #5eead4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              letterSpacing: 0,
            }}
          >
            AR
          </div>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: "#5eead4" }}>{site.title}</div>
          <div style={{ fontSize: 28, color: "#a3b1c2", maxWidth: 900 }}>
            Full-stack AI products — LLM platforms, computer vision, and applied ML.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a3b1c2",
          }}
        >
          <span>{site.location}</span>
          <span>{site.email}</span>
        </div>
      </div>
    ),
    size
  );
}
