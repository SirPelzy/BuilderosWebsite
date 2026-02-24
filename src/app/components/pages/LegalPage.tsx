import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUp } from "lucide-react";

interface Section {
  num?: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  preamble: React.ReactNode;
  sections: Section[];
  relatedLinks: { label: string; to: string }[];
}

export function LegalPageLayout({
  title,
  lastUpdated,
  preamble,
  sections,
  relatedLinks,
}: LegalPageProps) {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top FAB */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer"
            style={{
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <ArrowUp className="w-4.5 h-4.5 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        className="relative pt-[72px]"
        style={{ background: "var(--bos-hero-gradient)" }}
      >
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] transition-colors no-underline mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--bos-text-4)" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </motion.h1>

          <p
            className="mt-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
        <div className="h-px w-full" style={{ background: "var(--bos-border-subtle)" }} />
      </section>

      {/* Content */}
      <section className="py-16 md:py-24" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          {/* Preamble */}
          <div
            className="mb-12 pb-12"
            style={{ borderBottom: "1px solid var(--bos-border)" }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "var(--bos-text-3)",
                lineHeight: 1.8,
              }}
            >
              {preamble}
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  {section.num && (
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      <span
                        className="text-[12px] text-emerald-400"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                      >
                        {section.num}
                      </span>
                    </div>
                  )}
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--bos-text-1)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      marginTop: section.num ? 4 : 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div
                  className={section.num ? "ml-[52px]" : ""}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "var(--bos-text-3)",
                    lineHeight: 1.8,
                  }}
                >
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Related */}
          <div
            className="mt-16 pt-10 flex flex-wrap gap-3"
            style={{ borderTop: "1px solid var(--bos-border)" }}
          >
            <span
              className="text-[12px] mr-2 mt-1.5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--bos-text-5)" }}
            >
              Related Policies:
            </span>
            {relatedLinks.map((rl) => (
              <Link
                key={rl.label}
                to={rl.to}
                className="px-4 py-2 rounded-lg text-[13px] no-underline transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: "var(--bos-text-3)",
                  background: "var(--bos-surface)",
                  border: "1px solid var(--bos-border)",
                }}
              >
                {rl.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}