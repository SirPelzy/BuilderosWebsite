import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { UserPlus, Home, Eye, PartyPopper } from "lucide-react";
import { useTheme } from "../ThemeContext";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Create your project",
    description:
      "Set up your build in minutes — add your location, budget, contractor details, and milestones. Your personal construction command center.",
  },
  {
    num: "02",
    icon: Home,
    title: "Workers check in on-site",
    description:
      "Contractors and workers verify their identity with biometrics and GPS geofencing. Every check-in is time-stamped and location-verified.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Track every naira in real-time",
    description:
      "Wages, materials, and expenses are logged as they happen. Photo proof, receipts, and GPS data attached to every transaction.",
  },
  {
    num: "04",
    icon: PartyPopper,
    title: "Build with complete peace of mind",
    description:
      "Monitor progress from anywhere in the world. Get alerts, review reports, and know your money is going exactly where it should.",
  },
];

const IMG_CONSTRUCTION =
  "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMGJ1aWxkaW5nJTIwaG91c2V8ZW58MXx8fHwxNzcxOTI0MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HowItWorks() {
  const { isDark } = useTheme();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--bos-bg-2)" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={IMG_CONSTRUCTION}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: isDark ? 0.06 : 0.04 }}
        />
        <div className="absolute inset-0" style={{ background: isDark
          ? `linear-gradient(to bottom, var(--bos-bg-2) 0%, rgba(8,13,24,0.85) 50%, var(--bos-bg-2) 100%)`
          : `linear-gradient(to bottom, var(--bos-bg-2) 0%, rgba(248,250,252,0.92) 50%, var(--bos-bg-2) 100%)`
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}
          >
            <span className="text-[12px] text-emerald-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              How It Works
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
            From sign-up to
            <br />
            <span style={{ color: "#34D399" }}>site oversight in minutes</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-[47px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.3), rgba(16,185,129,0.05))" }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-10"
              >
                {/* Step number circle */}
                <div className="relative shrink-0">
                  <div
                    className="w-[96px] h-[96px] rounded-2xl flex flex-col items-center justify-center gap-1"
                    style={{
                      background: "rgba(16,185,129,0.06)",
                      border: "1px solid rgba(16,185,129,0.12)",
                    }}
                  >
                    <step.icon className="w-5 h-5 text-emerald-400" />
                    <span
                      className="text-[11px] text-emerald-400/50"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                    >
                      STEP {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 700,
                      color: "var(--bos-text-1)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="max-w-[480px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--bos-text-3)",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}