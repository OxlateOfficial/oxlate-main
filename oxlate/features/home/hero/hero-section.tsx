"use client";

import { useRef, useState, useMemo } from "react";
import { HeroCanvas } from "./hero-canvas";
import { HeroArchitecturalBand } from "./hero-architectural-band";
import { HeroX } from "./hero-x";
import { HeroContent } from "./hero-content";
import { HeroStageCompanySystem } from "./hero-stage-company-system";
import { Navbar } from "@/features/home/nav";
import { useHeroProgress, HeroProgressContext } from "./use-hero-progress";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroProgress = useHeroProgress(containerRef);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  // Subtle coordinate reaction on the central X when zones are hovered
  const centerShift = useMemo(() => {
    switch (activeZone) {
      case "01":
        return { x: 5, y: 5 };
      case "02":
        return { x: -5, y: 5 };
      case "03":
        return { x: -6, y: 0 };
      case "04":
        return { x: 5, y: -5 };
      case "05":
        return { x: -5, y: -5 };
      default:
        return { x: 0, y: 0 };
    }
  }, [activeZone]);

  return (
    <HeroProgressContext.Provider value={heroProgress}>
      {/* Top Architectural Header (Navbar with Logo, Nav links, Get a Quote CTA) */}
      <Navbar />

      <section
        ref={containerRef}
        id="intro"
        className="relative bg-[#F5F2EC] w-full min-h-screen md:h-[400vh]"
        aria-label="Intro Section"
      >
        {/* Pinned Viewport Frame */}
        <div className="relative md:sticky md:top-0 min-h-screen md:h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0">
          {/* L0 + L1: Warm Ivory Canvas & Hairline CAD Grid */}
          <HeroCanvas />

          {/* L1.5: Architectural Service Band (Diagonal in Stage 1 -> Levels to horizontal beam in Stage 2) */}
          <HeroArchitecturalBand />

          {/* L2: Central Oxlate X Coordinate (Single continuous identity transforming through all stages) */}
          <HeroX centerShift={centerShift} />

          {/* L3 + L4: Stage 3 Connected Architectural Company System (Interconnected Information Zones) */}
          <HeroStageCompanySystem
            activeZone={activeZone}
            onHoverZone={setActiveZone}
          />

          {/* L5: Left/Upper Editorial Column (01 // INTRO, H1, Subtitle, Contact CTA) */}
          <HeroContent />
        </div>
      </section>
    </HeroProgressContext.Provider>
  );
}
