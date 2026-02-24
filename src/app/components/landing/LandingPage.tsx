import React from "react";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Showcase } from "./Showcase";
import { Testimonials } from "./Testimonials";
import { CtaSection } from "./CtaSection";

export function LandingPage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <CtaSection />
    </>
  );
}
