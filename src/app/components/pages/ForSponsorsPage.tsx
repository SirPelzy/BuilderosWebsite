import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Lock,
  Fingerprint,
  MapPin,
  Zap,
  AlertTriangle,
} from "lucide-react";

const solutions = [
  {
    icon: Lock,
    title: "The Secure Vault (Escrow)",
    description:
      'Stop sending cash to personal bank accounts. BuilderOS generates a dedicated, secure Virtual Bank Account (powered by Nomba) for your project. You fund the wallet; we protect it.',
    color: "#34D399",
  },
  {
    icon: Fingerprint,
    title: "Biometric Morning Muster",
    description:
      "Supervisors can no longer invent workers to steal wages. Our app requires a daily Liveness Face Scan matched against a government ID. No face, no pay.",
    color: "#60A5FA",
  },
  {
    icon: MapPin,
    title: "GPS Geofencing",
    description:
      "A photo can be faked. GPS cannot. BuilderOS only allows check-ins and material logging if the supervisor's phone is physically standing inside the verified coordinates of your land.",
    color: "#A78BFA",
  },
  {
    icon: Zap,
    title: "Automated Payouts",
    description:
      "At the end of the day, BuilderOS automatically calculates wages for verified workers and sends the money directly to the supervisor or contractor's wallet. No friction, just results.",
    color: "#F59E0B",
  },
];

export function ForSponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-[72px] overflow-hidden"
        style={{
          background:
            "var(--bos-hero-gradient)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] -top-[80px] -right-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span
              className="text-[13px] text-emerald-400"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              For Project Sponsors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Build Back Home.
            <br />
            <span style={{ color: "#34D399" }}>Without the Blindfold.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-[560px] mx-auto mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            BuilderOS is the anti-fraud engine for Diaspora real estate. We
            secure your construction capital in a dedicated escrow wallet and
            only release funds when workers physically verify their presence on
            your site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 h-[52px] px-8 rounded-xl no-underline transition-all hover:opacity-90"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#FFFFFF",
                background:
                  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
              }}
            >
              Create Your Secure Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "var(--bos-border-subtle)" }}
        />
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span
                className="text-[12px] text-red-400"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                The Problem
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "var(--bos-text-1)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              The "Uncle Network" is
              <br />
              <span style={{ color: "#EF4444" }}>
                Costing You Millions.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(239,68,68,0.03)",
              border: "1px solid rgba(239,68,68,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 1.8vw, 18px)",
                fontWeight: 400,
                color: "var(--bos-text-3)",
                lineHeight: 1.8,
              }}
            >
              You know the story. You send ₦5,000,000 for roofing materials and
              labor. Weeks pass. You get a few blurry photos on WhatsApp, but
              progress has stalled. The supervisor claims materials are
              expensive, or workers didn't show up.{" "}
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                }}
              >
                You are bleeding capital to "ghost workers" and inflated
                invoices
              </span>
              , and you are too far away to do anything about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 md:py-32" style={{ background: "var(--bos-bg-2)" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <span
                className="text-[12px] text-emerald-400"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                The Solution
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
              Mathematical Trust.
              <br />
              <span style={{ color: "#34D399" }}>Not Blind Faith.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all hover:translate-y-[-2px]"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="absolute w-[200px] h-[200px] -top-[50px] -right-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${s.color}12 0%, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `${s.color}10`,
                      border: `1px solid ${s.color}20`,
                    }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
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
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--bos-text-3)",
                      lineHeight: 1.65,
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault CTA */}
      <section className="py-20 md:py-28" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-14"
            style={{
              background: "rgba(16,185,129,0.04)",
              border: "1px solid rgba(16,185,129,0.1)",
            }}
          >
            <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-5" />
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "var(--bos-text-1)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Your money never leaves the Vault
              <br />
              <span style={{ color: "#34D399" }}>
                until the work is verified.
              </span>
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 h-[52px] px-8 rounded-xl no-underline transition-all hover:opacity-90"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#FFFFFF",
                background:
                  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
              }}
            >
              Start Your First Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}