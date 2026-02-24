import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  Fingerprint,
  Lock,
  QrCode,
  MapPin,
  ChevronDown,
} from "lucide-react";

const features = [
  "Unlimited Projects",
  "Biometric Worker Verification (NIN + Face)",
  "GPS-Verified Site Attendance",
  "Escrow Wallet & Daily Payments",
  "Digital Gate Pass (QR Delivery)",
  "AI-Powered Site Logs (Text)",
  "Supervisor PWA App",
  "Material Ordering & Tracking",
  "Marketplace Access",
  "Real-Time Dashboard & Analytics",
];

const trustPoints = [
  { icon: Fingerprint, text: "Biometric ID kills ghost workers" },
  { icon: Lock, text: "Escrow holds funds until you approve" },
  { icon: QrCode, text: "QR gate pass tracks every delivery" },
  { icon: MapPin, text: "GPS attendance ensures real presence" },
];

const faqs = [
  {
    q: "Can I try BuilderOS before paying?",
    a: "We offer a guided demo so you can explore the platform before committing. Contact our team to schedule one.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards processed via Paddle, our merchant of record. Bank transfers are supported for project wallet funding via Nomba.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. Subscriptions are month-to-month. Cancel anytime from your dashboard to prevent future billing. No prorated refunds for partial months.",
  },
  {
    q: "Is there a limit on the number of projects?",
    a: "No. Your subscription gives you access to unlimited projects. Each project has a one-time $50 setup fee.",
  },
  {
    q: "How does the escrow wallet work?",
    a: "You fund a dedicated virtual bank account (powered by Nomba). Funds are held securely and only disbursed to verified workers after biometric and GPS checks confirm attendance.",
  },
  {
    q: "Do you support projects nationwide?",
    a: "Currently we're focused on major cities in Nigeria — Lagos, Abuja, and Port Harcourt — with nationwide expansion planned for 2026.",
  },
];

export function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const monthlyPrice = annual ? 24 : 30;
  const billingText = annual
    ? "Billed annually. Cancel anytime."
    : "Billed monthly. Cancel anytime.";

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

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
            }}
          >
            Simple, Transparent
            <br />
            <span style={{ color: "#34D399" }}>Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-[480px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            One plan. All features included.
          </motion.p>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
      </section>

      {/* Plan card */}
      <section className="py-16 md:py-24" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[520px] mx-auto px-6 md:px-10">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span
              className="text-[14px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: !annual
                  ? "var(--bos-text-2)"
                  : "var(--bos-text-4)",
              }}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-[52px] h-[28px] rounded-full border-none cursor-pointer transition-colors"
              style={{
                background: annual
                  ? "linear-gradient(135deg, #10B981, #059669)"
                  : "var(--bos-input-bg)",
              }}
            >
              <div
                className="absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white transition-all"
                style={{ left: annual ? "27px" : "3px" }}
              />
            </button>
            <span
              className="text-[14px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: annual
                  ? "var(--bos-text-2)"
                  : "var(--bos-text-4)",
              }}
            >
              Annually
            </span>
            {annual && (
              <span
                className="px-2.5 py-1 rounded-full text-[11px] text-emerald-400"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                Save 20%
              </span>
            )}
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "var(--bos-surface)",
              border: "1px solid rgba(16,185,129,0.15)",
              boxShadow: "0 0 60px rgba(16,185,129,0.04)",
            }}
          >
            <p
              className="mb-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#34D399",
                letterSpacing: "-0.01em",
              }}
            >
              BuilderOS Pro
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "var(--bos-text-4)",
              }}
            >
              Complete project management with trust verification.
            </p>

            <div className="flex items-baseline gap-1 mb-1">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 48,
                  fontWeight: 800,
                  color: "var(--bos-text-1)",
                  letterSpacing: "-0.04em",
                }}
              >
                ${monthlyPrice}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "var(--bos-text-4)",
                }}
              >
                /month
              </span>
            </div>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "var(--bos-text-5)",
              }}
            >
              {billingText}
            </p>

            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 w-full h-[48px] rounded-xl no-underline transition-all hover:opacity-90 mb-8"
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
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>

            <p
              className="mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--bos-text-3)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Everything included:
            </p>

            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 450,
                      color: "var(--bos-text-3)",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transaction fees */}
      <section className="py-16 md:py-24" style={{ background: "var(--bos-bg-2)" }}>
        <div className="max-w-[700px] mx-auto px-6 md:px-10">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              letterSpacing: "-0.03em",
            }}
          >
            Transaction Fees
          </h2>
          <p
            className="text-center mb-10 -mt-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: "var(--bos-text-4)",
              lineHeight: 1.6,
            }}
          >
            Simple, predictable fees. No hidden charges.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className="rounded-2xl p-7"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--bos-text-3)",
                }}
              >
                Project Setup Fee
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "var(--bos-text-1)",
                  letterSpacing: "-0.03em",
                }}
              >
                $50
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "var(--bos-text-4)",
                  lineHeight: 1.5,
                }}
              >
                One-time fee per project. Covers escrow wallet creation, virtual
                account setup, and integration.
              </p>
            </div>
            <div
              className="rounded-2xl p-7"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--bos-text-3)",
                }}
              >
                Deposits
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#34D399",
                  letterSpacing: "-0.03em",
                }}
              >
                Free
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "var(--bos-text-4)",
                  lineHeight: 1.5,
                }}
              >
                Fund your project wallet via bank transfer at no extra charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="py-16" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <h3
            className="text-center mb-10"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--bos-text-1)",
              letterSpacing: "-0.03em",
            }}
          >
            Why Clients Trust BuilderOS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustPoints.map((tp) => (
              <div
                key={tp.text}
                className="rounded-xl p-5 text-center"
                style={{
                  background: "var(--bos-surface)",
                  border: "1px solid var(--bos-border-subtle)",
                }}
              >
                <tp.icon className="w-5 h-5 text-emerald-400 mx-auto mb-3" />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--bos-text-3)",
                    lineHeight: 1.4,
                  }}
                >
                  {tp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "var(--bos-bg-2)" }}>
        <div className="max-w-[680px] mx-auto px-6 md:px-10">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              letterSpacing: "-0.03em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--bos-surface)",
                  border: "1px solid var(--bos-border)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer border-none bg-transparent"
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--bos-text-2)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-4 h-4 shrink-0 ml-4" style={{ color: "var(--bos-text-5)" }} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 400,
                          color: "var(--bos-text-4)",
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to build with confidence?
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              color: "var(--bos-text-4)",
            }}
          >
            Join diaspora Nigerians who are finally building homes without the
            stories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/signup"
              className="flex items-center gap-2 h-[48px] px-7 rounded-xl no-underline transition-all hover:opacity-90"
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
            <Link
              to="/about"
              className="flex items-center h-[48px] px-7 rounded-xl no-underline transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--bos-text-4)",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}