import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";
import { Button } from "@/components/ui/button";
import { PROJECTS, ProjectItem } from "@/data/projects.data";

export const metadata: Metadata = {
  title: "Selected Work — Architectural Project Catalog",
  description:
    "A transparent catalog of independent digital products, web platforms, and mobile software engineered by Oxlate.",
};

function ProjectSchematic({ type }: { type: "platform" | "mobile" }) {
  if (type === "platform") {
    return (
      <div className="relative w-full h-56 sm:h-72 bg-[#111111] text-[#FAF8F5] p-6 font-mono text-xs overflow-hidden select-none border border-[#292929] rounded-[2px] flex flex-col justify-between">
        {/* Background CAD linework */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="work-cad-platform" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#D9D4CC" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-cad-platform)" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#A87445" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#D9D4CC" strokeWidth="1" />
          </svg>
        </div>

        {/* Top Readout */}
        <div className="relative z-10 flex items-center justify-between text-[#FAF8F5]/80">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A87445]" />
            SYS_ARCH // WEB_PLATFORM_ENGINEERING
          </span>
          <span className="text-[#A87445]">VERIFIED ARCHITECTURE</span>
        </div>

        {/* Center Flow Nodes */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-auto">
          <div className="border border-[#292929] bg-[#111111]/90 p-3">
            <div className="text-[#A87445] text-[10px]">LAYER 01 // CLIENT</div>
            <div className="text-white font-bold text-sm mt-0.5">NEXT.JS APP ROUTER</div>
            <div className="text-[10px] text-[#6C6B66] mt-1">SSR + React Server Components</div>
          </div>
          <div className="border border-[#A87445]/60 bg-[#111111]/90 p-3">
            <div className="text-[#A87445] text-[10px]">LAYER 02 // CONTRACT</div>
            <div className="text-white font-bold text-sm mt-0.5">TYPE INTEGRITY</div>
            <div className="text-[10px] text-[#6C6B66] mt-1">Strict TypeScript Schemas</div>
          </div>
          <div className="border border-[#292929] bg-[#111111]/90 p-3">
            <div className="text-[#A87445] text-[10px]">LAYER 03 // DATA</div>
            <div className="text-white font-bold text-sm mt-0.5">POSTGRESQL</div>
            <div className="text-[10px] text-[#6C6B66] mt-1">Relational Database Core</div>
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6C6B66] border-t border-[#292929] pt-3">
          <span>RUNTIME: ZERO BLOAT</span>
          <span className="text-[#FAF8F5]">SUB-SECOND TTI</span>
          <span>DISCIPLINE: TYPE SAFETY</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 sm:h-72 bg-[#111111] text-[#FAF8F5] p-6 font-mono text-xs overflow-hidden select-none border border-[#292929] rounded-[2px] flex flex-col justify-between">
      {/* Background CAD linework */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="work-cad-mobile" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#D9D4CC" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#work-cad-mobile)" />
          <circle cx="50%" cy="50%" r="60" stroke="#A87445" strokeWidth="1" fill="none" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* Top Readout */}
      <div className="relative z-10 flex items-center justify-between text-[#FAF8F5]/80">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A87445]" />
          DATA_FLOW // RESILIENT_MOBILE_SYNC
        </span>
        <span className="text-[#A87445]">OFFLINE-FIRST</span>
      </div>

      {/* Center Flow Nodes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-auto">
        <div className="border border-[#292929] bg-[#111111]/90 p-3">
          <div className="text-[10px] text-[#A87445]">CLIENT</div>
          <div className="text-white font-bold text-sm mt-0.5">REACT NATIVE</div>
          <div className="text-[10px] text-[#6C6B66] mt-1">Cross-Platform Touch UI</div>
        </div>
        <div className="border border-[#A87445]/60 bg-[#111111]/90 p-3">
          <div className="text-[10px] text-[#A87445]">LOCAL LEDGER</div>
          <div className="text-white font-bold text-sm mt-0.5">SQLITE MUTATION QUEUE</div>
          <div className="text-[10px] text-[#6C6B66] mt-1">Zero-Latency Capture</div>
        </div>
        <div className="border border-[#292929] bg-[#111111]/90 p-3">
          <div className="text-[10px] text-[#A87445]">REMOTE SYNC</div>
          <div className="text-white font-bold text-sm mt-0.5">NODE.JS / POSTGRES</div>
          <div className="text-[10px] text-[#6C6B66] mt-1">Deterministic Concurrency</div>
        </div>
      </div>

      {/* Bottom Specs Bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6C6B66] border-t border-[#292929] pt-3">
        <span>STORAGE: DETERMINISTIC</span>
        <span className="text-[#FAF8F5]">IOS &amp; ANDROID RUNTIME</span>
        <span>LATENCY: LOCAL FIRST</span>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-[#F5F2EC] text-[#111111]">
      {/* Top Architectural Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#F5F2EC]/90 backdrop-blur-md border-b border-[#D9D4CC]/60 px-6 sm:px-10 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6C6B66] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#A87445] transition-transform group-hover:-translate-x-1" />
            <span>01 // Return to Home</span>
          </Link>

          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="w-6 h-6 relative shrink-0">
              <Image
                src="/Oxlate_logoX_blk.svg"
                alt="Oxlate Mark"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-orbitron text-xs font-bold tracking-widest text-[#111111]">
              OXLATE
            </span>
          </Link>

          <Link
            href="/#contact"
            className="font-mono text-xs uppercase tracking-wider text-[#A87445] hover:text-[#111111] transition-colors hidden sm:inline-block"
          >
            Initiate Project Inquiry →
          </Link>
        </div>
      </header>

      {/* Catalog Title & Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <SectionTag index="03" label="WORK ARCHIVE" showPip className="mb-6" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12] mb-6">
          Selected Work &amp; Systems.
        </h1>
        <p className="text-lg sm:text-xl text-[#292929] max-w-3xl font-normal leading-relaxed mb-4">
          A transparent index of independent software engineering, digital products, and technical experiments built by the founding developer.
        </p>
        <p className="font-mono text-xs uppercase tracking-wider text-[#A87445]">
          // Independent work, built to demonstrate how we think and build.
        </p>
      </section>

      <DatumLine orientation="horizontal" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12" />

      {/* Project Index List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {PROJECTS.map((project: ProjectItem) => (
          <article
            key={project.id}
            id={project.slug}
            className="relative border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 lg:p-14 rounded-[2px]"
          >
            {/* Corner Architectural Alignment Marks */}
            <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]" />
            <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
            <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
            <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

            {/* Top Bar: Index, Category, Honesty Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D9D4CC]/50">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#6C6B66]">
                <span className="font-orbitron font-bold text-[#A87445] text-sm tracking-widest">
                  PROJECT {project.index}
                </span>
                <span className="text-[#D9D4CC]">//</span>
                <span>{project.category}</span>
              </div>

              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-[#A87445]/40 text-[#A87445] bg-[#A87445]/5 rounded-[2px] select-none">
                {project.badge}
              </span>
            </div>

            {/* Title & Headline with Link to /work/[slug] */}
            <div className="mb-8">
              <Link href={`/work/${project.slug}`} className="block group/title">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-3 group-hover/title:text-[#A87445] transition-colors">
                  {project.title}
                </h2>
              </Link>
              <p className="text-base sm:text-lg text-[#292929] leading-relaxed max-w-3xl">
                {project.headline}
              </p>
            </div>

            {/* High-Resolution Architectural Schematic with Link */}
            <Link href={`/work/${project.slug}`} className="block mb-10 group/schematic">
              <ProjectSchematic type={project.schematicType} />
            </Link>

            {/* 2-Column Deep Architecture Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-6 border-t border-[#D9D4CC]/60">
              {/* Left Column (6 cols): What was built & Technical Challenge */}
              <div className="lg:col-span-6 space-y-6 text-sm">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-2">
                    What Was Built
                  </h3>
                  <p className="text-[#292929] leading-relaxed">
                    {project.whatWasBuilt}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#6C6B66] mb-2">
                    Technical Challenge
                  </h3>
                  <p className="text-[#6C6B66] leading-relaxed">
                    {project.technicalChallenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#A87445] mb-2">
                    Architectural Solution
                  </h3>
                  <p className="text-[#292929] leading-relaxed">
                    {project.architecturalSolution}
                  </p>
                </div>
              </div>

              {/* Right Column (6 cols): Highlights & Stack Specification */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                    System Highlights
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#292929]">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#A87445] mt-1 font-mono text-xs leading-none select-none">
                          +
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D9D4CC]/40">
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#6C6B66] mb-3">
                    Technology &amp; Architecture Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 bg-[#F5F2EC] border border-[#D9D4CC] text-[#292929] rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Project Action Strip -> /work/[slug] */}
            <div className="mt-8 pt-6 border-t border-[#D9D4CC]/60 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#8C8A84]">
                {project.images?.length || 0} Interface Captures &amp; Architecture Specifications
              </span>
              <Button
                asChild
                className="bg-[#111111] hover:bg-[#292929] text-white font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-[2px] transition-all inline-flex items-center gap-2 border-none"
              >
                <Link href={`/work/${project.slug}`}>
                  <span>View Full Architecture &amp; Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A87445]" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>

      {/* Engagement Callout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <div className="border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#A87445] mb-2">
              HAVE A PROJECT IN MIND?
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Start a direct conversation with builders.
            </h2>
            <p className="text-sm text-[#6C6B66] mt-1">
              Typical response within one business day. Direct technical inquiry.
            </p>
          </div>

          <Button
            asChild
            className="bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all shrink-0 border-none"
          >
            <a href="mailto:oxlateofficial@gmail.com">
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Minimal Architectural Footer Baseline */}
      <footer className="border-t border-[#D9D4CC] py-10 px-6 sm:px-10 lg:px-12 text-xs text-[#6C6B66]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2025–2026 Oxlate. All rights reserved. Built with architectural discipline.</p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ INDEPENDENT WORK &amp; ARCHITECTURAL DISCIPLINE ]
          </div>
        </div>
      </footer>
    </main>
  );
}
