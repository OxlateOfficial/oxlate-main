"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroData } from "./hero.data";
import { useHeroProgressContext, useIsDesktop } from "./use-hero-progress";

export function HeroContent() {
  const progress = useHeroProgressContext();
  const isDesktop = useIsDesktop();

  return (
    <motion.div
      style={
        isDesktop && progress
          ? {
              opacity: progress.introContentOpacity,
              x: progress.introContentX,
              maskImage: progress.introContentMaskImage,
              WebkitMaskImage: progress.introContentMaskImage,
              pointerEvents: progress.introPointerEvents,
            }
          : undefined
      }
      className="relative layer-l5 z-40 w-full md:max-w-[52%] lg:max-w-[48%] flex flex-col justify-center
                 px-6 sm:px-10 md:pl-20 lg:pl-24 xl:pl-28 md:pr-6 py-8 md:py-24 will-change-[transform,opacity]"
    >
      {/* Chapter Tag (01 // INTRO) + Mobile Telemetry Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mb-4 sm:mb-6 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#A87445]" aria-hidden="true" />
          <span className="font-orbitron text-xs sm:text-sm font-bold tracking-widest text-[#A87445]">
            01
          </span>
          <span className="text-[#D9D4CC]">//</span>
          <span className="font-mono text-xs sm:text-sm tracking-widest text-[#6C6B66] uppercase">
            INTRO
          </span>
        </div>
        <div className="md:hidden font-mono text-[9px] uppercase tracking-wider text-[#8C8A84] flex items-center gap-1.5 border border-[#D9D4CC] bg-[#FAF8F5] px-2.5 py-1 rounded-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A87445] animate-pulse" />
          <span>CHANDIGARH // 2025</span>
        </div>
      </motion.div>

      {/* Semantic H1 Headline with line-by-line masked emergence */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12] mb-5 sm:mb-6">
        <span className="block overflow-hidden py-0.5">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="block"
          >
            Digital Architecture
          </motion.span>
        </span>
        <span className="block overflow-hidden py-0.5">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="block"
          >
            for the Modern Web.
          </motion.span>
        </span>
      </h1>

      {/* Positioning Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
        className="text-base sm:text-lg lg:text-xl text-[#292929] leading-relaxed mb-8 max-w-xl font-normal"
      >
        {heroData.subtitle}
      </motion.p>

      {/* Primary Bronze Contact CTA & Secondary Explore Work */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
        className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
      >
        <Button
          asChild
          className="w-full sm:w-auto bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center justify-center gap-3 border-none shadow-sm"
        >
          <Link href={heroData.ctaHref}>
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto border border-[#D9D4CC] hover:border-[#111111] bg-transparent text-[#111111] hover:bg-[#FAF8F5] font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center justify-center gap-2 shadow-none"
        >
          <Link href="/work">
            <span>Explore Work [03]</span>
          </Link>
        </Button>
      </motion.div>

      {/* Mobile Architectural Discipline Cards (Rich Density on Mobile < 768px) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.54 }}
        className="md:hidden mt-8 pt-6 border-t border-[#D9D4CC]/70 w-full space-y-3"
      >
        <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-widest text-[#8C8A84]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#A87445] inline-block" />
            DISCIPLINES // STACK
          </span>
          <span className="text-[#A87445]">DIRECT BUILDER</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Pillar 01: Web */}
          <Link
            href="/#capabilities"
            className="group p-2.5 bg-[#FAF8F5] border border-[#D9D4CC] rounded-[2px] transition-colors hover:border-[#A87445] flex flex-col justify-between"
          >
            <span className="font-mono text-[8.5px] font-bold text-[#A87445] tracking-wider">
              01 // WEB
            </span>
            <span className="font-sans text-[11px] font-bold text-[#111111] mt-1 leading-tight">
              Web Apps
            </span>
            <span className="font-mono text-[8px] text-[#6C6B66] mt-1">
              Next.js / TS
            </span>
          </Link>

          {/* Pillar 02: Mobile */}
          <Link
            href="/#capabilities"
            className="group p-2.5 bg-[#FAF8F5] border border-[#D9D4CC] rounded-[2px] transition-colors hover:border-[#A87445] flex flex-col justify-between"
          >
            <span className="font-mono text-[8.5px] font-bold text-[#A87445] tracking-wider">
              02 // MOBILE
            </span>
            <span className="font-sans text-[11px] font-bold text-[#111111] mt-1 leading-tight">
              Native Apps
            </span>
            <span className="font-mono text-[8px] text-[#6C6B66] mt-1">
              React Native
            </span>
          </Link>

          {/* Pillar 03: Custom */}
          <Link
            href="/#capabilities"
            className="group p-2.5 bg-[#FAF8F5] border border-[#D9D4CC] rounded-[2px] transition-colors hover:border-[#A87445] flex flex-col justify-between"
          >
            <span className="font-mono text-[8.5px] font-bold text-[#A87445] tracking-wider">
              03 // SYSTEMS
            </span>
            <span className="font-sans text-[11px] font-bold text-[#111111] mt-1 leading-tight">
              Custom Tools
            </span>
            <span className="font-mono text-[8px] text-[#6C6B66] mt-1">
              PostgreSQL
            </span>
          </Link>
        </div>

        {/* Technical Baseline Indicator */}
        <div className="flex items-center justify-between font-mono text-[9px] text-[#6C6B66] pt-1.5 border-t border-[#D9D4CC]/40">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A87445]" />
            FOUNDER-LED ENGINEERING
          </span>
          <span>NO BLOAT</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
