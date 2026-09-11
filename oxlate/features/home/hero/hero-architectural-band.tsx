"use client";

import React from "react";
import { motion } from "framer-motion";
import { useHeroProgressContext, useIsDesktop } from "./use-hero-progress";

/**
 * Architectural Service Band:
 * Continuous physical bridge directly matching reference/hero-state-01.jpg & hero-state-03.jpg:
 * - Stage 1: Angled (-20°) diagonal drafting plane running behind the Giant X, exiting at 53vh on the right.
 * - Stage 2: Rotates and levels out to horizontal datum beam (0°, 50vh) crossing the centered X.
 * - Stage 3: Smoothly dissolves as the SVG CAD vectors lock into the Command Center nodes.
 *
 * Micro-Animations:
 * - Continuous traveling bronze laser scanner pip (LOC_SCAN tracker)
 * - Calibrated CAD millimeter ruler ticks with station markers
 * - Floating drafting guide rails with coordinate metadata
 * - Sweeping frosted acetate light sheen
 */
export function HeroArchitecturalBand() {
  const progress = useHeroProgressContext();
  const isDesktop = useIsDesktop();

  if (!isDesktop || !progress) {
    return null;
  }

  return (
    <motion.div
      style={{
        rotate: progress.bandRotation,
        top: progress.bandY,
        opacity: progress.bandOpacity,
      }}
      className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-16 lg:h-20
                 z-10 layer-l1.5 pointer-events-none items-center select-none origin-center will-change-transform"
      aria-hidden="true"
    >
      {/* Top Floating Guide Rail & CAD Reference (directly inspired by reference/hero-state-01.jpg) */}
      <div className="absolute -top-4 inset-x-0 flex items-center justify-between px-20 pointer-events-none opacity-55">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#A87445] bg-[#F5F2EC]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6C6B66]">
            SERVICES // DISCIPLINE TRACK
          </span>
          <div className="h-[1px] w-20 bg-[#111111]/25" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-24 bg-[#A87445]/40" />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#A87445]">
            CAD.AXIS // -20.0° DRAFT
          </span>
          <div className="w-1.5 h-1.5 rotate-45 border border-[#111111]/40 bg-[#F5F2EC]" />
        </div>
      </div>

      {/* Main Frosted Architectural Band Body */}
      <div className="relative w-full h-full bg-[#EAE6DE]/80 backdrop-blur-sm border-y border-[#D9D4CC]/90 flex items-center overflow-hidden shadow-sm">
        {/* CAD Center Datum Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#A87445]/35" />

        {/* Dynamic Sweeping Frosted Sheen */}
        <motion.div
          className="absolute inset-y-0 w-64 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10"
          animate={{
            x: ["-100vw", "180vw"],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        />

        {/* Calibrated CAD Measurement Ticks along top edge */}
        <div className="absolute inset-x-0 top-0 h-3 flex justify-between px-8 pointer-events-none opacity-40">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-[1px] ${
                  i % 8 === 0
                    ? "h-2.5 bg-[#A87445]"
                    : i % 4 === 0
                    ? "h-2 bg-[#111111]"
                    : "h-1 bg-[#111111]/60"
                }`}
              />
              {i % 8 === 0 && (
                <span className="font-mono text-[7px] text-[#6C6B66] -mt-0.5 select-none scale-75 origin-top">
                  {`0${i * 15}`}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Calibrated CAD Measurement Ticks along bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-3 flex justify-between px-8 pointer-events-none opacity-40 items-end">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-end">
              {i % 8 === 0 && (
                <span className="font-mono text-[7px] text-[#6C6B66] -mb-0.5 select-none scale-75 origin-bottom">
                  {`+${i * 25}`}
                </span>
              )}
              <div
                className={`w-[1px] ${
                  i % 8 === 0
                    ? "h-2.5 bg-[#A87445]"
                    : i % 4 === 0
                    ? "h-2 bg-[#111111]"
                    : "h-1 bg-[#111111]/60"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Repeating Architectural Ticker */}
        <div className="flex items-center gap-12 whitespace-nowrap animate-[marquee_36s_linear_infinite] px-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-orbitron text-xs lg:text-sm font-bold tracking-[0.3em] text-[#111111]/85">
                WEB DEVELOPMENT
              </span>
              <span className="text-[#A87445] font-bold text-xs">✦</span>
              <span className="font-orbitron text-xs lg:text-sm font-bold tracking-[0.3em] text-[#111111]/85">
                MOBILE APPLICATIONS
              </span>
              <span className="text-[#A87445] font-bold text-xs">✦</span>
              <span className="font-orbitron text-xs lg:text-sm font-bold tracking-[0.3em] text-[#111111]/85">
                CUSTOM SOFTWARE
              </span>
              <span className="text-[#A87445] font-bold text-xs">✦</span>
              <span className="font-orbitron text-xs lg:text-sm font-bold tracking-[0.3em] text-[#6C6B66]">
                ARCHITECTURE DISCIPLINE
              </span>
              <span className="text-[#A87445]/60 font-mono text-xs">//</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
