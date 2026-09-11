import React from "react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";

interface ApproachStep {
  index: string;
  title: string;
  description: string;
  focus: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    index: "01",
    title: "Understand",
    description: "Map real workflows, business constraints, and core bottlenecks before writing code.",
    focus: "Problem Definition",
  },
  {
    index: "02",
    title: "Structure",
    description: "Define data models, system boundaries, and type contracts early to avoid rework.",
    focus: "System Architecture",
  },
  {
    index: "03",
    title: "Design",
    description: "Craft intentional interfaces focused on usability, clarity, and responsive interaction.",
    focus: "Considered UX/UI",
  },
  {
    index: "04",
    title: "Build",
    description: "Implement with type-safe, modular code and minimal third-party dependencies.",
    focus: "Direct Engineering",
  },
  {
    index: "05",
    title: "Refine",
    description: "Optimize load speed, verify edge cases, and deliver software built to last.",
    focus: "Long-Term Ownership",
  },
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="Engineering Approach"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <SectionTag index="04" label="APPROACH" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            How we engineer.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            A disciplined, 5-stage progression from initial problem definition to durable software delivery.
          </p>
        </div>

        {/* 5-Step Architectural Progression Grid */}
        <div className="relative border border-[#D9D4CC]/60 bg-[#FAF8F5]/60 rounded-[2px]">
          {/* Architectural Alignment Crosshairs */}
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]/60" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#D9D4CC]/60">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.index}
                className="group p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:bg-[#FAF8F5]"
              >
                <div>
                  {/* Sequence Tag */}
                  <div className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] mb-5 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-[#A87445]" aria-hidden="true" />
                      STAGE
                    </span>
                    <span className="font-orbitron text-sm font-bold text-[#A87445] tracking-widest">
                      {step.index}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#292929] leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Focus Indicator */}
                <div className="pt-4 border-t border-[#D9D4CC]/40">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A87445] block">
                    {step.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
