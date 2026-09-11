import { HeroSection } from "@/features/home/hero/hero-section";
import { SideDial, MobileStatusTicker } from "@/features/home/nav";
import {
  CapabilitiesSection,
  WorkSection,
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

      {/* Continuous Homepage Narrative */}
      {/* 01 // INTRO (#intro) */}
      <HeroSection />

      {/* 02 // CAPABILITIES (#capabilities) */}
      <CapabilitiesSection />

      {/* 03 // WORK (#work) */}
      <WorkSection />

      {/* 04 // APPROACH (#approach) */}
      <ApproachSection />

      {/* 05 // ABOUT (#about) */}
      <AboutSection />

      {/* 06 // CONTACT (#contact) */}
      <ContactSection />

      {/* 07 // FOOTER */}
      <FooterSection />
    </main>
  );
}
