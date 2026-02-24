import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, MapPin, Wallet, Package } from "lucide-react";
import { Link } from "react-router";
import { LogoMark } from "../BuilderOSLogo";
import { useTheme } from "../ThemeContext";
import { NombaLogo, DojahLogo } from "../PartnerLogos";

export function Hero() {
  const { isDark } = useTheme();
  return (
    <section className="relative min-h-screen overflow-hidden pt-[72px]" style={{ background: "var(--bos-hero-gradient)" }}>
      <div className="absolute inset-0" style={{ opacity: "var(--bos-grid-opacity)", backgroundImage: `linear-gradient(var(--bos-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--bos-grid-color) 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
      <div className="absolute w-[600px] h-[600px] -top-[100px] -right-[100px] rounded-full" style={{ background: `radial-gradient(circle, var(--bos-glow-emerald) 0%, transparent 70%)` }} />
      <div className="absolute w-[500px] h-[500px] -bottom-[100px] -left-[100px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16 lg:py-24">
        <div className="flex-1 max-w-[600px]">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[13px] text-emerald-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Now accepting early access sign-ups</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, color: "var(--bos-text-1)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            Build homes<br />in Africa.<br /><span style={{ color: "#34D399" }}>Without the fraud.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 max-w-[480px]" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400, color: "var(--bos-text-3)", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
            Track wages, materials, and funds with GPS-verified proof. The operating system that lets diaspora Africans build back home — with full transparency.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 max-w-[460px]">
            <div className="flex-1 flex items-center rounded-xl px-4 h-[52px]" style={{ background: "var(--bos-input-bg)", border: "1px solid var(--bos-input-border)" }}>
              <input type="email" placeholder="What's your email?" className="w-full bg-transparent border-none outline-none text-[15px] placeholder-current" style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-1)", opacity: 1 }} />
            </div>
            <button className="flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl border-none cursor-pointer transition-all hover:opacity-90 shrink-0" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600, color: "#FFFFFF", background: "linear-gradient(135deg, #10B981 0%, #059669 100%)", boxShadow: "var(--bos-cta-shadow)" }}>
              Get Early Access <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center gap-3">
            {/* Nomba integration badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)", color: "var(--bos-text-2)" }}>
              <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)" }}>Secured by</span>
              <NombaLogo height={14} className="shrink-0" />
            </div>
            {/* Dojah integration badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)", color: "var(--bos-text-2)" }}>
              <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)" }}>Verified by</span>
              <DojahLogo height={14} className="shrink-0" />
            </div>
            <Link to="/about" className="text-[13px] cursor-pointer transition-colors no-underline hover:opacity-70" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)" }}>Why BuilderOS →</Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex-1 w-full max-w-[600px] relative">
          <ProductMockup isDark={isDark} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to bottom, transparent, var(--bos-bg-3))` }} />
    </section>
  );
}

function ProductMockup({ isDark }: { isDark: boolean }) {
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const innerBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)";
  const innerBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)";
  const innerBorder2 = isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.04)";

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${cardBorder}`, boxShadow: "var(--bos-shadow-card)" }}>
        <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: `1px solid ${innerBorder}` }}>
          <LogoMark size={18} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor="#34D399" />
          <span className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)" }}>BuilderOS Dashboard</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
            <span className="text-[11px] text-emerald-400/70" style={{ fontFamily: "'Inter', sans-serif" }}>Live</span>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--bos-text-4)" }}>Active Project</p>
              <p className="text-[18px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--bos-text-1)" }}>4-Bedroom Duplex — Lekki</p>
              <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-3)" }}>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-emerald-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>On Track</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Total Spent", value: "₦14.2M", sub: "of ₦22M budget" },
              { label: "Workers Verified", value: "12", sub: "biometric check-ins" },
              { label: "GPS Confirmations", value: "47", sub: "this month" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-3" style={{ background: innerBg, border: `1px solid ${innerBorder}` }}>
                <p className="text-[10px] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--bos-text-4)" }}>{stat.label}</p>
                <p className="text-[20px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--bos-text-1)" }}>{stat.value}</p>
                <p className="text-[11px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-5)" }}>{stat.sub}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[11px] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--bos-text-4)" }}>Recent Activity</p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Wallet, text: "Cement delivery — ₦480,000", time: "2h ago", color: "#34D399" },
                { icon: MapPin, text: "GPS check-in verified — Site Lekki", time: "4h ago", color: "#60A5FA" },
                { icon: Package, text: "12 bags granite received", time: "6h ago", color: "#F59E0B" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2.5" style={{ background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)", border: `1px solid ${innerBorder2}` }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  </div>
                  <span className="flex-1 text-[12px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-3)" }}>{item.text}</span>
                  <span className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-5)" }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -bottom-6 -left-8 hidden sm:flex rounded-xl px-4 py-3 items-center gap-3 z-20" style={{ background: "var(--bos-overlay)", border: "1px solid var(--bos-emerald-border)", boxShadow: "var(--bos-shadow-card)", backdropFilter: "blur(12px)" }}>
        <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
          <Shield className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[12px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "var(--bos-text-1)" }}>Activity Verified ✓</p>
          <p className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-4)" }}>GPS: 6.4541° N, 3.4218° E</p>
        </div>
      </motion.div>
    </div>
  );
}