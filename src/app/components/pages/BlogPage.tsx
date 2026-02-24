import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const IMG_CONSTRUCTION =
  "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMGJ1aWxkaW5nJTIwaG91c2V8ZW58MXx8fHwxNzcxOTI0MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const blogPosts = [
  {
    slug: "diaspora-building-guide-2026",
    category: "Diaspora Investment Guide",
    title:
      "The Ultimate Guide to Building a House in Nigeria from the Diaspora (2026 Edition)",
    excerpt:
      "Learn the true costs, land verification steps, and how to avoid the deadliest construction scams when building in Nigeria from the US, UK, or Canada.",
    author: "Oluwapelumi",
    initials: "O",
    readTime: "10 min read",
    image: IMG_CONSTRUCTION,
    featured: true,
  },
];

export function BlogPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <span
              className="text-[13px] text-emerald-400"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              BuilderOS Blog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "var(--bos-text-1)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
            }}
          >
            Insights & Guides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 mx-auto max-w-[520px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              color: "var(--bos-text-3)",
              lineHeight: 1.6,
            }}
          >
            Insights, guides, and analysis on building in Nigeria from the
            Diaspora.
          </motion.p>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "var(--bos-border-subtle)" }}
        />
      </section>

      {/* Blog posts */}
      <section className="py-16 md:py-24" style={{ background: "var(--bos-bg-3)" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          {/* Featured */}
          {blogPosts
            .filter((p) => p.featured)
            .map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="no-underline block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-all hover:translate-y-[-2px]"
                  style={{
                    background: "var(--bos-surface)",
                    border: "1px solid var(--bos-border)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-[55%] relative overflow-hidden">
                      <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to right, transparent 60%, rgba(11,17,32,0.3))",
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                      <div
                        className="inline-flex items-center self-start px-3 py-1.5 rounded-full mb-5"
                        style={{
                          background: "rgba(16,185,129,0.08)",
                          border: "1px solid rgba(16,185,129,0.15)",
                        }}
                      >
                        <span
                          className="text-[11px] text-emerald-400"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>

                      <h2
                        className="mb-4 group-hover:text-emerald-300 transition-colors"
                        style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          fontWeight: 700,
                          color: "var(--bos-text-1)",
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {post.title}
                      </h2>

                      <p
                        className="mb-6 max-w-[420px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 15,
                          fontWeight: 400,
                          color: "var(--bos-text-3)",
                          lineHeight: 1.6,
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Author + meta */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.2)",
                          }}
                        >
                          <span
                            className="text-[11px] text-emerald-400"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {post.initials}
                          </span>
                        </div>
                        <span
                          className="text-[13px]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            color: "var(--bos-text-3)",
                          }}
                        >
                          {post.author}
                        </span>
                        <span style={{ color: "var(--bos-text-6)" }}>·</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" style={{ color: "var(--bos-text-5)" }} />
                          <span
                            className="text-[13px]"
                            style={{ fontFamily: "'Inter', sans-serif", color: "var(--bos-text-4)" }}
                          >
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <span
                        className="inline-flex items-center gap-1.5 mt-6 text-emerald-400 group-hover:gap-2.5 transition-all"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                        }}
                      >
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}

          {/* More coming */}
          <div
            className="mt-12 rounded-2xl p-12 text-center"
            style={{
              background: "var(--bos-surface)",
              border: "1px dashed var(--bos-border)",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--bos-text-4)",
              }}
            >
              More articles coming soon
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--bos-text-5)",
              }}
            >
              Subscribe to get notified when we publish new guides and reports.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}