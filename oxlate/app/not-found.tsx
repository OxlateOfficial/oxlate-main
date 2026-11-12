import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Home, Briefcase, Layers, Mail } from "lucide-react";
import { SectionTag } from "@/components/ui/section-tag";
import { Crosshair } from "@/components/ui/crosshair";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested page could not be found on Oxlate. Explore our case studies, services, or contact us directly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#F5F2EC] text-[#111111] flex flex-col justify-between">
      {/* Top Header */}
      <header className="w-full bg-[#F5F2EC]/90 backdrop-blur-md border-b border-[#D9D4CC]/60 px-6 sm:px-10 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6C6B66] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#A87445] transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Hero Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24 text-center">
        <div className="inline-flex mb-6">
          <SectionTag index="404" label="ROUTE ANOMALY" showPip />
        </div>

        <div className="font-orbitron text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#111111] mb-6 select-none">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] mb-4">
          Page not found.
        </h1>

        <p className="text-base sm:text-lg text-[#6C6B66] max-w-xl mx-auto leading-relaxed mb-10">
          The requested system route does not exist or has been relocated to preserve canonical architecture. Use the links below to navigate our work.
        </p>

        {/* Action Hub */}
        <div className="relative border border-[#D9D4CC] bg-[#FAF8F5] p-6 sm:p-8 rounded-[2px] max-w-2xl mx-auto text-left shadow-xs">
          <Crosshair className="absolute -top-1.5 -left-1.5 text-[#A87445]" />
          <Crosshair className="absolute -top-1.5 -right-1.5 text-[#6C6B66]" />
          <Crosshair className="absolute -bottom-1.5 -left-1.5 text-[#6C6B66]" />
          <Crosshair className="absolute -bottom-1.5 -right-1.5 text-[#A87445]" />

          <div className="font-mono text-xs uppercase tracking-widest text-[#A87445] mb-4">
            AVAILABLE CANONICAL DESTINATIONS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center justify-between p-3.5 border border-[#D9D4CC]/60 bg-[#F5F2EC]/60 hover:bg-[#FAF8F5] hover:border-[#111111] rounded-[2px] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-[#A87445]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#111111]">
                  Homepage
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#6C6B66] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/work"
              className="flex items-center justify-between p-3.5 border border-[#D9D4CC]/60 bg-[#F5F2EC]/60 hover:bg-[#FAF8F5] hover:border-[#111111] rounded-[2px] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-[#A87445]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#111111]">
                  Case Studies
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#6C6B66] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-between p-3.5 border border-[#D9D4CC]/60 bg-[#F5F2EC]/60 hover:bg-[#FAF8F5] hover:border-[#111111] rounded-[2px] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#A87445]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#111111]">
                  Services
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#6C6B66] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/#contact"
              className="flex items-center justify-between p-3.5 border border-[#D9D4CC]/60 bg-[#F5F2EC]/60 hover:bg-[#FAF8F5] hover:border-[#111111] rounded-[2px] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A87445]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#111111]">
                  Contact Founders
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#6C6B66] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#D9D4CC] py-8 px-6 sm:px-10 lg:px-12 text-xs text-[#6C6B66]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2025–2026 Oxlate. All rights reserved. Built with care &amp; precision.</p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ ERROR RESOLUTION &amp; RECOVERY ]
          </div>
        </div>
      </footer>
    </main>
  );
}
