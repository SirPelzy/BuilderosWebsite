import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  HardHat,
  MessageCircle,
  Camera,
  Wallet,
  WifiOff,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";

const solutions = [
  {
    icon: MessageCircle,
    title: "Chat, Don't Fill Forms",
    emoji: "🤖",
    description:
      'We know you are busy on-site. You don\'t have time for complicated software. Just chat with our app like you chat on WhatsApp. Type: "Oga, 50 bags Dangote cement just land," and BuilderBot logs it instantly.',
    color: "#34D399",
  },
  {
    icon: Camera,
    title: "Prove Your Work Automatically",
    emoji: "",
    description:
      "Let the app do the defending for you. When you clock in workers with a quick face scan or snap a photo of a completed milestone, the app stamps it with un-fakeable GPS and time data. The client sees the truth, instantly.",
    color: "#60A5FA",
  },
  {
    icon: Wallet,
    title: "Faster, Guaranteed Payouts",
    emoji: "",
    description:
      "Because the client's money is already sitting in the BuilderOS Escrow Vault, you don't have to beg for weekend wages. Once the daily muster is complete, the system pays you and you pay your workers directly.",
    color: "#F59E0B",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    emoji: "",
    description:
      "Bad network on site? No problem. BuilderOS saves your biometric logs and site photos offline (whether you are in Epe or Ibeju-Lekki) and automatically syncs them the second you hit a stable connection.",
    color: "#A78BFA",
  },
];

export function ForContractorsPage() {
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
          className="absolute w-[500px] h-[500px] -top-[80px] -left-[80px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(96,165,250,0.08)",
              border: "1px solid rgba(96,165,250,0.15)",
            }}
          >
            <HardHat className="w-3.5 h-3.5 text-blue-400" />
            <span
              className="text-[13px] text-blue-400"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              For Contractors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Get Paid Faster.
            <br />
            with <span style={{ color: "#34D399" }}>Ultimate Transparency.</span>
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
            Stop arguing over receipts and defending your integrity. BuilderOS
            gives you the tools to prove your work instantly, so you get paid
            faster, build your reputation, and win bigger contracts.
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
              Join as a Verified Contractor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "rgba(255,255,255,0.04)" }}
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
                The Challenge
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
              The Trust Deficit is
              <br />
              <span style={{ color: "#EF4444" }}>Costing You Jobs.</span>
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
              As a professional builder in Nigeria, your biggest obstacle isn't
              the work — it's the{" "}
              <span style={{ color: "var(--bos-text-2)", fontWeight: 600 }}>
                paranoia of the client abroad
              </span>
              . Because so many people have scammed Diaspora investors, you are
              constantly micro-managed, second-guessed, and delayed on payouts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
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
              Easy Logging. No Wahala.
              <br />
              <span style={{ color: "#34D399" }}>Just Work.</span>
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
                  background: "var(--bos-surface)",
                  border: "1px solid var(--bos-border)",
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
                    {s.title} {s.emoji}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--bos-text-3)",
                      lineHeight: 1.6,
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

      {/* CTA */}
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
            <BadgeCheck className="w-8 h-8 text-emerald-400 mx-auto mb-5" />
            <p
              className="mb-2"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "var(--bos-text-1)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Become the most trusted
              <br />
              <span style={{ color: "#34D399" }}>builder in Lagos.</span>
            </p>
            <p
              className="mt-3 mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: "var(--bos-text-4)",
              }}
            >
              Join and get verified for free.
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
              Get BuilderOS Certified (Free)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}