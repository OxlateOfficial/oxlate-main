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
                 pl-10 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-28 pr-6 sm:pr-10 py-8 md:py-24 will-change-[transform,opacity]"
    >
      {/* Chapter Tag (01 // INTRO) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mb-4 sm:mb-6 flex items-center gap-3"
      >
        <span className="inline-block w-2 h-2 bg-[#A87445]" aria-hidden="true" />
        <span className="font-orbitron text-xs sm:text-sm font-bold tracking-widest text-[#A87445]">
          01
        </span>
        <span className="text-[#D9D4CC]">//</span>
        <span className="font-mono text-xs sm:text-sm tracking-widest text-[#6C6B66] uppercase">
          INTRO
        </span>
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

      {/* Primary Bronze Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
        className="w-full sm:w-auto"
      >
        <Button
          asChild
          className="w-full sm:w-auto bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center justify-center gap-3 border-none shadow-sm"
        >
          <Link href={heroData.ctaHref}>
            <span>{heroData.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
