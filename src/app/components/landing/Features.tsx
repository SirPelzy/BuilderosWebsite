import React from "react";
import { motion } from "motion/react";
import {
  Wallet,
  Package,
  ArrowLeftRight,
  MapPin,
  Fingerprint,
  Camera,
  BarChart3,
  Bell,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Wallet,
    title: "Track Worker Wages",
    description:
      "Every payment logged, verified, and timestamped. Know exactly who was paid, how much, and when — with biometric proof of presence.",
    color: "#34D399",
  },
  {
    icon: Package,
    title: "Log Building Materials",
    description:
      "Deliveries verified with photographic evidence, GPS stamps, and supplier receipts. No more phantom materials.",
    color: "#60A5FA",
  },
  {
    icon: ArrowLeftRight,
    title: "Monitor Movement of Funds",
    description:
      "Real-time visibility into every naira spent on your project. Categorized, itemized, and reconciled automatically.",
    color: "#F59E0B",
  },
  {
    icon: MapPin,
    title: "GPS-Stamped Site Proof",
    description:
      "Geofenced check-ins confirm workers are on-site. Every activity is tagged with irrefutable location data.",
    color: "#A78BFA",
  },
];

const secondaryFeatures = [
  { icon: Fingerprint, label: "Biometric Verification", description: "Workers verify identity with fingerprint before check-in" },
  { icon: Camera, label: "Photo Documentation", description: "Time-stamped progress photos sent to your dashboard" },
  { icon: BarChart3, label: "Budget Analytics", description: "Visual breakdowns of spend vs. budget in real-time" },
  { icon: Bell, label: "Instant Alerts", description: "Get notified of every transaction and site activity" },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--bos-bg-3)" }}>
      {/* Section header */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}
          >
            <span className="text-[12px] text-emerald-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Core Platform
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Everything you need to
            <br />
            <span style={{ color: "#34D399" }}>build with confidence</span>
          </h2>
          <p
            className="mt-5 mx-auto max-w-[520px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            Four pillars of transparency that make fraud impossible
            and give you complete control over your construction project.
          </p>
        </motion.div>

        {/* Main 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {mainFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 md:p-10 overflow-hidden transition-all hover:translate-y-[-2px]"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute w-[200px] h-[200px] -top-[50px] -right-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${f.color}12 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${f.color}10`,
                    border: `1px solid ${f.color}20`,
                  }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "var(--bos-text-1)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "var(--bos-text-3)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.description}
                </p>

                {/* Learn more */}
                <span
                  className="inline-flex items-center gap-1.5 mt-5 cursor-pointer group-hover:gap-2.5 transition-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: f.color,
                  }}
                >
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {secondaryFeatures.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl p-5"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              <f.icon className="w-5 h-5 text-emerald-400/60 mb-3" />
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--bos-text-2)",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "var(--bos-text-4)",
                  lineHeight: 1.5,
                }}
              >
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}