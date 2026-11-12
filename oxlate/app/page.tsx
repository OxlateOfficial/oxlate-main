import { HeroSection } from "@/features/home/hero/hero-section";
import { SideDial, MobileStatusTicker } from "@/features/home/nav";
import {
  ProofBar,
  CapabilitiesSection,
  WorkSection,
  LabsPreviewSection,
  ApproachSection,
  AboutSection,
  ContactSection,
  FooterSection,
} from "@/features/home/sections";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#F5F2EC] text-[#111111]">
      {/* Section Navigation: Desktop Side Dial (>= 1024px) & Mobile Status Ticker (< 1024px) */}
      <SideDial />
      <MobileStatusTicker />

      {/* 01 // HERO & PURE OBJECT SHOWCASE (#intro) */}
      <HeroSection />

      {/* SOCIAL PROOF & KEY METRICS BAR */}
      <ProofBar />

      {/* 02 // WHAT WE BUILD / CAPABILITIES (#capabilities) */}
      <CapabilitiesSection />

      {/* 03 // PROVEN IMPACT / SELECTED WORK (#work) */}
      <WorkSection />

      {/* PROPRIETARY IN-HOUSE PRODUCTS / STUDIO LABS (#labs) */}
      <LabsPreviewSection />

      {/* 04 // OUR PROCESS / APPROACH (#approach) */}
      <ApproachSection />

      {/* 05 // THE FOUNDERS & STUDIO (#about) */}
      <AboutSection />

      {/* 06 // START A PROJECT (#contact) */}
      <ContactSection />

      {/* 07 // FOOTER */}
      <FooterSection />
    </main>
  );
}
