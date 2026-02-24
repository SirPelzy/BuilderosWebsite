import React from "react";

/**
 * Clean Nomba logo — the signature "X" icon mark + "nomba" wordmark.
 * Uses currentColor so the wordmark adapts to dark/light themes automatically.
 * The icon uses Nomba's brand blue gradient.
 */
export function NombaLogo({
  height = 16,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const iconSize = height;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: height * 0.35,
        height,
      }}
    >
      {/* Nomba "X" icon mark — rounded square with an X */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="6" fill="url(#nomba-grad)" />
        <path
          d="M8 8L16 16M16 8L8 16"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="nomba-grad"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C2FF" />
            <stop offset="1" stopColor="#0066FF" />
          </linearGradient>
        </defs>
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: height * 0.85,
          fontWeight: 700,
          color: "currentColor",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        nomba
      </span>
    </span>
  );
}

/**
 * Clean Dojah logo — shield icon with checkmark + "dojah" wordmark.
 * The shield uses Dojah's brand indigo. The text uses currentColor for theme adaptation.
 */
export function DojahLogo({
  height = 16,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const iconSize = height;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: height * 0.35,
        height,
      }}
    >
      {/* Dojah shield + checkmark icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="6" fill="url(#dojah-grad)" />
        {/* Shield outline */}
        <path
          d="M12 4.5C12 4.5 6.5 7 6.5 12C6.5 16.5 12 20 12 20C12 20 17.5 16.5 17.5 12C17.5 7 12 4.5 12 4.5Z"
          fill="rgba(255,255,255,0.2)"
          stroke="white"
          strokeWidth="1.2"
        />
        {/* Checkmark */}
        <path
          d="M9.5 12.5L11 14.5L14.5 9.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="dojah-grad"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: height * 0.85,
          fontWeight: 700,
          color: "currentColor",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        dojah
      </span>
    </span>
  );
}
