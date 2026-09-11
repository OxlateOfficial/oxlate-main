"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 layer-l7 w-full bg-[#F5F2EC]/90 backdrop-blur-sm border-b border-[#D9D4CC]/50 select-none">
      <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
        {/* Left: O X L A T E + Tech Micro-Stack */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Oxlate Home">
          <span className="font-orbitron text-base sm:text-lg font-bold tracking-[0.35em] text-[#111111]">
            OXLATE
          </span>
          <div className="hidden sm:flex flex-col font-mono text-[7.5px] uppercase tracking-widest text-[#8C8A84] leading-tight pl-2 border-l border-[#D9D4CC]">
            <span>TECHNOLOGY</span>
            <span>DESIGN</span>
            <span>ENGINEERING</span>
          </div>
        </Link>

        {/* Center: Numbered Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs tracking-wider">
          <Link
            href="/#intro"
            className="group relative flex flex-col items-center text-[#111111] font-semibold py-1"
          >
            <span><span className="text-[#8C8A84] mr-1.5 font-normal">01</span>Home</span>
            <span className="absolute -bottom-1 w-full h-[1.5px] bg-[#111111]" />
          </Link>
          <Link
            href="/work"
            className="text-[#6C6B66] hover:text-[#111111] transition-colors py-1"
          >
            <span className="text-[#8C8A84] mr-1.5">02</span>Work
          </Link>
          <Link
            href="/#approach"
            className="text-[#6C6B66] hover:text-[#111111] transition-colors py-1"
          >
            <span className="text-[#8C8A84] mr-1.5">03</span>Approach
          </Link>
          <Link
            href="/#about"
            className="text-[#6C6B66] hover:text-[#111111] transition-colors py-1"
          >
            <span className="text-[#8C8A84] mr-1.5">04</span>About
          </Link>
          <Link
            href="/#contact"
            className="text-[#6C6B66] hover:text-[#111111] transition-colors py-1"
          >
            <span className="text-[#8C8A84] mr-1.5">05</span>Contact
          </Link>
        </nav>

        {/* Right: Bronze Start a Project Button + Toggle Pip */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="bg-[#A87445] hover:bg-[#B98250] text-white font-mono text-[11px] uppercase tracking-wider px-5 py-2 sm:px-6 sm:py-2.5 rounded-[3px] transition-colors border-none shadow-sm"
          >
            <Link href="/#contact" className="inline-flex items-center gap-2">
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
          <div className="hidden sm:flex w-7 h-7 rounded-full border border-[#D9D4CC] items-center justify-center text-[#111111]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          </div>

          {/* Far-Right Architectural Tag */}
          <div className="hidden xl:flex flex-col font-mono text-[7.5px] uppercase tracking-widest text-[#8C8A84] leading-tight text-right pl-3 border-l border-[#D9D4CC]">
            <span className="text-[#111111] font-semibold">BUILD</span>
            <span>A CALMER</span>
            <span>DIGITAL</span>
            <span>TOMORROW</span>
          </div>
        </div>
      </div>
    </header>
  );
}
