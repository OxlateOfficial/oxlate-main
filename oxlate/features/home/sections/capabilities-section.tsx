import React from "react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";

interface CapabilityPillar {
  index: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    index: "01",
    title: "Web & Web Applications",
    category: "Web Engineering",
    description:
      "Websites and web applications designed around your business and customers. Fast, accessible, and structured to grow cleanly as your operations scale.",
    deliverables: [
      "Customer-Facing Websites & Platforms",
      "Web Applications & Client Portals",
      "E-Commerce & Digital Storefronts",
      "Performance Optimization & SEO",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Mobile Applications",
    category: "Mobile Engineering",
    description:
      "Android and cross-platform applications built around real user workflows. Designed for smooth interactions, offline reliability, and fast daily usage.",
    deliverables: [
      "Android & Cross-Platform Mobile Apps",
      "Offline-Ready Local Data Storage",
      "Device & Hardware Integration",
      "Play Store & App Store Deployment",
    ],
    techStack: ["React Native", "TypeScript", "Android / iOS", "Expo"],
  },
  {
    index: "03",
    title: "Custom Software & Internal Tools",
    category: "Systems & Infrastructure",
    description:
      "Business systems and internal tools built around the way your team actually works. Eliminating manual friction and disconnected spreadsheets.",
    deliverables: [
      "Operational Dashboards & Admin Portals",
      "Automated Workflow & Reporting Engines",
      "Secure Database Architecture",
      "API & Third-Party System Integrations",
    ],
    techStack: ["Node.js", "PostgreSQL", "REST APIs", "Cloud Infrastructure"],
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="Capabilities"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <SectionTag index="02" label="CAPABILITIES" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Built for real workflows.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            We focus strictly on modern web and mobile product engineering. We do not attempt to be everything to everyone; we engineer high-performance systems for real operational demands.
          </p>
        </div>

        {/* 3 Architectural Columns with 1px Pale Stone Datum Dividing Lines */}
        <div className="relative border border-[#D9D4CC]/60 bg-[#FAF8F5]/60 rounded-[2px]">
          {/* Architectural Alignment Crosshairs */}
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]/60" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D9D4CC]/60">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="group p-8 sm:p-10 lg:p-11 flex flex-col justify-between transition-colors duration-200 hover:bg-[#FAF8F5]"
              >
                {/* Upper Block: Index & Headings */}
                <div>
                  {/* Monospace Indicator Tag */}
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#6C6B66] mb-6">
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-[#A87445]" aria-hidden="true" />
                      PILLAR // {pillar.index}
                    </span>
                    <span className="text-[11px] text-[#A87445]">{pillar.category}</span>
                  </div>

                  {/* Semantic Column Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-4 group-hover:text-[#111111] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Body Description */}
                  <p className="text-sm sm:text-base text-[#292929] leading-relaxed mb-8 font-normal">
                    {pillar.description}
                  </p>

                  <DatumLine orientation="horizontal" className="mb-6" />

                  {/* Scope & Deliverables List */}
                  <div className="mb-8">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                      Scope &amp; Deliverables
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#292929]">
                      {pillar.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#A87445] mt-1 font-mono text-xs leading-none select-none">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Block: Tech Metadata Chips */}
                <div className="pt-6 border-t border-[#D9D4CC]/40">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#6C6B66] mb-3">
                    Technical Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#F5F2EC] border border-[#D9D4CC] text-[#292929] rounded-[2px] transition-colors group-hover:border-[#111111]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
