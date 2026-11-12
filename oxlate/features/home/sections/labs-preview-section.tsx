import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Cpu, Database } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";

export function LabsPreviewSection() {
  return (
    <section
      id="labs"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="Oxlate Studio Labs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <SectionTag index="LABS" label="PROPRIETARY PRODUCTS" showPip className="mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-4">
                We build client products. <br className="hidden sm:inline" />
                And we ship our own too.
              </h2>
              <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
                Oxlate is both a client engineering studio and an active product incubator. When you hire us, you work with builders who experience the real challenges of launching and scaling production software.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="border border-[#D9D4CC] hover:border-[#111111] bg-transparent text-[#111111] font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-[2px] transition-all hover:bg-[#FAF8F5] inline-flex items-center gap-2 self-start lg:self-auto"
            >
              <Link href="#contact">
                <span>Partner on a Product</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A87445]" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Labs Feature Frame */}
        <div className="relative border border-[#D9D4CC] bg-[#161615] text-[#FAF8F5] p-8 sm:p-12 rounded-[2px] overflow-hidden shadow-sm">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="labs-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FAF8F5" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#labs-grid)" />
            </svg>
          </div>

          {/* Corner Alignment Crosshairs */}
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#6C6B66]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#6C6B66]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#6C6B66]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Description (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A87445]">
                <span className="w-2 h-2 rounded-full bg-[#A87445] animate-pulse" />
                <span>IN THE LABS // ACTIVE INCUBATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Proprietary Workflow &amp; Developer Tools
              </h3>

              <p className="text-sm sm:text-base text-[#D9D4CC] leading-relaxed max-w-xl">
                We are currently building internal systems, automated developer telemetry, and business workflow tools designed to eliminate operational friction. Every lesson learned from our in-house products is directly applied to our client software.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                <span className="font-mono text-[11px] px-3 py-1 bg-[#242422] border border-[#3A3A36] text-[#FAF8F5] rounded-[2px]">
                  TypeScript
                </span>
                <span className="font-mono text-[11px] px-3 py-1 bg-[#242422] border border-[#3A3A36] text-[#FAF8F5] rounded-[2px]">
                  Next.js
                </span>
                <span className="font-mono text-[11px] px-3 py-1 bg-[#242422] border border-[#3A3A36] text-[#FAF8F5] rounded-[2px]">
                  PostgreSQL
                </span>
                <span className="font-mono text-[11px] px-3 py-1 bg-[#242422] border border-[#3A3A36] text-[#FAF8F5] rounded-[2px]">
                  AI Automation
                </span>
              </div>
            </div>

            {/* Right Interactive Mock Card (5 cols) */}
            <div className="lg:col-span-5 border border-[#323230] bg-[#1E1E1C] p-6 rounded-[2px] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#323230]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#A87445]" />
                  <span className="font-mono text-xs text-[#FAF8F5] font-semibold">
                    oxlate-labs // v0.9
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A87445] px-2 py-0.5 rounded-[2px] bg-[#A87445]/15 border border-[#A87445]/40">
                  Coming Soon
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#8C8A84]">
                <div className="flex items-start gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#A87445] mt-0.5 shrink-0" />
                  <span>Automated edge telemetry &amp; trace inspection</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-3.5 h-3.5 text-[#A87445] mt-0.5 shrink-0" />
                  <span>Sub-millisecond query routing &amp; sync pipelines</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A87445] mt-0.5 shrink-0" />
                  <span>Seamless Next.js &amp; Mobile cross-stack integration</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#D9D4CC] border-t border-[#323230] flex items-center justify-between">
                <span>STATUS: IN ACTIVE LAB TESTING</span>
                <span className="text-[#A87445]">RELEASE 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
