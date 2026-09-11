"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHeroProgressContext, useIsDesktop } from "./use-hero-progress";

interface HeroXProps {
  centerShift?: { x: number; y: number };
}

/**
 * The Central Oxlate Identity Coordinate Anchor:
 * - Stage 1: Dominant oversized identity mark commanding center/right (scale 1.0, x: 28vw).
 * - Stage 2: Translates to center (x: 0vw) and scales down to ~32% size.
 * - Stage 3: Anchors the Command Center coordinate system (25-35vw) with wordmark resolving below.
 */
export function HeroX({ centerShift = { x: 0, y: 0 } }: HeroXProps) {
  const progress = useHeroProgressContext();
  const isDesktop = useIsDesktop();

  return (
    <motion.div
      style={
        isDesktop && progress
          ? {
              x: progress.xPosition,
              y: progress.xDepartureY,
              scale: progress.xScale,
            }
          : undefined
      }
      className="layer-l2 pointer-events-none select-none will-change-transform
                 /* Mobile (< 768px): atmospheric CAD watermark anchored in hero */
                 absolute right-[-12%] top-20 w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] opacity-[0.13] block z-10
                 /* Desktop (>= 768px): central coordinate anchor */
                 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                 md:w-[88vw] md:max-w-[1240px] md:h-[88vw] md:max-h-[1240px] md:opacity-100 md:my-0 origin-center md:z-45"
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Authentic Oxlate Giant X Vector with initial load micro-settle */}
        <motion.div
          initial={{ scale: 1.025, opacity: 0 }}
          animate={{
            scale: 1.0,
            opacity: 1,
            x: centerShift.x,
            y: centerShift.y,
          }}
          transition={{
            scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { type: "spring", damping: 20, stiffness: 220 },
            y: { type: "spring", damping: 20, stiffness: 220 },
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/Oxlate_logoX_blk.svg"
            alt="Oxlate X Identity Mark"
            fill
            priority
            className="w-full h-full object-contain opacity-[0.98]"
          />

          {/* Technical Micro-Coordinate Annotations */}
          <motion.div
            style={isDesktop && progress ? { opacity: progress.xAnnotationsOpacity } : undefined}
            className="hidden md:flex absolute top-[14%] right-[18%] flex-col items-end font-mono text-[9px] text-[#6C6B66] uppercase tracking-widest pointer-events-none select-none"
          >
            <span className="font-orbitron font-semibold text-[#A87445]">SCALE 1:1.618</span>
            <span>GRID: CAD-01</span>
          </motion.div>

          <motion.div
            style={isDesktop && progress ? { opacity: progress.xAnnotationsOpacity } : undefined}
            className="hidden md:flex absolute bottom-[18%] left-[16%] flex-col items-start font-mono text-[9px] text-[#6C6B66] uppercase tracking-widest pointer-events-none select-none"
          >
            <span className="font-orbitron font-semibold text-[#111111]">OXLATE // SPEC</span>
            <span>SYSTEM 01 VERIFIED</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
