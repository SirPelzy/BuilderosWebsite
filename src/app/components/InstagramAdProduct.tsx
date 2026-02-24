import React from "react";
import { LogoMark, Wordmark } from "./BuilderOSLogo";
import { MapPin, CheckCircle, Wifi } from "lucide-react";

/* ── Stylised abstract map (SVG) ── */
function AbstractMap() {
  return (
    <svg
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Background */}
      <rect width="300" height="500" fill="#0D1520" />

      {/* Grid streets — horizontal */}
      {[60, 130, 200, 280, 360, 430].map((y) => (
        <rect key={`h-${y}`} x="0" y={y} width="300" height="1.5" fill="rgba(255,255,255,0.04)" />
      ))}
      {/* Grid streets — vertical */}
      {[50, 110, 170, 230].map((x) => (
        <rect key={`v-${x}`} x={x} y="0" width="1.5" height="500" fill="rgba(255,255,255,0.04)" />
      ))}

      {/* City blocks */}
      <rect x="16" y="20" width="28" height="34" rx="3" fill="rgba(255,255,255,0.03)" />
      <rect x="56" y="20" width="48" height="34" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="116" y="16" width="48" height="42" rx="3" fill="rgba(255,255,255,0.03)" />
      <rect x="175" y="20" width="50" height="34" rx="3" fill="rgba(255,255,255,0.04)" />
      <rect x="236" y="16" width="48" height="38" rx="3" fill="rgba(255,255,255,0.03)" />

      <rect x="16" y="68" width="86" height="52" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="116" y="68" width="50" height="52" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="175" y="68" width="30" height="52" rx="4" fill="rgba(255,255,255,0.025)" />
      <rect x="216" y="68" width="68" height="52" rx="4" fill="rgba(255,255,255,0.035)" />

      <rect x="16" y="140" width="48" height="50" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="74" y="140" width="30" height="50" rx="4" fill="rgba(255,255,255,0.025)" />
      <rect x="116" y="140" width="106" height="50" rx="4" fill="rgba(255,255,255,0.035)" />
      <rect x="236" y="140" width="48" height="50" rx="4" fill="rgba(255,255,255,0.03)" />

      {/* Construction site block — highlighted */}
      <rect x="88" y="210" width="120" height="70" rx="6" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
      <text x="148" y="252" textAnchor="middle" fill="rgba(16,185,129,0.35)" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">
        SITE 04-A
      </text>

      <rect x="16" y="210" width="60" height="70" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="222" y="210" width="62" height="70" rx="4" fill="rgba(255,255,255,0.03)" />

      <rect x="16" y="298" width="86" height="52" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="116" y="298" width="50" height="52" rx="4" fill="rgba(255,255,255,0.025)" />
      <rect x="175" y="298" width="108" height="52" rx="4" fill="rgba(255,255,255,0.03)" />

      <rect x="16" y="368" width="48" height="52" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="74" y="368" width="90" height="52" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="175" y="368" width="50" height="52" rx="4" fill="rgba(255,255,255,0.025)" />
      <rect x="236" y="368" width="48" height="52" rx="4" fill="rgba(255,255,255,0.035)" />

      <rect x="16" y="438" width="106" height="46" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="135" y="438" width="60" height="46" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="206" y="438" width="78" height="46" rx="4" fill="rgba(255,255,255,0.025)" />

      {/* Roads — wider main arteries */}
      <rect x="0" y="198" width="300" height="6" rx="1" fill="rgba(255,255,255,0.025)" />
      <rect x="106" y="0" width="5" height="500" rx="1" fill="rgba(255,255,255,0.025)" />

      {/* GPS pulse rings */}
      <circle cx="148" cy="244" r="40" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
      <circle cx="148" cy="244" r="26" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
      <circle cx="148" cy="244" r="14" fill="none" stroke="rgba(16,185,129,0.18)" strokeWidth="1.5" />

      {/* GPS Pin */}
      <g transform="translate(148,228)">
        <path
          d="M0-16C-6.6-16-12-10.6-12-4C-12 4.8 0 16 0 16S12 4.8 12-4C12-10.6 6.6-16 0-16Z"
          fill="#10B981"
          stroke="#34D399"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-4" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/* ── Floating pill tag ── */
function PillTag({
  label,
  style,
}: {
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "6px 14px",
        borderRadius: 999,
        background: "rgba(15,23,42,0.85)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#34D399",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "clamp(9px, 2vw, 13px)",
          fontWeight: 600,
          color: "#FFFFFF",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function InstagramAdProduct() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        background:
          "linear-gradient(170deg, #070D18 0%, #0F172A 35%, #131D30 65%, #0B1120 100%)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ── Background decorations ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Top-right glow */}
      <div
        style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Bottom-left glow */}
      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "45%",
          bottom: "-5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
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
          alignItems: "center",
          padding: "5% 6%",
        }}
      >
        {/* ── Logo bar ── */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "2%",
            marginBottom: "3%",
          }}
        >
          <LogoMark size={26} color="#FFFFFF" accentColor="#34D399" />
          <Wordmark
            height={14}
            color="#FFFFFF"
            accentColor="rgba(255,255,255,0.35)"
          />
        </div>

        {/* ── Headline ── */}
        <h1
          style={{
            width: "100%",
            fontSize: "clamp(17px, 4.8vw, 38px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.12,
            letterSpacing: "-0.04em",
            margin: 0,
            marginBottom: "4%",
            textAlign: "center",
          }}
        >
          Total Control Over Your
          <br />
          Construction Site.
        </h1>

        {/* ── Phone mockup area ── */}
        <div
          style={{
            position: "relative",
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0,
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              position: "relative",
              width: "48%",
              height: "92%",
              maxWidth: 230,
              borderRadius: "clamp(16px, 4vw, 32px)",
              background: "#111827",
              border: "2px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.5), 0 0 120px rgba(16,185,129,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                padding: "8% 6% 3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(7px, 1.5vw, 10px)",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                9:41
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Wifi
                  style={{
                    width: "clamp(7px, 1.5vw, 10px)",
                    height: "clamp(7px, 1.5vw, 10px)",
                  }}
                  color="rgba(255,255,255,0.4)"
                />
                <div
                  style={{
                    width: "clamp(12px, 2.5vw, 16px)",
                    height: "clamp(6px, 1.2vw, 8px)",
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.3)",
                    padding: 1,
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "100%",
                      borderRadius: 1,
                      background: "#34D399",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Map area */}
            <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
              <AbstractMap />

              {/* "Activity Verified" notification overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(4px, 1vw, 7px)",
                  padding: "clamp(5px, 1.2vw, 8px) clamp(8px, 2vw, 14px)",
                  borderRadius: 999,
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  backdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                }}
              >
                <CheckCircle
                  style={{
                    width: "clamp(10px, 2.2vw, 15px)",
                    height: "clamp(10px, 2.2vw, 15px)",
                    flexShrink: 0,
                  }}
                  color="#34D399"
                />
                <span
                  style={{
                    fontSize: "clamp(7px, 1.6vw, 11px)",
                    fontWeight: 700,
                    color: "#34D399",
                    letterSpacing: "0.02em",
                  }}
                >
                  Activity Verified
                </span>
              </div>
            </div>

            {/* Bottom nav bar */}
            <div
              style={{
                padding: "4% 10% 6%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 1 ? "clamp(6px, 1.3vw, 9px)" : "clamp(5px, 1.1vw, 7px)",
                    height: i === 1 ? "clamp(6px, 1.3vw, 9px)" : "clamp(5px, 1.1vw, 7px)",
                    borderRadius: "50%",
                    background:
                      i === 1 ? "#34D399" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Home indicator */}
            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "4%" }}>
              <div
                style={{
                  width: "35%",
                  height: 3,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
            </div>
          </div>

          {/* ── Floating pill tags ── */}
          <PillTag
            label="Wages"
            style={{
              top: "8%",
              left: "5%",
            }}
          />
          <PillTag
            label="Materials"
            style={{
              top: "12%",
              right: "4%",
            }}
          />
          <PillTag
            label="Funds"
            style={{
              bottom: "16%",
              left: "4%",
            }}
          />
          <PillTag
            label="Geolocation"
            style={{
              bottom: "10%",
              right: "3%",
            }}
          />

          {/* Decorative connecting lines (subtle) */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
              pointerEvents: "none",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top-left pill to phone */}
            <line x1="22" y1="12" x2="34" y2="22" stroke="rgba(52,211,153,0.1)" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
            {/* Top-right pill to phone */}
            <line x1="78" y1="16" x2="66" y2="24" stroke="rgba(52,211,153,0.1)" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
            {/* Bottom-left pill to phone */}
            <line x1="20" y1="82" x2="34" y2="72" stroke="rgba(52,211,153,0.1)" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
            {/* Bottom-right pill to phone */}
            <line x1="82" y1="88" x2="66" y2="76" stroke="rgba(52,211,153,0.1)" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
          </svg>
        </div>

        {/* ── Subheadline ── */}
        <p
          style={{
            marginTop: "3.5%",
            fontSize: "clamp(10px, 2.5vw, 17px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "-0.01em",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Join our exclusive Diaspora research panel.
        </p>

        {/* ── Bottom tagline ── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(7px, 1.4vw, 10px)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.15)",
            marginTop: "2.5%",
            letterSpacing: "0.04em",
          }}
        >
          builderos.africa
        </p>
      </div>
    </div>
  );
}
