import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { LogoMark, Wordmark } from "../BuilderOSLogo";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const navLinks = [
  { label: "For Sponsors", to: "/for-sponsors" },
  { label: "For Contractors", to: "/for-contractors" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bos-nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--bos-border)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <LogoMark size={28} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor="#34D399" />
          <Wordmark
            height={16}
            color={isDark ? "#FFFFFF" : "#0F172A"}
            accentColor={isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.35)"}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] transition-all no-underline"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 500,
                color:
                  location.pathname === link.to
                    ? "var(--bos-text-2)"
                    : "var(--bos-text-3)",
                background: "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bos-btn-ghost-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer transition-all"
            style={{
              background: "var(--bos-surface)",
              border: "1px solid var(--bos-border)",
              color: "var(--bos-text-3)",
            }}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-[14px] transition-colors no-underline"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 500,
              color: "var(--bos-text-4)",
            }}
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-full text-[14px] text-white no-underline transition-all hover:opacity-90"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              boxShadow: "var(--bos-cta-shadow)",
            }}
          >
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer"
            style={{
              background: "var(--bos-surface)",
              border: "1px solid var(--bos-border)",
              color: "var(--bos-text-3)",
            }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg border-none cursor-pointer"
            style={{
              background: "var(--bos-btn-ghost-hover)",
              color: "var(--bos-text-1)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-1"
          style={{ background: "var(--bos-nav-bg)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center px-4 py-3 rounded-lg text-[15px] transition-all no-underline"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                color: "var(--bos-text-2)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3" style={{ borderTop: "1px solid var(--bos-border)" }}>
            <Link
              to="/login"
              className="px-4 py-3 rounded-lg text-[15px] no-underline"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "var(--bos-text-3)" }}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="px-5 py-3 rounded-full text-[15px] text-white text-center no-underline"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
