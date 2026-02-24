import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { LogoMark, Wordmark } from "../BuilderOSLogo";
import { Shield, Wallet, Activity, Eye, EyeOff } from "lucide-react";
import { useTheme } from "../ThemeContext";

const features = [
  { icon: Shield, text: "Biometric-verified workers" },
  { icon: Wallet, text: "Escrow-protected payments" },
  { icon: Activity, text: "Real-time site updates" },
];

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "var(--bos-bg-3)", color: "var(--bos-text-1)" }}>
      {/* Left panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-[48%] min-h-screen p-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #060A12 0%, #0B1120 40%, #0F172A 100%)",
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
          className="absolute w-[400px] h-[400px] -bottom-[100px] -left-[100px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline mb-16"
          >
            <LogoMark size={28} color="#FFFFFF" accentColor="#34D399" />
            <Wordmark height={16} color="#FFFFFF" accentColor="rgba(255,255,255,0.4)" />
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1
              className="mb-2"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 36,
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Build Your Dream Home
              <br />
              in Nigeria.
            </h1>
            <p
              className="mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#34D399",
                letterSpacing: "-0.02em",
              }}
            >
              Without the stress.
            </p>
            <p
              className="max-w-[360px] mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}
            >
              Trust-verified construction management for diaspora Nigerians.
            </p>

            <div className="flex flex-col gap-3 mb-12">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.15)",
                    }}
                  >
                    <f.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span
                    className="text-[14px] text-white/50"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10">
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              "BuilderOS gave me peace of mind monitoring my Lagos house from
              London."
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              — Chioma A., Client
            </p>
          </div>
        </div>
      </div>

      {/* Right panel — Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-[420px]"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <LogoMark size={28} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor="#34D399" />
              <Wordmark height={16} color={isDark ? "#FFFFFF" : "#0F172A"} accentColor={isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.3)"} />
            </Link>
          </div>

          <h2
            className="mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "var(--bos-text-1)",
              letterSpacing: "-0.02em",
            }}
          >
            Create your account
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "var(--bos-text-4)",
            }}
          >
            Start managing your construction projects
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <div>
              <label className="block mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--bos-text-3)" }}>Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full h-[48px] rounded-xl px-4 border-none outline-none text-[15px]" style={{ fontFamily: "'Inter', sans-serif", background: "var(--bos-input-bg)", border: "1px solid var(--bos-input-border)", color: "var(--bos-text-1)" }} />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--bos-text-3)" }}>Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full h-[48px] rounded-xl px-4 border-none outline-none text-[15px]" style={{ fontFamily: "'Inter', sans-serif", background: "var(--bos-input-bg)", border: "1px solid var(--bos-input-border)", color: "var(--bos-text-1)" }} />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--bos-text-3)" }}>Phone Number</label>
              <input type="tel" placeholder="08012345678" className="w-full h-[48px] rounded-xl px-4 border-none outline-none text-[15px]" style={{ fontFamily: "'Inter', sans-serif", background: "var(--bos-input-bg)", border: "1px solid var(--bos-input-border)", color: "var(--bos-text-1)" }} />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--bos-text-3)" }}>Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full h-[48px] rounded-xl px-4 pr-12 border-none outline-none text-[15px]" style={{ fontFamily: "'Inter', sans-serif", background: "var(--bos-input-bg)", border: "1px solid var(--bos-input-border)", color: "var(--bos-text-1)" }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer" style={{ color: "var(--bos-text-5)" }}>
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="mt-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: "var(--bos-text-5)" }}>Must be at least 8 characters</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-[48px] rounded-xl border-none cursor-pointer transition-all hover:opacity-90 mt-1"
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
              Create Account
            </button>
          </form>

          <p
            className="text-center mt-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "var(--bos-text-4)",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-400 no-underline hover:underline"
              style={{ fontWeight: 500 }}
            >
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}