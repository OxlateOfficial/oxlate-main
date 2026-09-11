import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";
import { Button } from "@/components/ui/button";
import { getFeaturedHomeProjects, ProjectItem } from "@/data/projects.data";

function ProjectSchematic({ type }: { type: "platform" | "mobile" }) {
  if (type === "platform") {
    return (
      <div className="relative w-full h-44 sm:h-52 bg-[#111111] text-[#FAF8F5] p-5 font-mono text-[11px] overflow-hidden select-none border border-[#292929] rounded-[2px] flex flex-col justify-between group-hover:border-[#A87445]/60 transition-colors">
        {/* Background CAD linework */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cad-grid-platform" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#D9D4CC" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cad-grid-platform)" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#A87445" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="25%" y1="0" x2="75%" y2="100%" stroke="#D9D4CC" strokeWidth="1" />
          </svg>
        </div>

        {/* Top Readout */}
        <div className="relative z-10 flex items-center justify-between text-[#FAF8F5]/80">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A87445]" />
            SYS_ARCH // WEB_APPLICATION_PLATFORM
          </span>
          <span className="text-[#A87445]">VERIFIED ARCHITECTURE</span>
        </div>

        {/* Center Architectural Nodes */}
        <div className="relative z-10 grid grid-cols-3 gap-2 text-center my-auto">
          <div className="border border-[#292929] bg-[#111111]/90 p-2">
            <div className="text-[#A87445] text-[10px]">CLIENT</div>
            <div className="text-white font-bold text-xs mt-0.5">NEXT.JS / REACT</div>
            <div className="text-[9px] text-[#6C6B66] mt-1">Deterministic UI</div>
          </div>
          <div className="border border-[#A87445]/50 bg-[#111111]/90 p-2">
            <div className="text-[#A87445] text-[10px]">CONTRACT</div>
            <div className="text-white font-bold text-xs mt-0.5">TYPE SAFETY</div>
            <div className="text-[9px] text-[#6C6B66] mt-1">Zod / TypeScript</div>
          </div>
          <div className="border border-[#292929] bg-[#111111]/90 p-2">
            <div className="text-[#A87445] text-[10px]">STORAGE</div>
            <div className="text-white font-bold text-xs mt-0.5">POSTGRESQL</div>
            <div className="text-[9px] text-[#6C6B66] mt-1">Relational Integrity</div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#6C6B66] border-t border-[#292929] pt-2">
          <span>STACK: STRICT TYPESCRIPT</span>
          <span className="text-[#FAF8F5]">SUB-SECOND LOAD</span>
          <span>RUNTIME: ZERO BLOAT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 sm:h-52 bg-[#111111] text-[#FAF8F5] p-5 font-mono text-[11px] overflow-hidden select-none border border-[#292929] rounded-[2px] flex flex-col justify-between group-hover:border-[#A87445]/60 transition-colors">
      {/* Background CAD linework */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cad-grid-mobile" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#D9D4CC" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cad-grid-mobile)" />
          <circle cx="50%" cy="50%" r="40" stroke="#A87445" strokeWidth="1" fill="none" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Top Readout */}
      <div className="relative z-10 flex items-center justify-between text-[#FAF8F5]/80">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A87445]" />
          DATA_FLOW // OFFLINE_SYNC_PIPELINE
        </span>
        <span className="text-[#A87445]">LOCAL-FIRST LEDGER</span>
      </div>

      {/* Center Flow Nodes */}
      <div className="relative z-10 flex items-center justify-between gap-2 text-center my-auto">
        <div className="border border-[#292929] bg-[#111111]/90 p-2 flex-1">
          <div className="text-[10px] text-[#A87445]">INTERFACE</div>
          <div className="text-white font-bold text-xs mt-0.5">REACT NATIVE</div>
          <div className="text-[9px] text-[#6C6B66] mt-1">Touch Gestures</div>
        </div>
        <span className="text-[#A87445] font-bold">→</span>
        <div className="border border-[#A87445]/50 bg-[#111111]/90 p-2 flex-1">
          <div className="text-[10px] text-[#A87445]">LOCAL QUEUE</div>
          <div className="text-white font-bold text-xs mt-0.5">SQLITE</div>
          <div className="text-[9px] text-[#6C6B66] mt-1">Zero Latency</div>
        </div>
        <span className="text-[#A87445] font-bold">→</span>
        <div className="border border-[#292929] bg-[#111111]/90 p-2 flex-1">
          <div className="text-[10px] text-[#A87445]">SYNC ENGINE</div>
          <div className="text-white font-bold text-xs mt-0.5">NODE.JS API</div>
          <div className="text-[9px] text-[#6C6B66] mt-1">State Resolution</div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#6C6B66] border-t border-[#292929] pt-2">
        <span>PERSISTENCE: OFFLINE-FIRST</span>
        <span className="text-[#FAF8F5]">RESILIENT MOBILE STATE</span>
        <span>DEPLOYMENT: IOS / ANDROID</span>
      </div>
    </div>
  );
}

export function WorkSection() {
  const homeProjects = getFeaturedHomeProjects();

  return (
    <section
      id="work"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <SectionTag index="03" label="SELECTED WORK" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Demonstrations of craft.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            A selection of independent products and technical systems built by the founding developer. These demonstrate our technical and design approach.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-[#A87445] mt-3">
            // Independent work, built to demonstrate how we think and build.
          </p>
        </div>

        {/* 2 Architectural Project Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {homeProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="relative border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-10 lg:p-11 rounded-[2px] flex flex-col justify-between group transition-colors hover:border-[#111111]/40"
            >
              {/* Corner Architectural Marks */}
              <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]/60" />
              <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
              <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
              <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

              <div>
                {/* Header: Index, Category & Honesty Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6C6B66]">
                    <span>SELECTED WORK //</span>
                    <span className="font-orbitron font-bold text-[#A87445] tracking-widest">
                      {project.index}
                    </span>
                  </div>

                  {/* Mandatory Truth Rule Honesty Badge */}
                  <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 border border-[#A87445]/40 text-[#A87445] bg-[#A87445]/5 rounded-[2px] select-none">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Category with Link to /work/[slug] */}
                <Link href={`/work/${project.slug}`} className="block group/title">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-2 group-hover/title:text-[#A87445] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <div className="font-mono text-xs text-[#A87445] mb-6 tracking-wide">
                  {project.category}
                </div>

                {/* Architectural Schematic View with Link to /work/[slug] */}
                <Link href={`/work/${project.slug}`} className="block mb-8 group/schematic">
                  <ProjectSchematic type={project.schematicType} />
                </Link>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#292929] leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                <DatumLine orientation="horizontal" className="mb-6" />

                {/* Problem vs Solution Blocks */}
                <div className="space-y-4 mb-8 text-xs sm:text-sm">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#111111] block mb-1">
                      Technical Challenge
                    </span>
                    <p className="text-[#6C6B66] leading-relaxed">{project.technicalChallenge}</p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#A87445] block mb-1">
                      Architectural Solution
                    </span>
                    <p className="text-[#292929] leading-relaxed">{project.architecturalSolution}</p>
                  </div>
                </div>

                {/* System Highlights */}
                <div className="mb-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                    System Highlights
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#292929]">
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
              </div>

              {/* Footer Tech Stack Metadata Chips & Direct Detail Link */}
              <div className="pt-6 border-t border-[#D9D4CC]/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6C6B66]">
                    Architecture &amp; Technologies
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A87445] hover:text-[#111111] transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#F5F2EC] border border-[#D9D4CC] text-[#292929] rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Action: Explore all work -> /work */}
        <div className="flex justify-center sm:justify-start">
          <Button
            asChild
            className="bg-[#111111] hover:bg-[#292929] text-[#FAF8F5] font-mono text-xs sm:text-sm uppercase tracking-wider px-7 py-5 rounded-[2px] transition-all duration-150 inline-flex items-center gap-3 border-none"
          >
            <Link href="/work">
              <span>Explore all work ({PROJECTS_COUNT} projects)</span>
              <ArrowRight className="w-4 h-4 text-[#A87445]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const PROJECTS_COUNT = 3;
