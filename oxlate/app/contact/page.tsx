import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/features/home/sections/contact-section";
import { createPageMetadata } from "@/lib/seo/metadata-factory";

export const metadata: Metadata = createPageMetadata({
  pageType: "CONTACT",
  title: "Direct Project Consultation & Inquiry",
  description:
    "Direct technical conversation with Oxlate engineering leads. Inquire about web platforms, mobile products, or custom systems architecture.",
});

export default function ContactPage() {
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
            href="/work"
            className="font-mono text-xs uppercase tracking-wider text-[#A87445] hover:text-[#111111] transition-colors hidden sm:inline-block"
          >
            View Work Catalog →
          </Link>
        </div>
      </header>

      {/* Core Contact & Engagement View */}
      <ContactSection />

      {/* Minimal Architectural Footer */}
      <footer className="border-t border-[#D9D4CC] py-10 px-6 sm:px-10 lg:px-12 text-xs text-[#6C6B66]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2025–2026 Oxlate. All rights reserved. Built with architectural discipline.</p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ DIRECT BUILDER COMMUNICATION ]
          </div>
        </div>
      </footer>
    </main>
  );
}
