"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, ArrowRight } from "lucide-react";
import { LeftArchitecturalFrame } from "./hero-architectural-frames";
import { ConstructingNumber, GenerativeText, GenerativeLine } from "@/components/ui";
import { useHeroProgressContext } from "./use-hero-progress";
import { getHeroProjects, ProjectItem } from "@/data/projects.data";

interface ZoneProps {
  isActive?: boolean;
  isMuted?: boolean;
  onHover?: (hovered: boolean) => void;
  className?: string;
  isInteractive?: boolean;
}

/**
 * 01 IDENTITY ZONE (Top-Left)
 * Answers: What is Oxlate?
 */
export function IdentityZone({ isActive, isMuted, onHover, isInteractive = true, className = "" }: ZoneProps) {
  const progress = useHeroProgressContext();

  return (
    <motion.div
      style={progress ? { opacity: progress.zone01Progress } : undefined}
      onMouseEnter={() => isInteractive && onHover?.(true)}
      onMouseLeave={() => isInteractive && onHover?.(false)}
      className={`group/zone relative flex flex-col max-w-[340px] xl:max-w-[380px] select-none transition-all duration-200 ${
        isInteractive ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isMuted
          ? "opacity-65 scale-[0.995]"
          : isActive
          ? "opacity-100 scale-[1.015] z-30"
          : "opacity-100 scale-100"
      } ${className}`}
    >
      {/* Crease-Free Feathered Canvas Clearing Plate */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_16px_8px_#F5F2EC] pointer-events-none transition-all duration-200 -z-10 ${
          isActive ? "opacity-100 shadow-[0_0_20px_10px_#F5F2EC]" : "opacity-90"
        }`}
      />

      {/* Zone Header with Constructing Number & Decoded Tag */}
      <div className="flex items-baseline gap-3 mb-2">
        <ConstructingNumber
          value="01"
          className={`text-xl font-bold tracking-wider transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#111111]"
          }`}
        />
        <GenerativeText
          text="IDENTITY"
          mode="decode"
          progress={progress?.zone01Progress}
          className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#6C6B66]"
          }`}
        />
      </div>

      {/* Structural Hairline Divider & Connected Anchor Node */}
      <div className="relative w-full flex items-center mb-4">
        <GenerativeLine
          orientation="horizontal"
          origin="left"
          progress={progress?.zone01LineProgress}
          thickness={1}
          color={isActive ? "#A87445" : "#111111"}
          className="w-16"
        />
        {/* Dynamic Connector Anchor Node */}
        <div
          data-anchor="zone-01"
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center pointer-events-none z-10"
        >
          <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? "bg-[#A87445]" : "bg-[#111111]"}`} />
        </div>
      </div>

      {/* Masked Plotter Headline */}
      <h2 className="font-sans text-2xl xl:text-3xl font-bold tracking-tight text-[#111111] leading-tight mb-3">
        <GenerativeText
          text="A focused technology partner."
          mode="line-mask"
          lines={["A focused", "technology partner."]}
          progress={progress?.zone01TextProgress}
        />
      </h2>

      {/* Architectural Narrative Description */}
      <p className="font-sans text-xs sm:text-[13px] text-[#4A4946] leading-relaxed mb-4 max-w-[280px]">
        <GenerativeText
          text="We build thoughtful digital products with design discipline and engineering precision."
          mode="plotter"
          progress={progress?.zone01TextProgress}
        />
      </p>

      {/* Interactive Link */}
      <Link
        href="/#about"
        tabIndex={isInteractive ? 0 : -1}
        className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold group/btn transition-colors hover:text-[#A87445] mb-5 ${
          isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
      >
        <GenerativeText
          text="Learn about Oxlate"
          mode="decode"
          progress={progress?.zone01TextProgress}
          delayMs={120}
        />
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
      </Link>

      {/* Left Flank Brutalist Architectural Photo Frame */}
      <LeftArchitecturalFrame />
    </motion.div>
  );
}

/**
 * 02 CAPABILITIES ZONE (Top-Right)
 * Answers: What does Oxlate build?
 */
export function CapabilitiesZone({ isActive, isMuted, onHover, isInteractive = true, className = "" }: ZoneProps) {
  const progress = useHeroProgressContext();

  return (
    <motion.div
      style={progress ? { opacity: progress.zone02Progress } : undefined}
      onMouseEnter={() => isInteractive && onHover?.(true)}
      onMouseLeave={() => isInteractive && onHover?.(false)}
      className={`group/zone relative flex flex-col max-w-[320px] xl:max-w-[360px] select-none transition-all duration-200 ${
        isInteractive ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isMuted
          ? "opacity-65 scale-[0.995]"
          : isActive
          ? "opacity-100 scale-[1.015] z-30"
          : "opacity-100 scale-100"
      } ${className}`}
    >
      {/* Crease-Free Feathered Canvas Clearing Plate */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_16px_8px_#F5F2EC] pointer-events-none transition-all duration-200 -z-10 ${
          isActive ? "opacity-100 shadow-[0_0_20px_10px_#F5F2EC]" : "opacity-90"
        }`}
      />

      {/* Zone Header */}
      <div className="flex items-baseline gap-3 mb-2">
        <ConstructingNumber
          value="02"
          className={`text-xl font-bold tracking-wider transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#111111]"
          }`}
        />
        <GenerativeText
          text="CAPABILITIES"
          mode="decode"
          progress={progress?.zone02Progress}
          className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#6C6B66]"
          }`}
        />
      </div>

      {/* Structural Hairline Divider & Connected Anchor Node */}
      <div className="relative w-full flex items-center mb-4">
        <div
          data-anchor="zone-02"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center pointer-events-none z-10"
        >
          <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? "bg-[#A87445]" : "bg-[#111111]"}`} />
        </div>
        <GenerativeLine
          orientation="horizontal"
          origin="left"
          progress={progress?.zone02Progress}
          thickness={1}
          color={isActive ? "#A87445" : "#111111"}
          className="w-16"
        />
      </div>

      {/* Stacked Technical Entries - Interactive Links to Capabilities */}
      <div className="flex flex-col gap-4">
        {/* Entry 1: Web */}
        <Link
          href="/#capabilities"
          tabIndex={isInteractive ? 0 : -1}
          className={`group/entry flex items-center justify-between pb-3 border-b border-[#D9D4CC]/70 transition-colors hover:border-[#111111]/40 ${
            isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
        >
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#111111] shrink-0 mt-0.5 group-hover/entry:text-[#A87445] transition-colors" />
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-[#111111] group-hover/entry:text-[#A87445] transition-colors">
                <GenerativeText text="Web" mode="decode" progress={progress?.zone02WebProgress} />
              </span>
              <span className="font-sans text-xs text-[#6C6B66]">
                <GenerativeText text="Websites & web applications" mode="plotter" progress={progress?.zone02WebProgress} />
              </span>
              <span className="font-mono text-[10px] text-[#8C8A84] tracking-wide">
                Modern, high-performance
              </span>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border border-[#D9D4CC] flex items-center justify-center group-hover/entry:border-[#A87445] group-hover/entry:bg-[#A87445] group-hover/entry:text-white transition-all shrink-0">
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Entry 2: Mobile */}
        <Link
          href="/#capabilities"
          tabIndex={isInteractive ? 0 : -1}
          className={`group/entry flex items-center justify-between pb-3 border-b border-[#D9D4CC]/70 transition-colors hover:border-[#111111]/40 ${
            isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
        >
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-[#111111] shrink-0 mt-0.5 group-hover/entry:text-[#A87445] transition-colors" />
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-[#111111] group-hover/entry:text-[#A87445] transition-colors">
                <GenerativeText text="Mobile" mode="decode" progress={progress?.zone02MobileProgress} />
              </span>
              <span className="font-sans text-xs text-[#6C6B66]">
                <GenerativeText text="Android & iOS applications" mode="plotter" progress={progress?.zone02MobileProgress} />
              </span>
              <span className="font-mono text-[10px] text-[#8C8A84] tracking-wide">
                Native and cross-platform
              </span>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border border-[#D9D4CC] flex items-center justify-center group-hover/entry:border-[#A87445] group-hover/entry:bg-[#A87445] group-hover/entry:text-white transition-all shrink-0">
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Entry 3: Custom Software */}
        <Link
          href="/#capabilities"
          tabIndex={isInteractive ? 0 : -1}
          className={`group/entry flex items-center justify-between pb-2 transition-colors hover:opacity-80 ${
            isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
        >
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-[#111111] shrink-0 mt-0.5 group-hover/entry:text-[#A87445] transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-[#111111] group-hover/entry:text-[#A87445] transition-colors">
                <GenerativeText text="Custom Software" mode="decode" progress={progress?.zone02SoftwareProgress} />
              </span>
              <span className="font-sans text-xs text-[#6C6B66]">
                <GenerativeText text="Business systems & internal tools" mode="plotter" progress={progress?.zone02SoftwareProgress} />
              </span>
              <span className="font-mono text-[10px] text-[#8C8A84] tracking-wide">
                Built around your workflow
              </span>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border border-[#D9D4CC] flex items-center justify-center group-hover/entry:border-[#A87445] group-hover/entry:bg-[#A87445] group-hover/entry:text-white transition-all shrink-0">
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

/**
 * 03 APPROACH ZONE (Middle-Right)
 * Answers: How does Oxlate build?
 */
export function ApproachZone({ isActive, isMuted, onHover, isInteractive = true, className = "" }: ZoneProps) {
  const progress = useHeroProgressContext();

  const steps = [
    { num: "01", name: "Understand", desc: "Right questions." },
    { num: "02", name: "Structure", desc: "Clear direction." },
    { num: "03", name: "Design", desc: "Thoughtful solutions." },
    { num: "04", name: "Build", desc: "High quality execution." },
    { num: "05", name: "Refine", desc: "Long-term value." },
  ];

  return (
    <motion.div
      style={progress ? { opacity: progress.zone03Progress } : undefined}
      onMouseEnter={() => isInteractive && onHover?.(true)}
      onMouseLeave={() => isInteractive && onHover?.(false)}
      className={`group/zone relative flex flex-col max-w-[280px] xl:max-w-[310px] select-none transition-all duration-200 ${
        isInteractive ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isMuted
          ? "opacity-65 scale-[0.995]"
          : isActive
          ? "opacity-100 scale-[1.015] z-30"
          : "opacity-100 scale-100"
      } ${className}`}
    >
      {/* Crease-Free Feathered Canvas Clearing Plate */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_16px_8px_#F5F2EC] pointer-events-none transition-all duration-200 -z-10 ${
          isActive ? "opacity-100 shadow-[0_0_20px_10px_#F5F2EC]" : "opacity-90"
        }`}
      />

      {/* Zone Header - Links to #approach */}
      <Link
        href="/#approach"
        tabIndex={isInteractive ? 0 : -1}
        className={`flex items-baseline gap-3 mb-2 group/title ${
          isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
      >
        <ConstructingNumber
          value="03"
          className={`text-xl font-bold tracking-wider transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#111111] group-hover/title:text-[#A87445]"
          }`}
        />
        <GenerativeText
          text="APPROACH"
          mode="decode"
          progress={progress?.zone03Progress}
          className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#6C6B66] group-hover/title:text-[#111111]"
          }`}
        />
        <ArrowRight className="w-3 h-3 text-[#A87445] opacity-0 group-hover/title:opacity-100 transition-opacity ml-auto" />
      </Link>

      {/* Structural Hairline Divider & Connected Anchor Node */}
      <div className="relative w-full flex items-center mb-4">
        <div
          data-anchor="zone-03"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center pointer-events-none z-10"
        >
          <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? "bg-[#A87445]" : "bg-[#111111]"}`} />
        </div>
        <GenerativeLine
          orientation="horizontal"
          origin="left"
          progress={progress?.zone03Progress}
          thickness={1}
          color={isActive ? "#A87445" : "#111111"}
          className="w-16"
        />
      </div>

      {/* Vertical Process Rail - Whole block links to #approach */}
      <Link href="/#approach" className="relative flex flex-col gap-2.5 pl-6 group/rail">
        <GenerativeLine
          orientation="vertical"
          origin="top"
          progress={progress?.zone03RailProgress}
          thickness={1}
          color="#D9D4CC"
          className="absolute left-[7px] top-2 bottom-2"
        />

        {steps.map((step, idx) => (
          <div key={step.num} className="group/step relative flex items-baseline justify-between">
            <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center group-hover/step:border-[#A87445] transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-[#111111] group-hover/step:bg-[#A87445] transition-colors" />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-[#8C8A84] tracking-wider">
                {step.num}
              </span>
              <span className="font-sans text-xs font-bold text-[#111111] group-hover/step:text-[#A87445] transition-colors">
                <GenerativeText
                  text={step.name}
                  mode="decode"
                  progress={progress?.zone03Progress}
                  delayMs={idx * 60}
                />
              </span>
            </div>

            <span className="font-sans text-[11px] text-[#6C6B66] text-right">
              {step.desc}
            </span>
          </div>
        ))}
      </Link>
    </motion.div>
  );
}

/**
 * 04 WORK ZONE (Lower-Left)
 * Answers: What has Oxlate done?
 * Connected dynamically to data/projects.json!
 * Every project is an interactive link navigating directly to /work/[slug].
 */
export function WorkZone({ isActive, isMuted, onHover, isInteractive = true, className = "" }: ZoneProps) {
  const progress = useHeroProgressContext();
  const heroProjects = getHeroProjects();

  return (
    <motion.div
      style={progress ? { opacity: progress.zone04Progress } : undefined}
      onMouseEnter={() => isInteractive && onHover?.(true)}
      onMouseLeave={() => isInteractive && onHover?.(false)}
      className={`group/zone relative flex flex-col max-w-[380px] xl:max-w-[420px] select-none transition-all duration-200 ${
        isInteractive ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isMuted
          ? "opacity-65 scale-[0.995]"
          : isActive
          ? "opacity-100 scale-[1.015] z-30"
          : "opacity-100 scale-100"
      } ${className}`}
    >
      {/* Crease-Free Feathered Canvas Clearing Plate */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_16px_8px_#F5F2EC] pointer-events-none transition-all duration-200 -z-10 ${
          isActive ? "opacity-100 shadow-[0_0_20px_10px_#F5F2EC]" : "opacity-90"
        }`}
      />

      {/* Zone Header */}
      <div className="flex items-baseline gap-3 mb-2">
        <ConstructingNumber
          value="04"
          className={`text-xl font-bold tracking-wider transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#111111]"
          }`}
        />
        <GenerativeText
          text="WORK"
          mode="decode"
          progress={progress?.zone04Progress}
          className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#6C6B66]"
          }`}
        />
      </div>

      {/* Structural Hairline Divider & Connected Anchor Node */}
      <div className="relative w-full flex items-center mb-3">
        <GenerativeLine
          orientation="horizontal"
          origin="left"
          progress={progress?.zone04Progress}
          thickness={1}
          color={isActive ? "#A87445" : "#111111"}
          className="w-16"
        />
        <div
          data-anchor="zone-04"
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center pointer-events-none z-10"
        >
          <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? "bg-[#A87445]" : "bg-[#111111]"}`} />
        </div>
      </div>

      {/* Honest Credibility Headline */}
      <h3 className="font-sans text-lg font-bold text-[#111111] tracking-tight mb-1">
        <GenerativeText
          text="Independent Projects"
          mode="plotter"
          progress={progress?.zone04Progress}
        />
      </h3>
      <p className="font-sans text-xs text-[#6C6B66] leading-relaxed mb-4">
        <GenerativeText
          text="A selection of products and systems built by the founding developer."
          mode="plotter"
          progress={progress?.zone04Progress}
        />
      </p>

      {/* 3 Side-by-Side Visual Project Frames - Direct Links to /work/[slug] */}
      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
        {heroProjects.map((project: ProjectItem, idx: number) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            tabIndex={isInteractive ? 0 : -1}
            className={`group/proj flex flex-col transition-transform duration-150 ${
              isInteractive ? "cursor-pointer hover:-translate-y-0.5" : "pointer-events-none"
            }`}
            title={`View ${project.title}`}
          >
            <div className="relative aspect-[4/3] w-full bg-[#161615] rounded-[2px] overflow-hidden border border-[#D9D4CC]/80 mb-1.5 transition-colors group-hover/proj:border-[#A87445]">
              <svg className="w-full h-full" viewBox="0 0 80 60" fill="none">
                <rect width="80" height="60" fill="#181817" />
                {idx === 0 && (
                  <>
                    <polygon
                      points="40,10 70,30 40,50 10,30"
                      stroke="#FAF8F5"
                      strokeWidth="0.75"
                      strokeOpacity="0.4"
                    />
                    <polygon
                      points="40,18 62,30 40,42 18,30"
                      stroke="#A87445"
                      strokeWidth="0.75"
                      strokeOpacity="0.8"
                    />
                    <line x1="40" y1="10" x2="40" y2="50" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.3" />
                  </>
                )}
                {idx === 1 && (
                  <>
                    <path
                      d="M 0 50 Q 20 20 40 40 T 80 20"
                      stroke="#FAF8F5"
                      strokeWidth="1"
                      strokeOpacity="0.5"
                      fill="none"
                    />
                    <path
                      d="M 0 45 Q 25 10 50 35 T 80 15"
                      stroke="#A87445"
                      strokeWidth="1"
                      strokeOpacity="0.8"
                      fill="none"
                    />
                    <line x1="0" y1="55" x2="80" y2="55" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.2" />
                  </>
                )}
                {idx === 2 && (
                  <>
                    {[0, 15, 30, 45, 60, 75].map((x) => (
                      <line key={x} x1={x} y1="60" x2="40" y2="0" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.3" />
                    ))}
                    <line
                      x1="10"
                      y1="45"
                      x2="70"
                      y2="45"
                      stroke="#A87445"
                      strokeWidth="0.75"
                      strokeOpacity="0.7"
                    />
                  </>
                )}
              </svg>
            </div>
            <span className="font-mono text-[9px] text-[#8C8A84] tracking-wider">
              {project.index}
            </span>
            <span className="font-sans text-[11px] font-bold text-[#111111] leading-tight line-clamp-1 group-hover/proj:text-[#A87445] transition-colors">
              {project.title}
            </span>
            <span className="font-mono text-[8px] uppercase tracking-wider text-[#A87445] truncate">
              {project.badge}
            </span>
          </Link>
        ))}
      </div>

      {/* Action Trigger - Links directly to /work Catalog */}
      <Link
        href="/work"
        tabIndex={isInteractive ? 0 : -1}
        className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold group/btn transition-colors hover:text-[#A87445] ${
          isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
      >
        <GenerativeText text="View all work" mode="decode" progress={progress?.zone04Progress} delayMs={180} />
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
      </Link>
    </motion.div>
  );
}

/**
 * 05 WHY OXLATE / PRINCIPLES ZONE (Bottom-Right)
 * Answers: Why Oxlate?
 */
export function PrinciplesZone({ isActive, isMuted, onHover, isInteractive = true, className = "" }: ZoneProps) {
  const progress = useHeroProgressContext();

  return (
    <motion.div
      style={progress ? { opacity: progress.zone05Progress } : undefined}
      onMouseEnter={() => isInteractive && onHover?.(true)}
      onMouseLeave={() => isInteractive && onHover?.(false)}
      className={`group/zone relative flex flex-col max-w-[320px] xl:max-w-[350px] select-none transition-all duration-200 ${
        isInteractive ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isMuted
          ? "opacity-65 scale-[0.995]"
          : isActive
          ? "opacity-100 scale-[1.015] z-30"
          : "opacity-100 scale-100"
      } ${className}`}
    >
      {/* Crease-Free Feathered Canvas Clearing Plate */}
      <div
        className={`absolute -inset-2 sm:-inset-2.5 rounded-sm bg-[#F5F2EC]/92 shadow-[0_0_16px_8px_#F5F2EC] pointer-events-none transition-all duration-200 -z-10 ${
          isActive ? "opacity-100 shadow-[0_0_20px_10px_#F5F2EC]" : "opacity-90"
        }`}
      />

      {/* Zone Header - Links to #approach */}
      <Link
        href="/#approach"
        tabIndex={isInteractive ? 0 : -1}
        className={`flex items-baseline gap-3 mb-2 group/title ${
          isInteractive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
      >
        <ConstructingNumber
          value="05"
          className={`text-xl font-bold tracking-wider transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#111111] group-hover/title:text-[#A87445]"
          }`}
        />
        <GenerativeText
          text="WHY OXLATE"
          mode="decode"
          progress={progress?.zone05Progress}
          className={`font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors ${
            isActive ? "text-[#A87445]" : "text-[#6C6B66] group-hover/title:text-[#111111]"
          }`}
        />
        <ArrowRight className="w-3 h-3 text-[#A87445] opacity-0 group-hover/title:opacity-100 transition-opacity ml-auto" />
      </Link>

      {/* Structural Hairline Divider & Connected Anchor Node */}
      <div className="relative w-full flex items-center mb-4">
        <div
          data-anchor="zone-05"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#D9D4CC] bg-[#F5F2EC] flex items-center justify-center pointer-events-none z-10"
        >
          <div className={`w-1 h-1 rounded-full transition-colors ${isActive ? "bg-[#A87445]" : "bg-[#111111]"}`} />
        </div>
        <GenerativeLine
          orientation="horizontal"
          origin="left"
          progress={progress?.zone05Progress}
          thickness={1}
          color={isActive ? "#A87445" : "#111111"}
          className="w-16"
        />
      </div>

      {/* 2x2 Principles Grid - Links to #approach */}
      <Link href="/#approach" className="grid grid-cols-2 gap-x-4 gap-y-3.5 group/grid">
        {/* Principle 01: Focused Scope */}
        <div className="flex items-start gap-2.5 group/p">
          <svg className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 group-hover/p:text-[#A87445] transition-colors" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-bold text-[#111111] group-hover/p:text-[#A87445] transition-colors">
              Focused Scope
            </span>
            <span className="font-sans text-[10px] text-[#6C6B66]">
              Intentionally narrow.
            </span>
          </div>
        </div>

        {/* Principle 02: Direct Engineering */}
        <div className="flex items-start gap-2.5 group/p">
          <span className="font-mono text-sm font-bold text-[#111111] shrink-0 leading-none group-hover/p:text-[#A87445] transition-colors">
            //
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-bold text-[#111111] group-hover/p:text-[#A87445] transition-colors">
              Direct Engineering
            </span>
            <span className="font-sans text-[10px] text-[#6C6B66]">
              Work with builders.
            </span>
          </div>
        </div>

        {/* Principle 03: Considered Design */}
        <div className="flex items-start gap-2.5 group/p">
          <svg className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 group-hover/p:text-[#A87445] transition-colors" viewBox="0 0 16 16" fill="none">
            <polygon points="8,2 14,14 2,14" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-bold text-[#111111] group-hover/p:text-[#A87445] transition-colors">
              Considered Design
            </span>
            <span className="font-sans text-[10px] text-[#6C6B66]">
              Clean, lasting UI.
            </span>
          </div>
        </div>

        {/* Principle 04: Long-Term Thinking */}
        <div className="flex items-start gap-2.5 group/p">
          <svg className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 group-hover/p:text-[#A87445] transition-colors" viewBox="0 0 16 16" fill="none">
            <rect x="2.5" y="2.5" width="11" height="11" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-bold text-[#111111] group-hover/p:text-[#A87445] transition-colors">
              Long-Term Thinking
            </span>
            <span className="font-sans text-[10px] text-[#6C6B66]">
              Built for ownership.
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
