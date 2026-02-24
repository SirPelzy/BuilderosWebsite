import React from "react";
import { Link } from "react-router";
import { LogoMark, Wordmark } from "../BuilderOSLogo";
import { useTheme } from "../ThemeContext";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "For Sponsors", to: "/for-sponsors" },
      { label: "For Contractors", to: "/for-contractors" },
      { label: "Pricing", to: "/pricing" },
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Refund Policy", to: "/refund" },
    ],
  },
];

export function Footer() {
  const { isDark } = useTheme();
  return (
    <footer style={{ background: "var(--bos-bg-1)", borderTop: "1px solid var(--bos-border-subtle)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="max-w-[300px]">
            <Link to="/" className="flex items-center gap-2.5 mb-5 no-underline">
              <LogoMark size={28} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor="#34D399" />
              <Wordmark height={16} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor={isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.3)"} />
            </Link>
            <p className="mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "var(--bos-text-4)", lineHeight: 1.6 }}>
              The operating system for trust in African construction. Replacing "trust" with Verification.
            </p>
            <div className="flex items-center gap-3">
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <a key={s} href="#" className="px-3 py-1.5 rounded-lg text-[12px] transition-colors no-underline" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)", background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "var(--bos-text-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {col.heading}
                </p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-[13px] transition-colors no-underline" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "var(--bos-text-4)" }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "var(--bos-text-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Account
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                <li><Link to="/login" className="text-[13px] transition-colors no-underline" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "var(--bos-text-4)" }}>Sign In</Link></li>
                <li><Link to="/signup" className="text-[13px] transition-colors no-underline" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "var(--bos-text-4)" }}>Create Account</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--bos-border-subtle)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: "var(--bos-text-5)" }}>
            © 2026 Builder Operating System Limited. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: "var(--bos-text-6)" }}>
            builderos.africa · builderos.live
          </p>
        </div>
      </div>
    </footer>
  );
}
