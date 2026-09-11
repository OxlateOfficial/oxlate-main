"use client";

import React from "react";
import { SliceRevealedFrame } from "@/components/ui/slice-revealed-frame";
import { useHeroProgressContext } from "./use-hero-progress";

/**
 * Architectural Photo Frames:
 * High-fidelity monochrome brutalist architectural graphics matching
 * reference/ChatGPT Image Sep 11, 2026, 12_09_50 PM.png:
 * 1. Left Frame: Brutalist curved concrete facade (under 01 Identity)
 * 2. Right Upper Frame: Sharp brutalist cantilever angle (next to 02 Capabilities)
 * 3. Right Middle Frame: Curved dark glass facade with mullions (next to 03 Approach)
 * Generates portion-by-portion across 6 horizontal slices on scroll.
 */

export function LeftArchitecturalFrame({ className = "" }: { className?: string }) {
  const progress = useHeroProgressContext();

  return (
    <div
      className={`relative w-24 h-24 xl:w-28 xl:h-28 overflow-hidden rounded-[2px] border border-[#D9D4CC]/90 bg-[#161615] shadow-sm select-none ${className}`}
      aria-hidden="true"
    >
      <SliceRevealedFrame progress={progress?.zone01Progress} slicesCount={6} className="w-full h-full">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="120" fill="#181817" />
          {/* Curving brutalist concrete sweeping wall */}
          <path
            d="M 0 120 C 30 90, 45 40, 50 0 L 80 0 C 75 45, 60 95, 25 120 Z"
            fill="#353431"
          />
          <path
            d="M 25 120 C 60 95, 75 45, 80 0 L 120 0 L 120 120 Z"
            fill="#242321"
          />
          <path
            d="M 0 65 Q 40 55, 60 0 L 0 0 Z"
            fill="#4A4844"
          />
          <path
            d="M 0 120 Q 30 110, 50 85 L 0 85 Z"
            fill="#1C1C1B"
          />
          {/* Architectural grid hairpins */}
          <line x1="0" y1="40" x2="120" y2="40" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="0" y1="80" x2="120" y2="80" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="40" y1="0" x2="40" y2="120" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="80" y1="0" x2="80" y2="120" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" />
        </svg>
      </SliceRevealedFrame>

      {/* Corner crosshairs */}
      <span className="absolute top-1 left-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
      <span className="absolute bottom-1 right-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
    </div>
  );
}

export function RightUpperArchitecturalFrame({ className = "" }: { className?: string }) {
  const progress = useHeroProgressContext();

  return (
    <div
      className={`relative w-24 h-28 xl:w-28 xl:h-32 overflow-hidden rounded-[2px] border border-[#D9D4CC]/90 bg-[#161615] shadow-sm select-none ${className}`}
      aria-hidden="true"
    >
      <SliceRevealedFrame progress={progress?.zone02Progress} slicesCount={6} className="w-full h-full">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 112 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="112" height="128" fill="#161615" />
          {/* Dynamic cantilever concrete diagonal geometry */}
          <path d="M 0 0 L 112 85 L 55 128 L 0 128 Z" fill="#2C2A28" />
          <path d="M 0 0 L 80 0 L 112 85 L 0 60 Z" fill="#423F3B" />
          <path d="M 25 0 L 70 0 L 105 80 L 45 50 Z" fill="#58544E" />
          <line x1="0" y1="60" x2="112" y2="85" stroke="#FAF8F5" strokeWidth="0.75" strokeOpacity="0.5" />
          <line x1="55" y1="0" x2="55" y2="128" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
      </SliceRevealedFrame>

      {/* Corner crosshairs */}
      <span className="absolute top-1 left-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
      <span className="absolute bottom-1 right-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
    </div>
  );
}

export function RightLowerArchitecturalFrame({ className = "" }: { className?: string }) {
  const progress = useHeroProgressContext();

  return (
    <div
      className={`relative w-24 h-24 xl:w-28 xl:h-28 overflow-hidden rounded-[2px] border border-[#D9D4CC]/90 bg-[#161615] shadow-sm select-none ${className}`}
      aria-hidden="true"
    >
      <SliceRevealedFrame progress={progress?.zone03Progress} slicesCount={6} className="w-full h-full">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="112" height="112" fill="#181819" />
          <path d="M 0 112 Q 60 35 112 0 L 112 112 Z" fill="#26272B" />
          <path d="M 20 112 Q 70 45 112 15 L 112 112 Z" fill="#3B3D44" />
          <path d="M 45 112 Q 85 60 112 35 L 112 112 Z" fill="#52555E" />
          {/* Mullion lines */}
          {[0, 15, 30, 45, 60, 75, 90, 105].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="112"
              y2={y + 7}
              stroke="#FAF8F5"
              strokeWidth="0.5"
              strokeOpacity="0.25"
            />
          ))}
        </svg>
      </SliceRevealedFrame>

      {/* Corner crosshairs */}
      <span className="absolute top-1 left-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
      <span className="absolute bottom-1 right-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
    </div>
  );
}

/**
 * Bottom-Left Corner Architectural Monolith (from reference/ChatGPT Image Sep 11, 2026, 12_09_50 PM.png):
 * Brutalist concrete angle with diagonal hatching rays, CAD coordinates, and slice transition.
 */
export function BottomLeftArchitecturalCorner({ className = "" }: { className?: string }) {
  const progress = useHeroProgressContext();

  return (
    <div
      className={`relative w-28 h-20 xl:w-36 xl:h-24 overflow-hidden rounded-[2px] border border-[#D9D4CC]/90 bg-[#161615] shadow-sm select-none ${className}`}
      aria-hidden="true"
    >
      <SliceRevealedFrame progress={progress?.zone04Progress} slicesCount={6} className="w-full h-full">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="160" height="100" fill="#181817" />
          {/* Sweeping diagonal brutalist concrete geometry from reference image */}
          <path d="M 0 100 L 40 0 L 160 0 L 160 100 Z" fill="#242321" />
          <path d="M 0 100 L 80 0 L 160 0 L 160 100 Z" fill="#353431" />
          <path d="M 0 100 L 120 0 L 160 0 L 160 100 Z" fill="#46443F" />
          <path d="M 0 100 L 160 40 L 160 100 Z" fill="#1D1C1A" />

          {/* Architectural hatching rays */}
          {[0, 20, 40, 60, 80, 100, 120, 140].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x + 35}
              y2="100"
              stroke="#FAF8F5"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          ))}

          {/* Hairline coordinate grid */}
          <line x1="0" y1="50" x2="160" y2="50" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
          <line x1="80" y1="0" x2="80" y2="100" stroke="#FAF8F5" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
        </svg>
      </SliceRevealedFrame>

      {/* Micro-Spec CAD Metadata */}
      <div className="absolute top-1 left-2 flex items-center gap-1 text-[7px] font-mono tracking-widest text-[#FAF8F5]/60 z-10">
        <span>ARCH.STUDY</span>
        <span className="text-[#A87445]">//</span>
        <span>01</span>
      </div>
      <span className="absolute bottom-1 right-1 text-[8px] font-mono text-[#FAF8F5]/60 z-10">+</span>
    </div>
  );
}
