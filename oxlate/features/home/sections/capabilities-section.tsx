import React from "react";
import Link from "next/link";
import { Globe, Smartphone, Layers, ArrowRight } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { DatumLine } from "@/components/ui/datum-line";

interface CapabilityPillar {
  index: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  techStack: string[];
}

const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    index: "01",
    title: "Websites & Web Applications",
    category: "Web Engineering",
    icon: <Globe className="w-5 h-5 text-[#A87445]" />,
    description:
      "Fast, conversion-optimized platforms and web applications built with modern frameworks. Engineered to rank high on search engines, load instantly, and scale cleanly as traffic grows.",
    deliverables: [
      "High-Converting Marketing Websites",
      "Customer Portals & Client Dashboards",
      "SaaS MVP Applications & Scalable Frontends",
      "Speed Optimization & Technical SEO",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Mobile Applications (iOS & Android)",
    category: "Mobile Engineering",
    icon: <Smartphone className="w-5 h-5 text-[#A87445]" />,
    description:
      "Cross-platform mobile apps engineered for fluid gestures, offline resilience, and daily use. From user journey prototyping to Google Play and Apple App Store deployment.",
    deliverables: [
      "Cross-Platform iOS & Android Apps (React Native)",
      "Offline-First Local Storage & Sync",
      "Push Notifications & Device Integrations",
      "App Store & Google Play Store Publishing",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "Mobile APIs"],
  },
  {
    index: "03",
    title: "Custom Internal Tools & Automation",
    category: "Business Systems",
    icon: <Layers className="w-5 h-5 text-[#A87445]" />,
    description:
      "Tailored business software built around how your team actually works. Eliminate repetitive manual tasks, fragile spreadsheets, and disconnected software systems.",
    deliverables: [
      "Operational Dashboards & Admin Portals",
      "Workflow Automation & Scheduled Jobs",
      "Secure Database Architecture (PostgreSQL)",
      "Third-Party API & Payment Integrations",
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
          <SectionTag index="02" label="WHAT WE BUILD" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Software built to solve real business problems.
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            We don't build bloated templates or fragile prototypes. We engineer fast, durable web and mobile software designed to scale your operations, delight users, and drive revenue.
          </p>
        </div>

        {/* 3 Modern Distinct Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITY_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="group p-8 sm:p-10 bg-[#FAF8F5] border border-[#D9D4CC] rounded-[4px] shadow-xs hover:border-[#A87445] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Upper Block: Category & Title */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[4px] bg-[#F5F2EC] border border-[#D9D4CC] flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#6C6B66]">
                      SERVICE // {pillar.index}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A87445] font-semibold">
                    {pillar.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-4 group-hover:text-[#A87445] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#292929] leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                <DatumLine orientation="horizontal" className="mb-6" />

                <div className="mb-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#111111] mb-3">
                    Scope &amp; Deliverables
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#292929]">
                    {pillar.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#A87445] mt-0.5 font-mono text-xs leading-none select-none">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Block: Tech Stack Chips & Action Link */}
              <div className="pt-6 border-t border-[#D9D4CC]/40 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {pillar.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#F5F2EC] border border-[#D9D4CC] text-[#292929] rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A87445] hover:text-[#111111] transition-colors font-semibold pt-1"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
