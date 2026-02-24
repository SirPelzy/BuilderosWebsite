import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const IMG_HOME =
  "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwY29tcGxldGVkJTIwd2hpdGV8ZW58MXx8fHwxNzcxOTI2NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const IMG_WORKERS =
  "https://images.unsplash.com/photo-1489514354504-1653aa90e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYWZyaWNhJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxOTI0MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Showcase() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--bos-bg-3)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Row 1: Image left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              }}
            >
              <ImageWithFallback
                src={IMG_HOME}
                alt="Completed African home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "var(--bos-overlay-gradient)" }} />
              
              {/* Overlay stat */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(11,17,32,0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="text-[11px] text-white/40 mb-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Project Status
                  </p>
                  <p className="text-[16px] text-emerald-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                    100% Complete ✓
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <p className="text-[12px] text-emerald-400 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The Vision
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "var(--bos-text-1)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              Your dream home,
              <br />
              built with trust
            </h2>
            <p
              className="mb-6 max-w-[440px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "var(--bos-text-3)",
                lineHeight: 1.7,
              }}
            >
              Millions of Nigerians abroad send money home to build — but have no way to
              verify progress. BuilderOS changes that with real-time GPS tracking,
              biometric worker verification, and complete financial transparency.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "See every naira spent in real-time",
                "Photo and GPS proof for every milestone",
                "Biometric check-ins eliminate ghost workers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-emerald-400">✓</span>
                  </div>
                  <span className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-3)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              }}
            >
              <ImageWithFallback
                src={IMG_WORKERS}
                alt="Construction workers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "var(--bos-overlay-gradient)" }} />
              
              {/* Overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="rounded-xl px-4 py-3 inline-flex items-center gap-2"
                  style={{
                    background: "rgba(11,17,32,0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[13px] text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    12 workers verified on-site today
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <p className="text-[12px] text-emerald-400 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Built for Trust
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "var(--bos-text-1)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              No more ghost workers.
              <br />
              <span style={{ color: "#34D399" }}>No more missing funds.</span>
            </h2>
            <p
              className="mb-6 max-w-[440px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "var(--bos-text-3)",
                lineHeight: 1.7,
              }}
            >
              BuilderOS uses biometric fingerprint scanning combined with GPS geofencing
              to ensure that every worker is exactly where they say they are. Payments are
              only released when presence is confirmed.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Biometric ID", "Geofencing", "Time-stamps", "Audit Trail"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-[13px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: "var(--bos-text-3)",
                    background: "var(--bos-surface)",
                    border: "1px solid var(--bos-input-border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}