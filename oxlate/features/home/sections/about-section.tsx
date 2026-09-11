import React from "react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";

interface EntityFact {
  label: string;
  value: string;
}

const ENTITY_FACTS: EntityFact[] = [
  { label: "ORGANIZATION", value: "Oxlate" },
  { label: "ESTABLISHED", value: "2025" },
  { label: "PRACTICE", value: "Web, Mobile & Custom Digital Systems" },
  { label: "OPERATING MODEL", value: "Direct Founder-Led Engineering" },
  { label: "TECHNICAL RIGOR", value: "Type Safety & Clean Component Structure" },
  { label: "PHILOSOPHY", value: "Designed for Long-Term Ownership" },
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
          <SectionTag index="05" label="THE COMPANY" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            A focused technology partner.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            Oxlate is an independent engineering partner building software with calm, architectural discipline.
          </p>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column (7 cols) - Answers: Who, When, What, How */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-base sm:text-lg text-[#292929] leading-[1.65]">
            <p className="text-xl sm:text-2xl font-medium text-[#111111] leading-snug">
              Founded in 2025, Oxlate is a compact, founder-led technology firm specializing in web applications, mobile products, and custom business software.
            </p>

            <p>
              We operate without layers of non-technical management. When you engage with us, you work directly with the builders responsible for designing your data models, authoring your interfaces, and shipping your code.
            </p>

            <p className="text-sm sm:text-base text-[#6C6B66]">
              Every system is engineered with architectural discipline: planned before overbuilding, executed with clean type contracts, and delivered so your team can confidently own and extend it over the long term.
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
                ENTITY SPECIFICATION
              </span>
              <span className="text-[#A87445]">VERIFIED</span>
            </div>

            <DatumLine orientation="horizontal" className="mb-6" />

            {/* Entity Facts Grid */}
            <dl className="space-y-4 text-xs sm:text-sm">
              {ENTITY_FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#D9D4CC]/30 gap-1 sm:gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#6C6B66] shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="font-medium text-[#111111] sm:text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Architectural Philosophy Callout */}
            <div className="mt-8 pt-6 border-t border-[#D9D4CC]/60 bg-[#F5F2EC]/60 p-4 rounded-[2px]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#A87445] mb-2">
                // CORE PRINCIPLE
              </div>
              <blockquote className="text-xs sm:text-sm italic text-[#292929] leading-relaxed">
                &ldquo;Software should feel like well-constructed architecture: quiet, permanent, and dependable under load.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
