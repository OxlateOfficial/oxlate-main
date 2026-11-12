"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/features/home/nav";
import { DeviceMockup } from "@/components/ui/device-mockup";
import { heroData } from "./hero.data";

export function HeroSection() {
  return (
    <div className="relative w-full bg-[#F5F2EC]">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Hero Section Container with Normal Natural Flow */}
      <section
        id="intro"
        className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-visible"
        aria-label="Oxlate Hero Introduction"
      >
        {/* Subtle Background Radial Glow */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#A87445]/6 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
          {/* Chapter / Badge Pill */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#D9D4CC] bg-[#FAF8F5] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A87445] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold">
              FOUNDER-LED SOFTWARE STUDIO
            </span>
            <span className="text-[#D9D4CC]">•</span>
            <span className="font-mono text-xs text-[#A87445] font-medium">
              NO MIDDLEMEN
            </span>
          </div>

          {/* Bold H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.14] max-w-4xl mb-6">
            We build fast, reliable websites and mobile apps for growing businesses.
          </h1>

          {/* Clear Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#292929] leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
            {heroData.subtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-12 sm:mb-16">
            <Button
              asChild
              className="w-full sm:w-auto bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center justify-center gap-3 border-none shadow-sm"
            >
              <Link href="#contact">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border border-[#D9D4CC] hover:border-[#111111] bg-transparent text-[#111111] hover:bg-[#FAF8F5] font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center justify-center gap-2 shadow-none"
            >
              <Link href="/work">
                <span>Explore Case Studies</span>
              </Link>
            </Button>
          </div>

          {/* PURE OBJECT SHOWCASE CENTERPIECE: Real Laptop & Phone Mockups */}
          <div className="w-full">
            <DeviceMockup />
          </div>
        </div>
      </section>
    </div>
  );
}
