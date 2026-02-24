import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Shield, MapPin, Lock, Fingerprint } from "lucide-react";
import { LogoMark } from "../BuilderOSLogo";

export function AboutPage() {
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
          className="absolute w-[600px] h-[600px] -top-[100px] -right-[100px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <LogoMark size={16} color="#34D399" accentColor="#34D399" />
            <span
              className="text-[13px] text-emerald-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              About BuilderOS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
            }}
          >
            The Operating System for
            <br />
            <span style={{ color: "#34D399" }}>Trust in African Construction.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[520px] mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            Replacing "trust" with Verification.
          </motion.p>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "var(--bos-border-subtle)" }}
        />
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p
                className="text-[12px] text-emerald-400 mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Our Mission
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
                  color: "var(--bos-text-1)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                }}
              >
                The $60 Billion
                <br />
                <span style={{ color: "#34D399" }}>Disconnect.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "var(--bos-text-3)",
                    lineHeight: 1.7,
                  }}
                >
                  Every year, billions of dollars flow into Africa from the
                  Diaspora for real estate development. Yet, a massive percentage
                  of this capital is lost to wage theft, procurement fraud, and
                  the dreaded "ghost worker" syndicate.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "var(--bos-text-3)",
                    lineHeight: 1.7,
                  }}
                >
                  BuilderOS was built to close this gap. We believe that distance
                  should not dictate transparency.{" "}
                  <span style={{ color: "var(--bos-text-2)", fontWeight: 500 }}>
                    If you wouldn't send money without a receipt in the UK or US,
                    you shouldn't have to when building your home in Nigeria.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 lg:w-[320px] shrink-0"
            >
              {[
                {
                  value: "100%",
                  label: "Escrow Secured",
                  icon: Lock,
                  description: "Every naira held in a dedicated virtual account",
                },
                {
                  value: "GPS",
                  label: "Verified",
                  icon: MapPin,
                  description: "Geofenced check-ins prove physical presence",
                },
                {
                  value: "Bio",
                  label: "Authenticated",
                  icon: Fingerprint,
                  description: "Liveness face scans matched to government ID",
                },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--bos-surface)",
                    border: "1px solid var(--bos-border)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "var(--bos-emerald-surface)",
                        border: "1px solid var(--bos-emerald-border)",
                      }}
                    >
                      <stat.icon className="w-4.5 h-4.5 text-emerald-400" />
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 24,
                          fontWeight: 800,
                          color: "#34D399",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="ml-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--bos-text-2)",
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "var(--bos-text-4)",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 md:py-32" style={{ background: "var(--bos-bg-2)" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
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
                The BuilderOS Difference
              </span>
            </div>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "var(--bos-text-1)",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              PropTech meets{" "}
              <span style={{ color: "#34D399" }}>FinTech.</span>
            </h2>
            <p
              className="mx-auto max-w-[560px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                fontWeight: 400,
                color: "var(--bos-text-3)",
                lineHeight: 1.7,
              }}
            >
              We are not just a project management dashboard. Anyone can build a
              dashboard. BuilderOS is a{" "}
              <span style={{ color: "var(--bos-text-2)", fontWeight: 500 }}>
                secure disbursement engine
              </span>
              . By combining military-grade biometric verification (Liveness
              checks) with a dedicated Escrow payout infrastructure, we remove
              human error — and human greed — from the construction site.
            </p>
          </motion.div>

          {/* Diagram-style visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Fingerprint, label: "Biometric\nVerification", sub: "Liveness face scans" },
              { icon: Shield, label: "Escrow\nInfrastructure", sub: "Secure fund custody" },
              { icon: MapPin, label: "GPS\nGeofencing", sub: "Physical proof of work" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "var(--bos-surface)",
                  border: "1px solid var(--bos-border)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "var(--bos-emerald-surface)",
                    border: "1px solid var(--bos-emerald-border)",
                  }}
                >
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <p
                  className="mb-2 whitespace-pre-line"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--bos-text-2)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 400,
                    color: "var(--bos-text-4)",
                  }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "var(--bos-text-1)",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Ready to change how
              <br />
              <span style={{ color: "#34D399" }}>Africa builds?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
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
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/for-sponsors"
                className="flex items-center h-[48px] px-7 rounded-xl no-underline transition-all hover:bg-white/5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--bos-text-3)",
                  border: "1px solid var(--bos-input-border)",
                }}
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}