import React from "react";

interface LogoMarkProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

/**
 * The BuilderOS Mosaic Mark
 *
 * An asymmetric grid of 5 architectural blocks — evoking a building
 * floor plan, an OS dashboard layout, and modular construction.
 * One block is the accent "verification" block.
 *
 * Layout (40×40 viewBox):
 * ┌────────────────┐ ┌────────┐
 * │       A        │ │ B (acc)│
 * └────────────────┘ └────────┘
 *
 * ┌────────┐ ┌──────┐ ┌──────┐
 * │   C    │ │  D   │ │  E   │
 * │        │ │      │ │      │
 * └────────┘ └──────┘ └──────┘
 */
export function LogoMark({
  size = 48,
  color = "#0F172A",
  accentColor = "#10B981",
  className = "",
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top row */}
      {/* Block A — large, top-left */}
      <rect x="0" y="0" width="24" height="17" rx="3.5" fill={color} />
      {/* Block B — small, top-right, ACCENT (the verification signal) */}
      <rect x="27" y="0" width="13" height="17" rx="3.5" fill={accentColor} />

      {/* Bottom row */}
      {/* Block C — tall, bottom-left */}
      <rect x="0" y="20" width="13" height="20" rx="3.5" fill={color} />
      {/* Block D — medium, bottom-center */}
      <rect x="16" y="20" width="11" height="20" rx="3.5" fill={color} />
      {/* Block E — medium, bottom-right */}
      <rect x="30" y="20" width="10" height="20" rx="3.5" fill={color} />
    </svg>
  );
}

interface WordmarkProps {
  color?: string;
  accentColor?: string;
  height?: number;
  className?: string;
}

export function Wordmark({
  color = "#0F172A",
  accentColor = "#64748B",
  height = 28,
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline ${className}`}
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        fontSize: height,
        letterSpacing: "-0.035em",
        lineHeight: 1,
      }}
    >
      <span style={{ color, fontWeight: 600 }}>Builder</span>
      <span style={{ color: accentColor, fontWeight: 700 }}>OS</span>
    </span>
  );
}

interface LogoLockupProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  accentColor?: string;
  layout?: "horizontal" | "vertical";
  className?: string;
}

const sizeMap = {
  sm: { mark: 28, text: 17, gap: 8 },
  md: { mark: 40, text: 22, gap: 10 },
  lg: { mark: 56, text: 30, gap: 14 },
  xl: { mark: 80, text: 44, gap: 18 },
};

export function LogoLockup({
  size = "md",
  color = "#0F172A",
  accentColor = "#10B981",
  layout = "horizontal",
  className = "",
}: LogoLockupProps) {
  const dims = sizeMap[size];
  const isLight =
    color === "#FFFFFF" || color === "#ffffff" || color === "white";
  const osColor = isLight ? "rgba(255,255,255,0.55)" : "#94A3B8";

  return (
    <div
      className={`inline-flex items-center ${
        layout === "vertical" ? "flex-col" : "flex-row"
      } ${className}`}
      style={{ gap: dims.gap }}
    >
      <LogoMark size={dims.mark} color={color} accentColor={accentColor} />
      <Wordmark color={color} accentColor={osColor} height={dims.text} />
    </div>
  );
}

interface AppIconProps {
  size?: number;
  variant?: "dark" | "light" | "emerald";
  className?: string;
}

export function AppIcon({
  size = 64,
  variant = "dark",
  className = "",
}: AppIconProps) {
  const markSize = size * 0.52;
  const radius = size * 0.22;

  const backgrounds: Record<string, string> = {
    dark: "linear-gradient(145deg, #0F172A 0%, #1E293B 100%)",
    light: "#FFFFFF",
    emerald: "linear-gradient(145deg, #059669 0%, #10B981 100%)",
  };

  const shadows: Record<string, string> = {
    dark: "0 4px 24px rgba(15, 23, 42, 0.35)",
    light:
      "0 4px 24px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(0,0,0,0.06)",
    emerald: "0 4px 24px rgba(16, 185, 129, 0.3)",
  };

  const markColor = variant === "light" ? "#0F172A" : "#FFFFFF";
  const accent =
    variant === "emerald" ? "rgba(255,255,255,0.7)" : "#34D399";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: backgrounds[variant],
        boxShadow: shadows[variant],
      }}
    >
      <LogoMark size={markSize} color={markColor} accentColor={accent} />
    </div>
  );
}
