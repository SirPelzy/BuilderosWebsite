import React from "react";
import { motion } from "motion/react";
import { LogoMark } from "./BuilderOSLogo";
import {
  Banknote, CircleHelp, Frown, ImageOff,
  ShieldCheck, ScanFace, MapPin, Check, X,
  Smartphone, Wallet, ArrowRight, ArrowDown,
  DollarSign, HardHat,
} from "lucide-react";

/* ─── Animation variants ─────────────────────────────────────── */

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Shared slide frame ─────────────────────────────────────── */

function SlideFrame({
  children,
  dark = false,
  slideNumber,
}: {
  children: React.ReactNode;
  dark?: boolean;
  slideNumber: number;
}) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: dark
          ? "linear-gradient(165deg, #0B1120 0%, #0F172A 40%, #182237 100%)"
          : "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Subtle background grid */}
      {dark && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Logo mark */}
      <div className="absolute top-5 left-5 md:top-7 md:left-7 z-10">
        <LogoMark
          size={26}
          color={dark ? "#FFFFFF" : "#0F172A"}
          accentColor={dark ? "#34D399" : "#10B981"}
        />
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-5 right-5 md:top-7 md:right-7 z-10"
        style={{
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "monospace",
          color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)",
          letterSpacing: "0.05em",
        }}
      >
        0{slideNumber} / 04
      </div>

      {/* Content area */}
      <div className="w-full h-full flex flex-col items-center justify-center px-5 py-14 md:px-10 md:py-16 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

/* ════════════════════════════════════���══════════════════════════
   SLIDE 1 — The Core Problem
   ═══════════════════════════════════════════════════════════════ */

const oldWay = [
  { Icon: Banknote, label: "Cash sent on blind faith" },
  { Icon: ImageOff, label: "Blurry WhatsApp updates" },
  { Icon: CircleHelp, label: "Zero way to verify progress" },
  { Icon: Frown, label: "Constant anxiety & stress" },
];

const newWay = [
  { Icon: ShieldCheck, label: "Secure escrow vault" },
  { Icon: ScanFace, label: "Biometric face verification" },
  { Icon: MapPin, label: "GPS geofence confirmation" },
  { Icon: Check, label: "Real-time verified updates" },
];

export function Slide1Problem() {
  return (
    <SlideFrame dark slideNumber={1}>
      <motion.div
        className="w-full max-w-4xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="text-center mb-8 md:mb-10" variants={fadeUp}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: 10,
            }}
          >
            THE CORE PROBLEM
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            The Reality of Diaspora Building
          </h1>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Left — Old Way */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 md:p-7"
            style={{
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.12)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: "#F87171" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#FCA5A5",
                }}
              >
                THE OLD WAY
              </span>
            </div>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              Blind Trust
            </p>
            <div className="space-y-2.5">
              {oldWay.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(239,68,68,0.05)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(239,68,68,0.1)" }}
                  >
                    <item.Icon size={18} color="#F87171" />
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — BuilderOS Way */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 md:p-7"
            style={{
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.12)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: "#34D399" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#6EE7B7",
                }}
              >
                THE BUILDEROS WAY
              </span>
            </div>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              Verification
            </p>
            <div className="space-y-2.5">
              {newWay.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "rgba(16,185,129,0.05)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(16,185,129,0.1)" }}
                  >
                    <item.Icon size={18} color="#34D399" />
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideFrame>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLIDE 2 — Land Verification
   ═══════════════════════════════════════════════════════════════ */

const landTitles = [
  { num: "01", title: "Certificate of Occupancy (C of O)", desc: "The gold standard — issued by the State Governor" },
  { num: "02", title: "Governor's Consent", desc: "Required for any subsequent transfer of land" },
  { num: "03", title: "Gazette / Excision", desc: "Proof the land is released from government control" },
  { num: "04", title: "Court Judgment", desc: "A judicial declaration of ownership" },
];

export function Slide2Land() {
  return (
    <SlideFrame slideNumber={2}>
      <motion.div
        className="w-full max-w-3xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="text-center mb-8 md:mb-10" variants={fadeUp}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: 10,
            }}
          >
            LAND VERIFICATION
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 40px)",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Don't Buy a Lawsuit
          </h1>
          <p style={{ fontSize: 16, color: "#64748B", marginTop: 6, fontWeight: 500 }}>
            The 4 Valid Land Titles in Nigeria
          </p>
        </motion.div>

        {/* Checklist */}
        <div className="space-y-3 mb-6">
          {landTitles.map((item) => (
            <motion.div
              key={item.num}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 md:px-6 md:py-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#ECFDF5" }}
              >
                <Check size={20} color="#10B981" strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <p style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 13, color: "#94A3B8", fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning banner */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl px-5 py-4 md:px-6 md:py-5 flex items-center gap-4"
          style={{
            background: "linear-gradient(135deg, #FEF2F2 0%, #FFF1F2 100%)",
            border: "1px solid #FECACA",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "#FEE2E2" }}
          >
            <X size={20} color="#EF4444" strokeWidth={3} />
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#991B1B" }}>
              Warning: Never buy "Committed Land"
            </p>
            <p style={{ fontSize: 13, color: "#B91C1C", fontWeight: 400 }}>
              Land under Government Acquisition cannot be privately sold.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideFrame>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLIDE 3 — The Ghost Worker Scam
   ═══════════════════════════════════════════════════════════════ */

function WorkerBadge({ ghost = false }: { ghost?: boolean }) {
  return (
    <div
      className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all"
      style={
        ghost
          ? {
              border: "1.5px dashed rgba(239,68,68,0.3)",
              background: "rgba(239,68,68,0.04)",
            }
          : {
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.25)",
            }
      }
    >
      <HardHat
        size={18}
        color={ghost ? "rgba(239,68,68,0.25)" : "#34D399"}
      />
    </div>
  );
}

export function Slide3Ghost() {
  return (
    <SlideFrame dark slideNumber={3}>
      <motion.div
        className="w-full max-w-4xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="text-center mb-8 md:mb-10" variants={fadeUp}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: 10,
            }}
          >
            THE SCAM
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Are You Paying Phantom Staff?
          </h1>
        </motion.div>

        {/* Two columns comparison */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-6 items-start">
          {/* Left — What You Pay For */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 md:p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#6EE7B7",
                marginBottom: 16,
              }}
            >
              WHAT YOU PAY FOR
            </p>
            <div className="grid grid-cols-5 gap-2 mb-5">
              {Array.from({ length: 10 }).map((_, i) => (
                <WorkerBadge key={i} />
              ))}
            </div>
            <div
              className="rounded-xl px-4 py-3 flex items-center gap-3"
              style={{ background: "rgba(16,185,129,0.08)" }}
            >
              <Banknote size={18} color="#6EE7B7" />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#6EE7B7" }}>
                10 workers × daily wage
              </span>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex flex-col items-center justify-center self-center gap-2 py-6"
          >
            <ArrowRight size={28} color="#64748B" />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex md:hidden items-center justify-center py-2"
          >
            <ArrowDown size={24} color="#64748B" />
          </motion.div>

          {/* Right — What Shows Up */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 md:p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#FCA5A5",
                marginBottom: 16,
              }}
            >
              WHAT SHOWS UP
            </p>
            <div className="grid grid-cols-5 gap-2 mb-5">
              {Array.from({ length: 10 }).map((_, i) => (
                <WorkerBadge key={i} ghost={i >= 3} />
              ))}
            </div>

            {/* Stolen wages callout */}
            <div
              className="rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <DollarSign size={16} color="#F87171" />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#FCA5A5" }}>
                  70% — Stolen Wages
                </p>
                <p style={{ fontSize: 12, color: "rgba(252,165,165,0.6)" }}>
                  Paid to workers who never showed up
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideFrame>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLIDE 4 — The Solution (How BuilderOS Works)
   ═══════════════════════════════════════════════════════════════ */

const steps = [
  {
    num: "1",
    Icon: Smartphone,
    title: "Fund Secure Vault",
    subtitle: "Escrow",
    desc: "Money is held safely — never touches the contractor's pocket until work is verified.",
    accent: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    num: "2",
    Icon: ScanFace,
    title: "Daily Biometric Muster",
    subtitle: "Face Scan",
    desc: "Each worker scans their face on-site every morning. No scan, no pay.",
    accent: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
  {
    num: "3",
    Icon: MapPin,
    title: "GPS Geofencing",
    subtitle: "Verification",
    desc: "The phone must be physically within the verified construction site boundary.",
    accent: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    num: "4",
    Icon: Wallet,
    title: "Automated Payout",
    subtitle: "Instant",
    desc: "Wages released directly to worker bank accounts. No middleman, no theft.",
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
  },
];

export function Slide4Solution() {
  return (
    <SlideFrame slideNumber={4}>
      <motion.div
        className="w-full max-w-4xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="text-center mb-8 md:mb-10" variants={fadeUp}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#94A3B8",
              marginBottom: 10,
            }}
          >
            THE SOLUTION
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 38px)",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            The Secure Way to Build
          </h1>
          <p style={{ fontSize: 16, color: "#64748B", marginTop: 6, fontWeight: 500 }}>
            Escrow + Biometrics + GPS = Trust
          </p>
        </motion.div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-5 md:p-6 flex flex-col items-center text-center relative"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                {/* Step number badge */}
                <div
                  className="absolute -top-3 left-5 px-2.5 py-0.5 rounded-full"
                  style={{
                    background: step.accent,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  Step {step.num}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mt-3 mb-4"
                  style={{ background: step.bg }}
                >
                  <step.Icon size={26} color={step.accent} />
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: 2,
                  }}
                >
                  {step.title}
                </h3>
                <span
                  className="mb-3"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: step.accent,
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.subtitle}
                </span>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748B",
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>

                {/* Connector arrow (desktop, between cards) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "#F1F5F9",
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <ArrowRight size={12} color="#94A3B8" />
                    </div>
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </SlideFrame>
  );
}