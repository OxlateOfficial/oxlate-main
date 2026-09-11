import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DatumLine } from "@/components/ui/datum-line";

interface NavLinkItem {
  index: string;
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { index: "01", label: "Intro", href: "/#intro" },
  { index: "02", label: "Capabilities", href: "/#capabilities" },
  { index: "03", label: "Work", href: "/work" },
  { index: "04", label: "Approach", href: "/#approach" },
  { index: "05", label: "About", href: "/#about" },
  { index: "06", label: "Contact", href: "/#contact" },
];

interface SocialLinkItem {
  platform: string;
  handle: string;
  href: string;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: "X (Twitter)",
    handle: "@OxlateOfficial",
    href: "https://x.com/OxlateOfficial",
  },
  {
    platform: "LinkedIn",
    handle: "oxlateofficial",
    href: "https://www.linkedin.com/company/oxlateofficial",
  },
  {
    platform: "Instagram",
    handle: "@oxlateofficial",
    href: "https://www.instagram.com/oxlateofficial/",
  },
  {
    platform: "Facebook",
    handle: "Oxlate Official",
    href: "https://www.facebook.com/profile.php?id=61585881831048",
  },
];

export function FooterSection() {
  return (
    <footer
      className="relative w-full bg-[#F5F2EC] border-t border-[#D9D4CC] pt-16 pb-12 sm:pt-20 sm:pb-16 layer-l4"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* 4-Column Architectural Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="#intro" className="inline-flex items-center gap-3 group" aria-label="Oxlate Home">
              <div className="w-8 h-8 relative shrink-0">
                <Image
                  src="/Oxlate_logoX_blk.svg"
                  alt="Oxlate Mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-orbitron text-base font-bold tracking-widest text-[#111111]">
                OXLATE
              </span>
            </Link>

            <p className="text-sm text-[#292929] leading-relaxed">
              Precision web and mobile engineering.
            </p>

            <div className="font-mono text-[11px] text-[#6C6B66] flex items-center gap-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A87445]" aria-hidden="true" />
              <span>EST. 2025 // ARCHITECTURAL RIGOR</span>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#111111] mb-5">
              Sitemap
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#6C6B66] hover:text-[#111111] transition-colors"
                  >
                    <span className="font-orbitron text-[11px] font-bold text-[#A87445] group-hover:text-[#111111] transition-colors tracking-widest">
                      {link.index}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Social Profiles */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#111111] mb-5">
              Connect
            </div>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col text-sm text-[#6C6B66] hover:text-[#111111] transition-colors"
                  >
                    <span className="font-medium text-[#111111] group-hover:text-[#A87445] transition-colors">
                      {social.platform}
                    </span>
                    <span className="font-mono text-xs text-[#6C6B66]">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#111111] mb-5">
              Direct Contact
            </div>
            <div className="space-y-3 text-sm text-[#292929]">
              <p className="text-[#6C6B66] text-xs">
                Inquiries &amp; Architecture Assessments:
              </p>
              <a
                href="mailto:oxlateofficial@gmail.com"
                className="font-mono text-xs sm:text-sm text-[#111111] hover:text-[#A87445] transition-colors underline underline-offset-4 block"
              >
                oxlateofficial@gmail.com
              </a>
              <div className="pt-3 border-t border-[#D9D4CC]/40 text-xs text-[#6C6B66]">
                Typical response within one business day.
              </div>
            </div>
          </div>
        </div>

        <DatumLine orientation="horizontal" className="mb-8" />

        {/* Bottom Legal & Copyright Baseline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6C6B66]">
          <p>
            &copy; 2025–2026 Oxlate. All rights reserved. Built with architectural discipline.
          </p>
          <div className="font-mono text-[11px] text-[#A87445]">
            [ PRECISION TECHNOLOGY PARTNER ]
          </div>
        </div>
      </div>
    </footer>
  );
}
