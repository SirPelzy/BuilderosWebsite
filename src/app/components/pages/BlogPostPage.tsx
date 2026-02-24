import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Clock,
  Lock,
  Fingerprint,
  MapPin,
  Zap,
  Twitter,
  Linkedin,
  Share2,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { LogoMark } from "../BuilderOSLogo";
import { useTheme } from "../ThemeContext";

const IMG_HERO =
  "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMGJ1aWxkaW5nJTIwaG91c2V8ZW58MXx8fHwxNzcxOTI0MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_FOUNDATION =
  "https://images.unsplash.com/photo-1691147421207-d4274cfb482d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMGJ1aWxkaW5nJTIwZm91bmRhdGlvbnxlbnwxfHx8fDE3NzE5MjY2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_SURVEY =
  "https://images.unsplash.com/photo-1685266326473-5b99c3d08a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGxhbmQlMjBzdXJ2ZXklMjBwbGFuJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzcxOTI2NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_BIOMETRIC =
  "https://images.unsplash.com/photo-1661169398346-aecdc4f5068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGJpb21ldHJpYyUyMGZhY2UlMjBzY2FuJTIwdmVyaWZpY2F0aW9ufGVufDF8fHx8MTc3MTkyNjY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const toc = [
  { num: "1", label: "Land Verification" },
  { num: "2", label: "The True Cost of Building" },
  { num: "3", label: "The 4 Deadliest Scams" },
  { num: "4", label: "Hiring a Site Supervisor" },
  { num: "5", label: "The Modern Way to Build" },
];

const f = "'Inter', sans-serif";
const fs = "'Inter', system-ui, sans-serif";

const shareUrl = "https://builderos.live/blog/diaspora-building-guide-2026";
const shareTitle = "The Ultimate Guide to Building a House in Nigeria from the Diaspora (2026 Edition)";

export function BlogPostPage() {
  const [showTop, setShowTop] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  // Reading progress + back-to-top
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      if (articleRef.current) {
        const el = articleRef.current;
        const rect = el.getBoundingClientRect();
        const start = el.offsetTop - 200;
        const end = start + el.scrollHeight;
        const scrolled = window.scrollY;
        const progress = Math.min(Math.max((scrolled - start) / (end - start - window.innerHeight), 0), 1);
        setReadProgress(progress * 100);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for TOC highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    toc.forEach((item) => {
      const el = document.getElementById(`section-${item.num}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(item.num);
          });
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (num: string) => {
    const el = document.getElementById(`section-${num}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bodyStyle: React.CSSProperties = { fontFamily: f, fontSize: 16, fontWeight: 400, color: "var(--bos-text-3)", lineHeight: 1.85 };
  const h2Style: React.CSSProperties = { fontFamily: fs, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "var(--bos-text-1)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 20 };
  const h3Style: React.CSSProperties = { fontFamily: f, fontSize: 20, fontWeight: 700, color: "var(--bos-text-2)", lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 12 };
  const highlightStyle: React.CSSProperties = { color: "var(--bos-text-2)", fontWeight: 600 };

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]" style={{ background: "transparent" }}>
        <motion.div
          className="h-full"
          style={{
            width: `${readProgress}%`,
            background: "linear-gradient(90deg, #10B981, #34D399)",
            boxShadow: "0 0 8px rgba(16,185,129,0.4)",
          }}
        />
      </div>

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
            style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)", backdropFilter: "blur(12px)" }}
          >
            <ArrowUp className="w-4.5 h-4.5 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="relative pt-[72px]" style={{ background: "var(--bos-hero-gradient)" }}>
        <div className="absolute inset-0" style={{ opacity: "var(--bos-grid-opacity)", backgroundImage: `linear-gradient(var(--bos-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--bos-grid-color) 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] transition-colors no-underline" style={{ fontFamily: f, fontWeight: 500, color: "var(--bos-text-4)" }}>
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
              <span className="text-[11px] text-emerald-400" style={{ fontFamily: f, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Diaspora Investment Guide</span>
            </div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: fs, fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 800, color: "var(--bos-text-1)", lineHeight: 1.08, letterSpacing: "-0.04em" }}>
            The Ultimate Guide to Building a House in Nigeria from the Diaspora<span style={{ color: "#34D399" }}> (2026 Edition)</span>
          </motion.h1>

          {/* Author + share */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                <span className="text-[13px] text-emerald-400" style={{ fontFamily: f, fontWeight: 700 }}>O</span>
              </div>
              <div>
                <p className="text-[14px]" style={{ fontFamily: f, fontWeight: 600, color: "var(--bos-text-2)" }}>Oluwapelumi</p>
                <p className="text-[12px]" style={{ fontFamily: f, fontWeight: 400, color: "var(--bos-text-4)" }}>Founder, BuilderOS</p>
              </div>
              <span style={{ color: "var(--bos-border)" }} className="mx-1">|</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" style={{ color: "var(--bos-text-5)" }} />
                <span className="text-[13px]" style={{ fontFamily: f, color: "var(--bos-text-4)" }}>10 min read</span>
              </div>
            </div>

            {/* Social share */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <span className="text-[12px] mr-1" style={{ fontFamily: f, fontWeight: 500, color: "var(--bos-text-5)" }}>Share</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center no-underline transition-all" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)", color: "var(--bos-text-4)" }} title="Share on Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center no-underline transition-all" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)", color: "var(--bos-text-4)" }} title="Share on LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center no-underline transition-all" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)", color: "var(--bos-text-4)" }} title="Share on WhatsApp">
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9]" style={{ border: "1px solid var(--bos-border)", boxShadow: "var(--bos-shadow-card)" }}>
            <ImageWithFallback src={IMG_HERO} alt="Construction site in progress" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "var(--bos-overlay-gradient)" }} />
          </div>
        </div>
        <div className="h-px w-full mt-12" style={{ background: "var(--bos-border-subtle)" }} />
      </section>

      {/* Body */}
      <section className="py-12 md:py-20" style={{ background: "var(--bos-bg-3)" }}>
        <div ref={articleRef} className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="lg:w-[240px] shrink-0">
              <div className="lg:sticky lg:top-[88px]">
                <div className="rounded-xl p-5 mb-5" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                  <p className="mb-4" style={{ fontFamily: f, fontSize: 11, fontWeight: 600, color: "var(--bos-text-4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>In this article</p>
                  <div className="flex flex-col gap-1">
                    {toc.map((item) => (
                      <button
                        key={item.num}
                        onClick={() => scrollToSection(item.num)}
                        className="flex items-start gap-2 text-left bg-transparent border-none cursor-pointer px-2.5 py-2 rounded-lg group transition-all"
                        style={{
                          background: activeSection === item.num ? "var(--bos-emerald-surface)" : "transparent",
                        }}
                      >
                        <span className="text-[11px] mt-0.5 shrink-0 transition-colors" style={{ fontFamily: f, fontWeight: 700, color: activeSection === item.num ? "#10B981" : "var(--bos-text-5)" }}>
                          {item.num}.
                        </span>
                        <span className="text-[13px] transition-colors" style={{ fontFamily: f, fontWeight: activeSection === item.num ? 600 : 500, lineHeight: 1.4, color: activeSection === item.num ? "#10B981" : "var(--bos-text-4)" }}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div className="rounded-xl p-5" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                  <LogoMark size={20} color="#34D399" accentColor="#34D399" />
                  <p className="mt-3 mb-1" style={{ fontFamily: f, fontSize: 14, fontWeight: 700, color: "var(--bos-text-2)" }}>Build without the stories.</p>
                  <p className="mb-4" style={{ fontFamily: f, fontSize: 12, fontWeight: 400, color: "var(--bos-text-4)", lineHeight: 1.5 }}>Secure your funds in escrow and track your site with biometrics.</p>
                  <Link to="/signup" className="flex items-center justify-center gap-1.5 w-full h-[36px] rounded-lg text-[13px] text-white no-underline transition-all hover:opacity-90" style={{ fontFamily: f, fontWeight: 600, background: "linear-gradient(135deg, #10B981 0%, #059669 100%)" }}>
                    Start Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Article body */}
            <div className="flex-1 min-w-0">
              <div style={bodyStyle}>
                <p className="mb-5">Building a home in Nigeria while living in the US, UK, or Canada is a deeply fulfilling milestone. It is a connection to your roots, a solid financial investment, and a legacy for your family. But let's be brutally honest: <span style={highlightStyle}>the process is famously fraught with anxiety, financial black holes, and shattered trust.</span></p>
                <p className="mb-5">The infamous "Uncle Network" — where relatives or unverified contractors are sent millions of Naira only to produce a half-finished foundation — has cost the Diaspora billions.</p>
                <p className="mb-10">If you are planning to build in Nigeria today, you cannot rely on blind trust. You need a system. This comprehensive guide covers the true costs of building, how to verify land legally, the deadliest construction scams to watch out for, and how to hire a site supervisor who actually delivers.</p>
              </div>

              {/* Section 1 */}
              <div id="section-1" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                    <span className="text-[12px] text-emerald-400" style={{ fontFamily: f, fontWeight: 700 }}>1</span>
                  </div>
                  <h2 style={{ ...h2Style, marginBottom: 0 }}>Land Verification <span style={{ color: "var(--bos-text-4)", fontWeight: 400, fontSize: "0.65em" }}>(Don't Buy a Lawsuit)</span></h2>
                </div>
                <div style={bodyStyle}>
                  <p className="mb-5">Before a single block is laid, your greatest risk is the land itself. In hotspots like the Lekki-Epe corridor, land scams are rampant. Buying land with a defective title means the government can demolish your property, or you could spend years in court fighting multiple "owners."</p>
                  <h3 style={h3Style}>The 4 Valid Land Titles in Nigeria</h3>
                  <p className="mb-4">Never buy land based on a "Receipt" or a "Deed of Assignment" alone. You must ask for the root title:</p>
                  <div className="flex flex-col gap-3 mb-6">
                    {[
                      { title: "Certificate of Occupancy (C of O)", desc: "The gold standard. Issued by the State Government, proving you have the legal right to the land for 99 years." },
                      { title: "Governor's Consent", desc: "If someone with a C of O sells their land to you, the transaction must be consented to by the Governor to be legally binding." },
                      { title: "Gazette / Excision", desc: 'In places like Ibeju-Lekki, the government acquires all land but "excises" portions back to indigenous communities. A Gazette is the official government record proving the land belongs to the community.' },
                      { title: "Court Judgment", desc: "Land awarded to a family or individual via a Supreme or High Court ruling." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl px-5 py-4" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                        <p style={{ ...highlightStyle, fontSize: 14, marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontSize: 14, color: "var(--bos-text-3)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-5 mb-6" style={{ background: "var(--bos-red-surface)", border: "1px solid var(--bos-red-border)" }}>
                    <p style={{ color: "#EF4444", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>The Danger of "Committed Land"</p>
                    <p style={{ fontSize: 14, color: "var(--bos-text-3)", lineHeight: 1.6 }}>If land is under "Government Acquisition" and not excised, it is committed land. Do not buy it. No matter how cheap it is, the government will eventually reclaim it, and you will not be compensated.</p>
                  </div>
                  <h3 style={h3Style}>How to Verify the Survey Plan</h3>
                  <p className="mb-5">Your first step in any land purchase is requesting the Survey Plan and doing a "Charting" at the state's Surveyor General's office.</p>
                  <div className="rounded-xl overflow-hidden mb-5" style={{ border: "1px solid var(--bos-border)" }}>
                    <ImageWithFallback src={IMG_SURVEY} alt="Land survey plan document" className="w-full aspect-[16/9] object-cover" />
                    <div className="px-4 py-3" style={{ background: "var(--bos-surface)" }}>
                      <p style={{ fontFamily: f, fontSize: 12, color: "var(--bos-text-4)", fontStyle: "italic" }}>A legitimate survey plan showing coordinates and beacon numbers</p>
                    </div>
                  </div>
                  <p className="mb-3">A legitimate survey plan will have:</p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2 mb-6">
                    {["The name of the owner.", "The exact size of the land.", "The beacon numbers (the pillars marking your boundaries).", "The surveyor's seal and signature.", "A Red Copy lodged with the state government. (If it's not lodged, it's not valid)."].map((item) => (
                      <li key={item} className="flex items-start gap-2.5"><span className="text-emerald-400 mt-1 shrink-0 text-[10px]">●</span><span style={{ fontSize: 15 }}>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div id="section-2" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                    <span className="text-[12px] text-emerald-400" style={{ fontFamily: f, fontWeight: 700 }}>2</span>
                  </div>
                  <h2 style={{ ...h2Style, marginBottom: 0 }}>The True Cost of Building in Nigeria</h2>
                </div>
                <div style={bodyStyle}>
                  <p className="mb-6">Cost estimations in Nigeria are moving targets due to inflation and exchange rate fluctuations. However, the proportions of your budget remain relatively stable.</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { pct: "5-10%", title: "Pre-Construction", items: "Architectural drawings, structural/mechanical drawings, government approvals & building permits" },
                      { pct: "15-20%", title: "Foundation & Substructure", items: "Raft foundations or piling for swampy land, iron rods, granite, cement — where many go broke" },
                      { pct: "25-30%", title: "Superstructure & Carcass", items: "Blockwork, first-floor slab (decking), pillars, and roofing" },
                      { pct: "40-50%", title: "Finishing", items: "Tiles, POP ceilings, electrical fittings, plumbing, windows, doors — the most expensive phase" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl p-5" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                        <span className="text-emerald-400 text-[20px]" style={{ fontFamily: f, fontWeight: 800, letterSpacing: "-0.02em" }}>{item.pct}</span>
                        <p className="mt-1 mb-2" style={{ ...highlightStyle, fontSize: 15 }}>{item.title}</p>
                        <p style={{ fontSize: 13, color: "var(--bos-text-4)", lineHeight: 1.55 }}>{item.items}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid var(--bos-border)" }}>
                    <ImageWithFallback src={IMG_FOUNDATION} alt="Nigerian construction site foundation" className="w-full aspect-[16/9] object-cover" />
                    <div className="px-4 py-3" style={{ background: "var(--bos-surface)" }}>
                      <p style={{ fontFamily: f, fontSize: 12, color: "var(--bos-text-4)", fontStyle: "italic" }}>Foundation layout with iron rods and formwork</p>
                    </div>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "var(--bos-amber-surface)", border: "1px solid var(--bos-amber-border)" }}>
                    <p style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>The Golden Rule of Funding</p>
                    <p style={{ fontSize: 14, color: "var(--bos-text-3)", lineHeight: 1.6 }}>Never send the entire project budget at once. Fund your project strictly by milestones (e.g., Foundation, Lintel Level, Roofing).</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="section-3" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--bos-red-surface)", border: "1px solid var(--bos-red-border)" }}>
                    <span className="text-[12px] text-red-400" style={{ fontFamily: f, fontWeight: 700 }}>3</span>
                  </div>
                  <h2 style={{ ...h2Style, marginBottom: 0 }}>The 4 Deadliest Scams</h2>
                </div>
                <div style={bodyStyle}>
                  <p className="mb-6">When you are 6,000 miles away, your construction site is vulnerable. Here are the most common ways Diaspora funds are stolen, and the modern ways to prevent them.</p>
                  {[
                    { num: "1", title: 'The "Ghost Worker" Syndicate', scam: "The supervisor tells you they need 15 laborers, 3 bricklayers, and 2 iron benders for a slab casting. In reality, they hire 8 people and pocket the daily wages of the other 12.", fix: "Demand biometric verification. If a worker is not physically clocked in on-site, they do not get paid." },
                    { num: "2", title: "The Recycled Photo Scam", scam: "You ask for an update. The supervisor sends you a photo of a beautifully casted pillar. What you don't know is that the photo is from three weeks ago, or worse, from a completely different construction site.", fix: "Require GPS-stamped, real-time logging. True site transparency means data can only be uploaded if the device is standing within the exact coordinates of your land." },
                    { num: "3", title: 'Material Substitution & "Shrinkage"', scam: 'You wire money for 16mm TMT iron rods and 100 bags of Dangote cement. The supervisor buys cheaper 12mm rods (compromising structural integrity) and only 70 bags, claiming the rest were "used in the foundation."', fix: "Escrow payments and digital gate passes. Suppliers must verify delivery at the site coordinates before funds are released." },
                    { num: "4", title: 'The "Omo Onile" Exaggeration', scam: "The supervisor claims that local land grabbers (Omo Onile) shut down the site and demanded a ₦500,000 settlement. While Omo Onile is a real nuisance, corrupt supervisors routinely use them as a boogeyman to extract emergency funds.", fix: "" },
                  ].map((scam) => (
                    <div key={scam.num} className="rounded-xl p-6 mb-4" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                      <p className="mb-3" style={{ ...highlightStyle, fontSize: 16 }}>{scam.num}. {scam.title}</p>
                      <p className="mb-3" style={{ fontSize: 14, lineHeight: 1.65 }}>
                        <span style={{ color: "#EF4444", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>The Scam:</span>{" "}
                        <span style={{ color: "var(--bos-text-3)" }}>{scam.scam}</span>
                      </p>
                      {scam.fix && (
                        <p style={{ fontSize: 14, lineHeight: 1.65 }}>
                          <span style={{ color: "#34D399", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>The Fix:</span>{" "}
                          <span style={{ color: "var(--bos-text-3)" }}>{scam.fix}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4 */}
              <div id="section-4" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                    <span className="text-[12px] text-emerald-400" style={{ fontFamily: f, fontWeight: 700 }}>4</span>
                  </div>
                  <h2 style={{ ...h2Style, marginBottom: 0 }}>Hiring a Site Supervisor</h2>
                </div>
                <div style={bodyStyle}>
                  <p className="mb-5">Your site supervisor makes or breaks your build. Sending money to a family member who has a 9-to-5 banking job to "supervise" your site on weekends is a <span style={highlightStyle}>guaranteed path to failure</span>. Construction requires daily, technical oversight.</p>
                  <h3 style={h3Style}>What to Look For</h3>
                  <div className="flex flex-col gap-3 mb-6">
                    {[
                      { label: "Professional Certification", desc: "Look for engineers registered with COREN or CORBON." },
                      { label: "Past Work Verification", desc: "Don't just look at photos. Ask for coordinates of past sites and send an independent proxy to verify quality." },
                      { label: "Willingness to Use Technology", desc: "A trustworthy contractor has nothing to hide. If they push back against tracking software, that is an immediate red flag." },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-[10px] text-emerald-400">✓</span></div>
                        <div>
                          <p style={{ ...highlightStyle, fontSize: 14, marginBottom: 2 }}>{item.label}</p>
                          <p style={{ fontSize: 14, color: "var(--bos-text-3)", lineHeight: 1.55 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 style={h3Style}>The Contract Structure</h3>
                  <p className="mb-3">Never hire on a verbal agreement. Your contract must stipulate:</p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2 mb-5">
                    {["A clear Bill of Quantities (BoQ).", "Delivery timelines tied to financial penalties for late completion.", "A clause requiring digital, daily site musters."].map((item) => (
                      <li key={item} className="flex items-start gap-2.5"><span className="text-emerald-400 mt-1 shrink-0 text-[10px]">●</span><span style={{ fontSize: 15 }}>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="section-5" className="scroll-mt-24 mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                    <span className="text-[12px] text-emerald-400" style={{ fontFamily: f, fontWeight: 700 }}>5</span>
                  </div>
                  <h2 style={{ ...h2Style, marginBottom: 0 }}>The Modern Way to Build</h2>
                </div>
                <div style={bodyStyle}>
                  <p className="mb-5">The traditional method of building in Nigeria relies on blind trust. You send cash via a remittance app to a personal bank account, cross your fingers, and hope for the best. <span style={{ color: "#34D399", fontWeight: 600 }}>It is time to replace "trust" with Verification.</span></p>
                  <p className="mb-6">This is why we created BuilderOS. We built an anti-fraud engine specifically for the Diaspora, combining military-grade biometric verification with secure financial escrow.</p>
                  <h3 style={h3Style}>How BuilderOS Secures Your Build</h3>
                  <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid var(--bos-border)" }}>
                    <ImageWithFallback src={IMG_BIOMETRIC} alt="Biometric facial verification on mobile" className="w-full aspect-[16/9] object-cover" />
                    <div className="px-4 py-3" style={{ background: "var(--bos-surface)" }}>
                      <p style={{ fontFamily: f, fontSize: 12, color: "var(--bos-text-4)", fontStyle: "italic" }}>Mobile biometric facial verification for construction workers</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mb-6">
                    {[
                      { icon: Lock, title: "The Secure Vault", desc: "When you start a project on BuilderOS, we generate a dedicated Virtual Bank Account for your site. You fund this wallet directly from the US, UK, or Canada. Your money sits safely in escrow.", color: "#34D399" },
                      { icon: Fingerprint, title: "Biometric Morning Muster", desc: 'Our app requires site workers to do a Liveness Face Scan matched against their ID. Supervisors can no longer invent "ghost workers." No face, no pay.', color: "#60A5FA" },
                      { icon: MapPin, title: "GPS Geofencing", desc: "BuilderOS only allows check-ins and material logging if the supervisor's phone is physically standing inside the verified coordinates of your land. Recycled photos are mathematically impossible.", color: "#A78BFA" },
                      { icon: Zap, title: "Automated Payouts", desc: "At the end of the day, BuilderOS automatically calculates wages for verified workers and disperses funds directly to their bank accounts.", color: "#F59E0B" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl p-5 flex gap-4" style={{ background: "var(--bos-surface)", border: "1px solid var(--bos-border)" }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
                          <item.icon className="w-4.5 h-4.5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <p style={{ ...highlightStyle, fontSize: 15, marginBottom: 4 }}>{item.title}</p>
                          <p style={{ fontSize: 14, color: "var(--bos-text-3)", lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-5 text-center" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                    <p style={{ color: "var(--bos-text-2)", fontWeight: 600, fontSize: 15 }}>You remain in total control of your capital.</p>
                    <p style={{ color: "#34D399", fontWeight: 700, fontSize: 16, marginTop: 4 }}>No work verified? No money leaves your wallet.</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: "var(--bos-emerald-surface)", border: "1px solid var(--bos-emerald-border)" }}>
                <h3 className="mb-3" style={{ fontFamily: fs, fontSize: 24, fontWeight: 800, color: "var(--bos-text-1)", letterSpacing: "-0.03em" }}>Your home is your legacy.</h3>
                <p className="mb-6 mx-auto max-w-[420px]" style={{ fontFamily: f, fontSize: 15, fontWeight: 400, color: "var(--bos-text-3)", lineHeight: 1.6 }}>Protect it with the technology it deserves. Stop funding ghost workers and secure your project capital today.</p>
                <Link to="/signup" className="inline-flex items-center gap-2 h-[48px] px-7 rounded-xl text-[15px] text-white no-underline transition-all hover:opacity-90" style={{ fontFamily: f, fontWeight: 600, background: "linear-gradient(135deg, #10B981 0%, #059669 100%)", boxShadow: "var(--bos-cta-shadow)" }}>
                  Create Your Secure Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}