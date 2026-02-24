import React from "react";
import { LogoMark, Wordmark } from "./BuilderOSLogo";
import { CalendarDays, ArrowRight } from "lucide-react";

export function InstagramAdDiagonalLight() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        background: "#FFFFFF",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ── Bottom diagonal panel (light slate) ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "48%",
          background:
            "linear-gradient(175deg, #F1F5F9 0%, #E2E8F0 60%, #F1F5F9 100%)",
          clipPath: "polygon(0 28%, 100% 0%, 100% 100%, 0 100%)",
        }}
      />

      {/* ── Diagonal accent line ── */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "48%",
          pointerEvents: "none",
          zIndex: 2,
        }}
        viewBox="0 0 1080 520"
        preserveAspectRatio="none"
        fill="none"
      >
        <line
          x1="0"
          y1="148"
          x2="1080"
          y2="0"
          stroke="rgba(16,185,129,0.35)"
          strokeWidth="2"
        />
        {/* Second thinner parallel line for depth */}
        <line
          x1="0"
          y1="156"
          x2="1080"
          y2="8"
          stroke="rgba(16,185,129,0.1)"
          strokeWidth="1"
        />
      </svg>

      {/* ── Subtle grid texture ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Emerald glow — top right ── */}
      <div
        style={{
          position: "absolute",
          width: "40%",
          height: "40%",
          top: "-5%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Emerald glow — bottom left ── */}
      <div
        style={{
          position: "absolute",
          width: "35%",
          height: "35%",
          bottom: "5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Content layer ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "6.5% 7.5%",
          zIndex: 5,
        }}
      >
        {/* ── Logo bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.2%",
            marginBottom: "6%",
          }}
        >
          <LogoMark size={26} color="#0F172A" accentColor="#10B981" />
          <Wordmark
            height={14}
            color="#0F172A"
            accentColor="#94A3B8"
          />
        </div>

        {/* ── Top section: Headline + Subtext ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: "4%",
            }}
          >
            <div
              style={{
                width: 20,
                height: 2,
                borderRadius: 999,
                background: "#10B981",
              }}
            />
            <span
              style={{
                fontSize: "clamp(8px, 1.8vw, 12px)",
                fontWeight: 700,
                color: "#059669",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Research Panel
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(22px, 6.2vw, 50px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: "4.5%",
              maxWidth: "92%",
            }}
          >
            Calling all
            <br />
            Diaspora Nigerians
            <br />
            <span style={{ color: "#059669" }}>Building Back Home.</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(10px, 2.4vw, 16px)",
              fontWeight: 400,
              color: "#64748B",
              lineHeight: 1.55,
              letterSpacing: "-0.005em",
              margin: 0,
              maxWidth: "88%",
            }}
          >
            We are building an anti-fraud platform to track your site's wages,
            materials, and funds with irrefutable GPS proof.{" "}
            <span style={{ color: "#334155", fontWeight: 500 }}>
              We want to hear your story.
            </span>
          </p>
        </div>

        {/* ── Bottom section: Calendar + CTA ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            marginTop: "auto",
            paddingTop: "6%",
          }}
        >
          {/* Calendar icon */}
          <div
            style={{
              width: "clamp(48px, 12vw, 80px)",
              height: "clamp(48px, 12vw, 80px)",
              borderRadius: "clamp(10px, 2.5vw, 18px)",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CalendarDays
              style={{
                width: "clamp(22px, 5.5vw, 38px)",
                height: "clamp(22px, 5.5vw, 38px)",
              }}
              color="#10B981"
              strokeWidth={1.5}
            />
          </div>

          {/* CTA column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "clamp(6px, 1.5vw, 10px)" }}>
            <span
              style={{
                fontSize: "clamp(9px, 2vw, 13px)",
                fontWeight: 500,
                color: "#94A3B8",
                letterSpacing: "0.01em",
              }}
            >
              15 minutes. Your insights shape the product.
            </span>
            {/* Button */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "clamp(6px, 1.5vw, 10px)",
                padding: "clamp(10px, 2.5vw, 16px) clamp(18px, 4.5vw, 30px)",
                borderRadius: 999,
                background: "#0F172A",
                color: "#FFFFFF",
                fontSize: "clamp(11px, 2.6vw, 17px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                cursor: "pointer",
                alignSelf: "flex-start",
                boxShadow: "0 4px 24px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.08)",
              }}
            >
              Book a 15-Min Chat
              <ArrowRight
                style={{
                  width: "clamp(12px, 2.8vw, 18px)",
                  height: "clamp(12px, 2.8vw, 18px)",
                }}
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(7px, 1.3vw, 9px)",
            fontWeight: 500,
            color: "#CBD5E1",
            marginTop: "5%",
            letterSpacing: "0.04em",
          }}
        >
          builderos.africa
        </p>
      </div>
    </div>
  );
}
