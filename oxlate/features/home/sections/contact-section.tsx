import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Button } from "@/components/ui/button";
import { Crosshair } from "@/components/ui/crosshair";
import { DatumLine } from "@/components/ui/datum-line";

interface EngagementProtocol {
  step: string;
  title: string;
  desc: string;
}

const ENGAGEMENT_PROTOCOLS: EngagementProtocol[] = [
  {
    step: "01",
    title: "Direct Builder Access",
    desc: "You converse directly with an engineering lead, not an account representative or sales screener.",
  },
  {
    step: "02",
    title: "Technical Feasibility First",
    desc: "We review your requirements, determine data models and component architecture, and provide realistic milestone timelines.",
  },
  {
    step: "03",
    title: "Zero Sales Pressure",
    desc: "No aggressive follow-up cadences or bloated multi-month proposal ceremonies. Just calm technical clarity.",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F5F2EC] border-t border-[#D9D4CC]/60 layer-l4 scroll-mt-12"
      aria-label="Engagement and Contact"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <SectionTag index="06" label="ENGAGEMENT" showPip className="mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.14] mb-5">
            Have something worth building?
          </h2>
          <p className="text-base sm:text-lg text-[#292929] max-w-2xl font-normal leading-relaxed">
            Tell us what you are trying to build. We work directly with founders and teams on web and mobile products.
          </p>
        </div>

        {/* Primary Engagement Frame */}
        <div className="relative border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 lg:p-14 rounded-[2px]">
          {/* Architectural Alignment Crosshairs */}
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]/60" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#D9D4CC]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#D9D4CC]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Action Area (7 cols) */}
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-widest text-[#6C6B66] mb-3">
                INITIATE DIRECT INQUIRY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-4">
                Start a technical conversation.
              </h3>
              <p className="text-sm sm:text-base text-[#292929] leading-relaxed mb-8 max-w-xl">
                Send an email with a concise summary of what you are planning to build, target timelines, or existing codebases. We review direct project inquiries and typically respond within one business day.
              </p>

              {/* Primary Bronze CTA & Direct Email Trigger */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Button
                  asChild
                  className="bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-150 hover:-translate-y-[1px] inline-flex items-center gap-3 border-none"
                >
                  <a href="mailto:oxlateofficial@gmail.com">
                    <span>Start a conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>

                <a
                  href="mailto:oxlateofficial@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#111111] hover:text-[#A87445] transition-colors py-2 group"
                >
                  <Mail className="w-4 h-4 text-[#A87445] group-hover:scale-110 transition-transform" />
                  <span className="underline underline-offset-4">oxlateofficial@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Engagement Protocol Signals (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D9D4CC]/60 pt-8 lg:pt-0 lg:pl-10">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#6C6B66] mb-4">
                Engagement Standards
              </div>
              <div className="space-y-6">
                {ENGAGEMENT_PROTOCOLS.map((protocol) => (
                  <div key={protocol.step} className="flex items-start gap-4">
                    <span className="font-orbitron text-xs font-bold text-[#A87445] mt-0.5 shrink-0 tracking-widest">
                      {protocol.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#111111] mb-1">
                        {protocol.title}
                      </h4>
                      <p className="text-xs text-[#6C6B66] leading-relaxed">
                        {protocol.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
