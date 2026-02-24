import React from "react";
import { LogoMark, Wordmark } from "./BuilderOSLogo";
import {
  Wallet,
  Package,
  ArrowLeftRight,
  MapPin,
} from "lucide-react";

const features = [
  { num: "1", Icon: Wallet, label: "Track Worker Wages" },
  { num: "2", Icon: Package, label: "Log Building Materials" },
  { num: "3", Icon: ArrowLeftRight, label: "Monitor Movement of Funds" },
  { num: "4", Icon: MapPin, label: "GPS-Stamped Site Proof" },
];

export function InstagramAdLight() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        background:
          "linear-gradient(170deg, #FFFFFF 0%, #F8FAFC 35%, #F1F5F9 65%, #FFFFFF 100%)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ── Background decorations ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "45%",
          top: "-12%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "40%",
          height: "40%",
          bottom: "-8%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "5.5% 6%",
        }}
      >
        {/* ── Row 1: Logo bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5%",
            marginBottom: "3.5%",
          }}
        >
          <LogoMark size={30} color="#0F172A" accentColor="#10B981" />
          <Wordmark
            height={16}
            color="#0F172A"
            accentColor="#94A3B8"
          />
        </div>

        {/* ── Row 2: Headline ── */}
        <div style={{ marginBottom: "3.5%" }}>
          <h1
            style={{
              fontSize: "clamp(18px, 5.2vw, 42px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
              margin: 0,
            }}
          >
            Building in Nigeria
            <br />
            from abroad?
          </h1>
          <p
            style={{
              fontSize: "clamp(11px, 2.6vw, 18px)",
              fontWeight: 500,
              color: "#64748B",
              marginTop: "1.5%",
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
            }}
          >
            Stop guessing where your money is going.
          </p>
        </div>

        {/* ── Row 3: 2×2 Feature Grid ── */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "3%",
            minHeight: 0,
          }}
        >
          {features.map((f) => (
            <div
              key={f.num}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(15,23,42,0.07)",
                boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "7%",
              }}
            >
              {/* Card inner glow */}
              <div
                style={{
                  position: "absolute",
                  width: "55%",
                  height: "55%",
                  top: "-15%",
                  right: "-15%",
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />

              {/* Top row: Icon + Step number */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "6%",
                  marginBottom: "6%",
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: "clamp(24px, 6.5vw, 44px)",
                    height: "clamp(24px, 6.5vw, 44px)",
                    borderRadius: "25%",
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <f.Icon
                    style={{
                      width: "clamp(12px, 3.2vw, 22px)",
                      height: "clamp(12px, 3.2vw, 22px)",
                    }}
                    color="#10B981"
                  />
                </div>

                {/* Step number */}
                <span
                  style={{
                    fontSize: "clamp(8px, 1.6vw, 12px)",
                    fontWeight: 700,
                    color: "#059669",
                    letterSpacing: "0.08em",
                  }}
                >
                  0{f.num}
                </span>
              </div>

              {/* Label */}
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "clamp(10px, 2.5vw, 17px)",
                  fontWeight: 600,
                  color: "#0F172A",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Row 4: CTA Button ── */}
        <div
          style={{
            marginTop: "4%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "88%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "2.8% 5%",
              borderRadius: 999,
              background: "#0F172A",
              boxShadow:
                "0 4px 24px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.08)",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "clamp(12px, 2.8vw, 18px)",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
              }}
            >
              Help Us Build the Solution
            </span>
            <span
              style={{
                fontSize: "clamp(12px, 2.8vw, 18px)",
                color: "#34D399",
              }}
            >
              ➔
            </span>
          </div>
        </div>

        {/* ── Row 5: Bottom tagline ── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(7px, 1.4vw, 10px)",
            fontWeight: 500,
            color: "#CBD5E1",
            marginTop: "2.5%",
            letterSpacing: "0.04em",
          }}
        >
          builderos.africa — The Operating System for Construction in Africa
        </p>
      </div>
    </div>
  );
}
