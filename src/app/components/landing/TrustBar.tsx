import React from "react";
import { motion } from "motion/react";

const countries = [
  "🇬🇧 United Kingdom",
  "🇺🇸 United States",
  "🇨🇦 Canada",
  "🇩🇪 Germany",
  "🇦🇪 UAE",
  "🇦🇺 Australia",
];

export function TrustBar() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: "var(--bos-bg-3)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--bos-text-5)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          For diaspora builders across the globe
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {countries.map((c) => (
            <div
              key={c}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              <span
                className="text-[14px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-3)" }}
              >
                {c}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12 pt-10"
          style={{ borderTop: "1px solid var(--bos-border)" }}
        >
          {[
            { value: "$2.1B+", label: "Sent home for construction annually by Nigerians abroad" },
            { value: "60%", label: "Of diaspora-funded projects face fraud or mismanagement" },
            { value: "0%", label: "Transparent tracking tools — until now" },
          ].map((stat) => (
            <div key={stat.value} className="text-center max-w-[240px]">
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 800,
                  color: "#34D399",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "var(--bos-text-4)",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}