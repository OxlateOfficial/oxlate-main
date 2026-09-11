import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CapabilitiesSection } from "@/features/home/sections/capabilities-section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata-factory";

export const metadata: Metadata = createPageMetadata({
  pageType: "SERVICE",
  title: "Engineering Capabilities & Services",
  description:
    "Disciplined web applications, mobile product engineering, and bespoke business software systems built for long-term ownership.",
});

export default function ServicesPage() {
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

      {/* Core Capabilities Discipline View */}
      <CapabilitiesSection />

      {/* Direct Engagement Consultation Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <div className="border border-[#D9D4CC] bg-[#FAF8F5] p-8 sm:p-12 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#A87445] mb-2">
              DISCUSS YOUR SCOPE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Direct technical consultation with builders.
            </h2>
            <p className="text-sm text-[#6C6B66] mt-1">
              Typical response within one business day. No non-technical sales intermediary.
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

      {/* Minimal Architectural Footer */}
      <footer className="border-t border-[#D9D4CC] py-10 px-6 sm:px-10 lg:px-12 text-xs text-[#6C6B66]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2025–2026 Oxlate. All rights reserved. Built with architectural discipline.</p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ DISCIPLINES: WEB // MOBILE // SYSTEMS ]
          </div>
        </div>
      </footer>
    </main>
  );
}
