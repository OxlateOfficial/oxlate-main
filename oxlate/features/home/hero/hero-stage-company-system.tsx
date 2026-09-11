"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, MotionValue } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";
import {
  IdentityZone,
  CapabilitiesZone,
  ApproachZone,
  WorkZone,
  PrinciplesZone,
} from "./hero-company-zones";
import {
  RightUpperArchitecturalFrame,
  RightLowerArchitecturalFrame,
  BottomLeftArchitecturalCorner,
} from "./hero-architectural-frames";
import { HeroSystemConnectorNetwork } from "./hero-system-connector-network";
import { ConstructingNumber, GenerativeText, GenerativeLine } from "@/components/ui";
import { useHeroProgressContext } from "./use-hero-progress";

interface HeroStageCompanySystemProps {
  opacity?: MotionValue<number>;
  scale?: MotionValue<number>;
  linesOpacity?: MotionValue<number>;
  activeZone?: string | null;
  onHoverZone?: (zoneId: string | null) => void;
}

/**
 * Stage 3 Company System Blueprint:
 * Complete architectural company map directly matching
 * reference/ChatGPT Image Sep 11, 2026, 12_09_50 PM.png.
 * Strictly enforces NO-CARD architecture.
 */
export function HeroStageCompanySystem({
  opacity: propOpacity,
  scale: propScale,
  linesOpacity: propLinesOpacity,
  activeZone: controlledActiveZone,
  onHoverZone,
}: HeroStageCompanySystemProps) {
  const [internalActiveZone, setInternalActiveZone] = useState<string | null>(null);
  const activeZone = controlledActiveZone !== undefined ? controlledActiveZone : internalActiveZone;
  const gridRef = useRef<HTMLDivElement>(null);

  const progress = useHeroProgressContext();
  const effectiveLinesOpacity = propLinesOpacity ?? progress?.linesOpacity;
  const effectiveOpacity = propOpacity ?? progress?.commandCenterOpacity;
  const effectiveScale = propScale ?? progress?.commandCenterScale;

  const [isStageActive, setIsStageActive] = useState(false);

  useEffect(() => {
    if (!effectiveOpacity) return;
    const update = (v: number) => {
      setIsStageActive(v > 0.05);
    };
    update(effectiveOpacity.get());
    return effectiveOpacity.on("change", update);
  }, [effectiveOpacity]);

  const handleHover = (zoneId: string | null) => {
    if (!isStageActive && zoneId !== null) return;
    if (controlledActiveZone === undefined) {
      setInternalActiveZone(zoneId);
    }
    onHoverZone?.(zoneId);
  };

  return (
    <div
      className={`hidden md:flex absolute inset-0 w-full h-full flex-col justify-between pt-20 pb-5 px-6 sm:px-10 lg:px-12 xl:px-14 z-40 select-none ${
        isStageActive ? "pointer-events-none" : "pointer-events-none invisible"
      }`}
      style={{
        visibility: isStageActive ? "visible" : "hidden",
      }}
      aria-hidden={!isStageActive}
    >
      {/* STAGE 3 ASSEMBLED COMPANY SYSTEM BLUEPRINT (Planar drafting table, rock-solid 1.0 scale) */}
      <motion.div
        style={
          effectiveOpacity
            ? {
                opacity: effectiveOpacity,
                visibility: progress?.commandCenterVisibility,
                pointerEvents: progress?.commandCenterPointerEvents,
              }
            : undefined
        }
        className={`relative w-full h-full flex flex-col justify-between ${
          isStageActive ? "" : "pointer-events-none"
        }`}
      >
        {/* MAIN 3-COLUMN ARCHITECTURAL SYSTEM GRID */}
        <div
          ref={gridRef}
          className="relative z-20 w-full max-w-[1380px] mx-auto flex-1 flex items-stretch justify-between gap-6 my-auto pt-2"
        >
          {/* Structural Inward Vector Network & Orbit Guides */}
          <motion.div
            style={effectiveLinesOpacity ? { opacity: effectiveLinesOpacity } : undefined}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <HeroSystemConnectorNetwork activeZone={activeZone} containerRef={gridRef} />
          </motion.div>

          {/* ======================================================== */}
          {/* LEFT COLUMN: 01 IDENTITY (Top) & 04 WORK (Bottom - Lifted) */}
          {/* ======================================================== */}
          <div className="flex flex-col justify-start gap-8 xl:gap-10 w-[380px] xl:w-[410px] shrink-0 pb-6 z-20">
            {/* Zone 01: Identity */}
            <IdentityZone
              isActive={activeZone === "01"}
              isMuted={activeZone !== null && activeZone !== "01"}
              onHover={(h) => handleHover(h ? "01" : null)}
              isInteractive={isStageActive}
            />

            {/* Zone 04: Work (Independent Projects) - repositioned higher above bottom metadata */}
            <WorkZone
              isActive={activeZone === "04"}
              isMuted={activeZone !== null && activeZone !== "04"}
              onHover={(h) => handleHover(h ? "04" : null)}
              isInteractive={isStageActive}
              className="mb-4"
            />
          </div>

          {/* ======================================================== */}
          {/* CENTER FIELD: CENTRAL X HUB, WORDMARK, CAD LABELS, & NEXT */}
          {/* ======================================================== */}
          <div className="relative flex-1 flex flex-col justify-between items-center px-4 max-w-[460px]">
            {/* Top-Center (Above X): CAD Axiom + EST. 2025 */}
            <motion.div
              style={progress ? { opacity: progress.hubAxiomProgress } : undefined}
              className="relative flex flex-col items-center text-center font-mono text-[9px] uppercase tracking-widest text-[#6C6B66] leading-tight pt-2"
            >
              {/* Tight Typography Clearing Plate */}
              <div className="absolute -inset-x-3 -inset-y-1 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_12px_6px_#F5F2EC] pointer-events-none -z-10" />

              <GenerativeText
                text="IDEAS ALIGN"
                mode="line-mask"
                progress={progress?.hubAxiomProgress}
                className="text-[#111111] font-semibold"
              />
              <GenerativeText
                text="SYSTEMS TAKE SHAPE"
                mode="line-mask"
                progress={progress?.hubAxiomProgress}
              />
              <GenerativeText
                text="PROGRESS FOLLOWS"
                mode="line-mask"
                progress={progress?.hubAxiomProgress}
              />
              <GenerativeLine
                orientation="vertical"
                origin="top"
                progress={progress?.hubAxiomProgress}
                thickness={1}
                color="#111111"
                className="h-4 my-1.5"
              />
              <div className="flex items-center gap-1.5 text-[#111111] font-bold tracking-[0.25em]">
                <span>EST.</span>
                <ConstructingNumber value="2025" className="text-[#111111]" />
              </div>
            </motion.div>

            {/* Center Void: Preserved for Central HeroX mark with comfortable clearance */}
            <div className="w-[260px] h-[235px] pointer-events-none" />

            {/* Center-Lower (Below X): O X L A T E Wordmark & Geographical Scope */}
            <motion.div
              style={progress ? { opacity: progress.hubProgress } : undefined}
              className="relative flex flex-col items-center text-center mt-2"
            >
              {/* Tight Typography Clearing Plate strictly behind letters (zero upward bleed into HeroX) */}
              <div className="absolute -inset-x-4 -inset-y-1 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_12px_6px_#F5F2EC] pointer-events-none -z-10" />

              <h1 className="font-orbitron text-3xl xl:text-4xl font-bold tracking-[0.45em] text-[#111111] uppercase leading-none">
                <GenerativeText
                  text="O X L A T E"
                  mode="plotter"
                  progress={progress?.hubProgress}
                />
              </h1>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#6C6B66] uppercase mt-2">
                <GenerativeText text="TECHNOLOGY" mode="decode" progress={progress?.hubProgress} />
                <span className="text-[#A87445]">/</span>
                <GenerativeText text="DESIGN" mode="decode" progress={progress?.hubProgress} delayMs={100} />
                <span className="text-[#A87445]">/</span>
                <GenerativeText text="ENGINEERING" mode="decode" progress={progress?.hubProgress} delayMs={200} />
              </div>
              <GenerativeLine
                orientation="vertical"
                origin="top"
                progress={progress?.hubProgress}
                thickness={1}
                color="#111111"
                className="h-4 my-1.5"
              />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#6C6B66]">
                <GenerativeText text="INDIA" mode="decode" progress={progress?.hubProgress} />
                <span className="text-[#A87445] mx-1">/</span>
                <GenerativeText text="GLOBAL" mode="decode" progress={progress?.hubProgress} delayMs={150} />
              </span>
            </motion.div>

            {/* Bottom-Center CTA: Next Action Anchor & Architectural Scroll Cue */}
            <motion.div
              style={progress ? { opacity: progress.nextCtaProgress } : undefined}
              className={`relative flex flex-col items-center text-center pb-2 ${
                isStageActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              {/* Tight Typography Clearing Plate strictly behind heading copy */}
              <div className="relative flex flex-col items-center">
                <div className="absolute -inset-x-3 -inset-y-1 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_12px_6px_#F5F2EC] pointer-events-none -z-10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8C8A84] mb-1">
                  <GenerativeText text="NEXT" mode="decode" progress={progress?.nextCtaProgress} />
                </span>
                <h3 className="font-sans text-xs sm:text-sm font-bold tracking-[0.18em] text-[#111111] uppercase mb-2.5">
                  <GenerativeText
                    text="HAVE SOMETHING WORTH BUILDING?"
                    mode="plotter"
                    progress={progress?.nextCtaProgress}
                  />
                </h3>
              </div>

              {/* Action Button: Crisp, unclouded foreground */}
              <Link
                href="/#contact"
                tabIndex={isStageActive ? 0 : -1}
                className={`relative z-30 inline-flex items-center gap-2 bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-[3px] shadow-sm transition-all duration-200 group/cta hover:shadow-md ${
                  isStageActive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
                }`}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
              </Link>

              {/* Architectural Scroll Cue: Prompts the user to continue scrolling into 02 CAPABILITIES */}
              <Link
                href="/#capabilities"
                tabIndex={isStageActive ? 0 : -1}
                className={`mt-2.5 flex flex-col items-center gap-1 group/scroll text-[#8C8A84] hover:text-[#A87445] transition-colors ${
                  isStageActive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
                }`}
                aria-label="Scroll to explore more content"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.28em] font-medium transition-colors group-hover/scroll:text-[#A87445]">
                  SCROLL TO EXPLORE
                </span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-3 h-3 text-[#A87445] transition-transform group-hover/scroll:translate-y-0.5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 02 CAPABILITIES, 03 APPROACH, 05 WHY OXLATE */}
          {/* ======================================================== */}
          <div className="flex flex-col justify-between w-[380px] xl:w-[410px] shrink-0">
            {/* Top Row: Zone 02 Capabilities + Upper Flank Frame (Unified Interactive Unit) */}
            <div
              className={`flex items-start justify-between gap-4 ${
                isStageActive ? "cursor-pointer" : "pointer-events-none"
              }`}
              onMouseEnter={() => isStageActive && handleHover("02")}
              onMouseLeave={() => isStageActive && handleHover(null)}
            >
              <CapabilitiesZone
                isActive={activeZone === "02"}
                isMuted={activeZone !== null && activeZone !== "02"}
                onHover={(h) => handleHover(h ? "02" : null)}
                isInteractive={isStageActive}
                className="flex-1"
              />
              {/* Right Upper Flank: Concrete Cantilever + Scalable/Secure/Maintainable */}
              <motion.div
                style={progress ? { opacity: progress.zone02Progress } : undefined}
                className={`flex flex-col items-end gap-2 shrink-0 transition-all duration-200 ${
                  activeZone !== null && activeZone !== "02"
                    ? "opacity-65"
                    : activeZone === "02"
                    ? "opacity-100 scale-[1.01]"
                    : "opacity-100"
                }`}
              >
                <RightUpperArchitecturalFrame />
                <div className={`flex flex-col items-end font-mono text-[8px] uppercase tracking-widest leading-tight text-right transition-colors ${
                  activeZone === "02" ? "text-[#111111]" : "text-[#8C8A84]"
                }`}>
                  <span>SCALABLE</span>
                  <span>SECURE</span>
                  <span>MAINTAINABLE</span>
                </div>
              </motion.div>
            </div>

            {/* Middle Row: Zone 03 Approach + Middle Flank Frame (Unified Interactive Unit) */}
            <div
              className={`flex items-start justify-between gap-4 my-2 ${
                isStageActive ? "cursor-pointer" : "pointer-events-none"
              }`}
              onMouseEnter={() => isStageActive && handleHover("03")}
              onMouseLeave={() => isStageActive && handleHover(null)}
            >
              <ApproachZone
                isActive={activeZone === "03"}
                isMuted={activeZone !== null && activeZone !== "03"}
                onHover={(h) => handleHover(h ? "03" : null)}
                isInteractive={isStageActive}
                className="flex-1"
              />
              {/* Right Middle Flank: Glass Facade + Discipline Creates Freedom */}
              <motion.div
                style={progress ? { opacity: progress.zone03Progress } : undefined}
                className={`flex flex-col items-end gap-2 shrink-0 transition-all duration-200 ${
                  activeZone !== null && activeZone !== "03"
                    ? "opacity-65"
                    : activeZone === "03"
                    ? "opacity-100 scale-[1.01]"
                    : "opacity-100"
                }`}
              >
                <div className={`flex flex-col items-end font-mono text-[8px] uppercase tracking-widest leading-tight text-right transition-colors ${
                  activeZone === "03" ? "text-[#111111]" : "text-[#8C8A84]"
                }`}>
                  <span>DISCIPLINE</span>
                  <span>CREATES</span>
                  <span>FREEDOM</span>
                </div>
                <RightLowerArchitecturalFrame />
              </motion.div>
            </div>

            {/* Bottom Row: Zone 05 Why Oxlate + Lower Flank Annotation (Unified Interactive Unit) */}
            <div
              className={`flex items-start justify-between gap-4 ${
                isStageActive ? "cursor-pointer" : "pointer-events-none"
              }`}
              onMouseEnter={() => isStageActive && handleHover("05")}
              onMouseLeave={() => isStageActive && handleHover(null)}
            >
              <PrinciplesZone
                isActive={activeZone === "05"}
                isMuted={activeZone !== null && activeZone !== "05"}
                onHover={(h) => handleHover(h ? "05" : null)}
                isInteractive={isStageActive}
                className="flex-1"
              />
              {/* Right Lower Flank Annotation */}
              <motion.div
                style={progress ? { opacity: progress.zone05Progress } : undefined}
                className={`flex flex-col items-end font-mono text-[8px] uppercase tracking-widest leading-tight text-right shrink-0 transition-all duration-200 ${
                  activeZone !== null && activeZone !== "05"
                    ? "opacity-65"
                    : activeZone === "05"
                    ? "opacity-100 scale-[1.01]"
                    : "opacity-100"
                }`}
              >
                <span>TECHNOLOGY</span>
                <span>SHOULD</span>
                <span>FEEL</span>
                <span className="text-[#111111] font-semibold">HUMAN</span>
                <div className="h-2" />
                <span className="text-[#A87445]">IDEAS</span>
                <span>TO IMPACT</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR / FOOTER CHIPS with pointer-events-auto */}
        <div className={`relative z-20 w-full max-w-[1380px] mx-auto flex items-end justify-between pt-4 pb-4 mb-2 border-t border-[#D9D4CC]/50 font-mono text-[10px] text-[#6C6B66] select-none ${
          isStageActive ? "pointer-events-auto" : "pointer-events-none"
        }`}>
          {/* Bottom Left Corner Monolith & Facts */}
          <div className="flex items-end gap-6">
            <BottomLeftArchitecturalCorner className="hidden lg:block shrink-0 -mb-1" />
            <div className="flex items-center gap-6 pb-1">
              <div className="flex items-baseline gap-2">
                <ConstructingNumber value="2025" className="font-orbitron text-sm font-bold text-[#111111]" />
                <span className="text-[9px] uppercase tracking-wider text-[#8C8A84]">ESTABLISHED</span>
              </div>
              <div className="w-[1px] h-3 bg-[#D9D4CC]" />
              <div className="flex items-baseline gap-2">
                <span className="font-orbitron text-sm font-bold text-[#111111]">∞</span>
                <span className="text-[9px] uppercase tracking-wider text-[#8C8A84]">POSSIBILITIES</span>
              </div>
              <div className="w-[1px] h-3 bg-[#D9D4CC]" />
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                  FOCUSED
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#8C8A84]">BY DESIGN</span>
              </div>
            </div>
          </div>

          {/* Bottom Center-Right Legal & Social Links */}
          <div className={`flex items-center gap-6 text-[9px] uppercase tracking-widest ${
            isStageActive ? "pointer-events-auto" : "pointer-events-none"
          }`}>
            <span className="text-[#8C8A84]">© 2025 OXLATE. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-4 text-[#6C6B66]">
              <Link
                href="/#about"
                tabIndex={isStageActive ? 0 : -1}
                className={`hover:text-[#111111] transition-colors ${
                  isStageActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="/work"
                tabIndex={isStageActive ? 0 : -1}
                className={`hover:text-[#111111] transition-colors ${
                  isStageActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                WORK
              </Link>
              <a
                href="https://www.linkedin.com/company/oxlateofficial"
                target="_blank"
                rel="noreferrer"
                tabIndex={isStageActive ? 0 : -1}
                className={`hover:text-[#A87445] transition-colors font-medium inline-flex items-center gap-0.5 ${
                  isStageActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://github.com/OxlateOfficial"
                target="_blank"
                rel="noreferrer"
                tabIndex={isStageActive ? 0 : -1}
                className={`hover:text-[#A87445] transition-colors font-medium inline-flex items-center gap-0.5 ${
                  isStageActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://x.com/OxlateOfficial"
                target="_blank"
                rel="noreferrer"
                tabIndex={isStageActive ? 0 : -1}
                className={`hover:text-[#A87445] transition-colors font-medium inline-flex items-center gap-0.5 ${
                  isStageActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <span>X</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
