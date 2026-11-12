import React from "react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";

interface FounderPillar {
  title: string;
  desc: string;
}

const FOUNDER_PILLARS: FounderPillar[] = [
  {
    title: "Direct Builder Collaboration",
    desc: "Work 1-on-1 with the senior engineers who design and author your code. No account managers or middlemen.",
  },
  {
    title: "100% Code & IP Ownership",
    desc: "No proprietary vendor lock-in. You own every line of code, design file, and cloud resource from day one.",
  },
  {
    title: "Production-Grade Engineering",
    desc: "Proven architectures using Next.js, React Native, and PostgreSQL that scale reliably as traffic surges.",
  },
  {
    title: "Rapid Weekly Demo Builds",
    desc: "Interactive demo builds delivered every 7 days so you test real working software with zero guesswork.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="About Oxlate"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <SectionTag index="05" label="THE STUDIO" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Work directly with the builders.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            No sales intermediaries, no junior handoffs. You work directly with the founding engineers who design, architect, and ship your software.
          </p>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column (7 cols) - Answers: Who, When, What, How */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-base sm:text-lg text-[#292929] leading-[1.65]">
            <p className="text-xl sm:text-2xl font-medium text-[#111111] leading-snug">
              We started Oxlate because we believe growing businesses deserve software built with speed, care, and genuine technical craftsmanship.
            </p>

            <p>
              Traditional agencies often bill enterprise rates while passing your project to inexperienced junior developers hidden behind non-technical account managers. At Oxlate, founders Abhishek, Vaibhav, and Gurmeet personally lead the architecture, design, and code for every single client engagement.
            </p>

            <p>
              With extensive real-world experience shipping production telemedicine apps serving 5,000+ active users, high-converting EdTech platforms, and custom business tools, we know what it takes to build software that scales reliably without breaking.
            </p>

            <p className="text-sm sm:text-base text-[#6C6B66]">
              We plan thoroughly to eliminate costly rework, engineer with modern, maintainable stacks, and deliver 100% full code ownership directly into your hands.
            </p>
          </div>

          {/* Right Specification & Entity Data Panel (5 cols) */}
          <div className="lg:col-span-5 relative border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-10 rounded-[2px]">
            {/* Corner Alignment Crosshairs */}
            <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]/60" />
            <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
            <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
            <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

            {/* Spec Header */}
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#6C6B66] mb-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A87445]" aria-hidden="true" />
                FOUNDER-LED ADVANTAGE
              </span>
              <span className="text-[#A87445]">DIRECT EXECUTION</span>
            </div>

            <DatumLine orientation="horizontal" className="mb-6" />

            {/* Trust Pillars Grid */}
            <div className="space-y-5">
              {FOUNDER_PILLARS.map((pillar) => (
                <div key={pillar.title} className="pb-4 border-b border-[#D9D4CC]/40 last:border-b-0 last:pb-0">
                  <div className="font-sans text-sm font-bold text-[#111111] mb-1 flex items-center gap-2">
                    <span className="text-[#A87445] font-mono text-xs">/</span>
                    {pillar.title}
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#6C6B66] leading-relaxed pl-3.5">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder Commitment Callout */}
            <div className="mt-8 pt-6 border-t border-[#D9D4CC]/60 bg-[#F5F2EC]/60 p-4 rounded-[2px]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#A87445] mb-1.5">
                // FOUNDER COMMITMENT
              </div>
              <blockquote className="text-xs sm:text-sm italic text-[#292929] leading-relaxed">
                &ldquo;We treat your product with the exact same rigor, speed, and care as our own in-house software.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
