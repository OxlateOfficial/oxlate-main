import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";
import { Button } from "@/components/ui/button";
import { getFeaturedHomeProjects, getAllProjects, ProjectItem } from "@/data/projects.data";

function ProjectSchematic({
  type,
  image,
  title,
  imageCount,
}: {
  type: "platform" | "mobile";
  image?: string;
  title?: string;
  imageCount?: number;
}) {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#161615] text-[#FAF8F5] overflow-hidden rounded-[4px] border border-[#D9D4CC] group-hover:border-[#A87445] transition-all shadow-sm">
      {/* Top Browser/App Bar */}
      <div className="h-8 bg-[#242422] border-b border-[#323230] px-3 sm:px-4 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="font-mono text-[10px] text-[#D9D4CC] truncate max-w-[200px]">
          {type === "platform" ? "https://mentorkrish.in" : "lemniska.app // native"}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-wider text-[#A87445]">
          {imageCount ? `${imageCount} SCREENSHOTS` : "LIVE BUILD"}
        </div>
      </div>

      {/* Clear, High-Resolution Preview Image (NO Dark Murky Overlays) */}
      <div className="relative w-full h-[calc(100%-32px)] bg-[#111111]">
        {image ? (
          <Image
            src={image}
            alt={title || "Project interface"}
            fill
            className={`transition-transform duration-300 group-hover:scale-[1.01] ${
              type === "mobile" ? "object-contain p-3" : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#6C6B66] font-mono text-xs">
            Preview Interface
          </div>
        )}
      </div>

      {/* Floating Hover Indicator */}
      <div className="absolute bottom-3 right-3 z-10 font-mono text-[11px] bg-[#111111]/90 text-white px-3 py-1 rounded-[2px] border border-[#3A3A36] backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:border-[#A87445] transition-all flex items-center gap-1.5">
        <span>View Full Case Study</span>
        <ArrowRight className="w-3 h-3 text-[#A87445]" />
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
          <SectionTag index="03" label="PROVEN IMPACT" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Real software. Real business results.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            From mobile ecosystems with 5,000+ active downloads to high-converting client web platforms, explore how we engineer software that delivers measurable value.
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
                  <ProjectSchematic
                    type={project.schematicType}
                    image={project.images?.[0]}
                    title={project.title}
                    imageCount={project.images?.length}
                  />
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
                      The Challenge
                    </span>
                    <p className="text-[#6C6B66] leading-relaxed">{project.technicalChallenge}</p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#A87445] block mb-1">
                      How We Solved It
                    </span>
                    <p className="text-[#292929] leading-relaxed">{project.architecturalSolution}</p>
                  </div>
                </div>

                {/* Key Business Outcomes */}
                <div className="mb-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                    Key Outcomes &amp; Impact
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

const PROJECTS_COUNT = getAllProjects().length;
