import React from "react";
import { Zap, Users, ShieldCheck, Clock } from "lucide-react";

interface ProofMetric {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const PROOF_METRICS: ProofMetric[] = [
  {
    value: "5,000+",
    label: "Active Mobile Downloads",
    sublabel: "Verified Google Play Store ecosystem",
    icon: <Users className="w-4 h-4 text-[#A87445]" />,
  },
  {
    value: "270+",
    label: "Verified Doctors Onboarded",
    sublabel: "Specialist marketplace & AI triage",
    icon: <Zap className="w-4 h-4 text-[#A87445]" />,
  },
  {
    value: "100%",
    label: "Code & IP Ownership",
    sublabel: "Zero vendor lock-in from day one",
    icon: <ShieldCheck className="w-4 h-4 text-[#A87445]" />,
  },
  {
    value: "24-Hour",
    label: "Direct Founder Response",
    sublabel: "No account managers or sales screeners",
    icon: <Clock className="w-4 h-4 text-[#A87445]" />,
  },
];

export function ProofBar() {
  return (
    <section
      aria-label="Key Proof Metrics"
      className="relative w-full border-y border-[#D9D4CC] bg-[#FAF8F5] py-8 sm:py-10 layer-l4"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 sm:divide-x-0 divide-[#D9D4CC]/60">
          {PROOF_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center ${
                idx > 1 ? "pt-6 lg:pt-0" : ""
              } ${idx % 2 !== 0 ? "sm:pl-6 lg:pl-8" : ""}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {metric.icon}
                <span className="font-orbitron text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  {metric.value}
                </span>
              </div>
              <div className="font-sans text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                {metric.label}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-[#6C6B66] mt-0.5 leading-tight">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
