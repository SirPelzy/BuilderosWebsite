import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I sent ₦8 million to build a 3-bedroom bungalow in Abuja. The contractor disappeared with half the money. I wish something like BuilderOS existed then.",
    name: "Adaeze O.",
    role: "Nurse, London UK",
    initials: "AO",
  },
  {
    quote:
      "My uncle was supposed to oversee the build, but he had his own projects to manage. There was no accountability. I had to fly back twice just to check on progress.",
    name: "Chukwuemeka I.",
    role: "Software Engineer, Toronto CA",
    initials: "CI",
  },
  {
    quote:
      "They told me the roofing cost ₦2.5 million. When I asked my friend to check, they'd only spent ₦1.2 million. The markup was criminal. GPS proof would change everything.",
    name: "Folake A.",
    role: "Accountant, Houston TX",
    initials: "FA",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--bos-bg-2)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
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
              Real Stories
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
            The problem is
            <br />
            <span style={{ color: "#34D399" }}>painfully real</span>
          </h2>
          <p
            className="mt-5 mx-auto max-w-[480px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            These are real stories from Nigerians in the diaspora who've lost money
            trying to build back home. We're building the solution.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7 md:p-8 flex flex-col"
              style={{
                background: "var(--bos-surface)",
                border: "1px solid var(--bos-border)",
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4"
                    fill="#F59E0B"
                    color="#F59E0B"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="flex-1 mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "var(--bos-text-3)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--bos-border)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <span
                    className="text-[12px] text-emerald-400"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--bos-text-2)",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "var(--bos-text-4)",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}