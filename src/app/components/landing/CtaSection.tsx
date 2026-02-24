import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "../BuilderOSLogo";
import { useTheme } from "../ThemeContext";

export function CtaSection() {
  const { isDark } = useTheme();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--bos-bg-3)" }}>
      {/* Large emerald glow */}
      <div
        className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <LogoMark size={48} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor="#34D399" />
          </div>

          <h2
            className="mb-5"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Ready to build
            <br />
            <span style={{ color: "#34D399" }}>with confidence?</span>
          </h2>

          <p
            className="mx-auto max-w-[460px] mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            Join the early access waitlist and be the first to experience
            fraud-free construction management for diaspora builders.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-[480px] mx-auto mb-6">
            <div
              className="flex-1 flex items-center rounded-xl px-4 h-[52px]"
              style={{
                background: "var(--bos-input-bg)",
                border: "1px solid var(--bos-input-border)",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-none outline-none text-[15px]"
                style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-1)" }}
              />
            </div>
            <button
              className="flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl border-none cursor-pointer transition-all hover:opacity-90 shrink-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
              }}
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              color: "var(--bos-text-5)",
            }}
          >
            Free to join · No credit card required · Be among the first 500
          </p>
        </motion.div>
      </div>
    </section>
  );
}