"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroCommandNodeProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  icon: React.ReactNode;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  className?: string;
}

/**
 * Architectural Information Node for the Oxlate Command Center.
 * Directly styled per reference/OXLATE Minimal Tech Agency Interface.png.
 */
export function HeroCommandNode({
  id,
  tag,
  title,
  description,
  actionLabel,
  actionHref,
  icon,
  isHovered,
  onHover,
  className = "",
}: HeroCommandNodeProps) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`relative w-full max-w-[320px] xl:max-w-[340px] p-6 sm:p-7 rounded-[10px]
                 bg-[#FAF8F5]/95 backdrop-blur-md border transition-all duration-300 pointer-events-auto select-none
                 ${
                   isHovered
                     ? "border-[#A87445] shadow-[0_12px_36px_rgba(168,116,69,0.14)] -translate-y-1"
                     : "border-[#D9D4CC]/80 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:border-[#111111]/40"
                 }
                 ${className}`}
    >
      {/* Top Architectural Anchor Tab */}
      <div
        className={`absolute -top-1 left-6 w-4 h-1 rounded-full transition-colors duration-300 ${
          isHovered ? "bg-[#A87445]" : "bg-[#D9D4CC]"
        }`}
      />

      {/* Corner Registration Crosshair */}
      <div className="absolute top-2.5 right-2.5 w-2 h-2 text-[#D9D4CC] pointer-events-none flex items-center justify-center font-mono text-[9px]">
        +
      </div>

      {/* Header: Orbitron Index + Monospace Category + Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-2">
          <span className="font-orbitron text-base font-bold text-[#A87445] tracking-widest">
            {id}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#6C6B66] font-semibold">
            {tag.replace(id, "").trim()}
          </span>
        </div>
        <div
          className={`w-7 h-7 flex items-center justify-center transition-colors duration-200 ${
            isHovered ? "text-[#A87445]" : "text-[#111111]"
          }`}
        >
          {icon}
        </div>
      </div>

      {/* Node Title */}
      <h3 className="font-sans text-lg xl:text-xl font-bold text-[#111111] tracking-tight leading-snug mb-2.5">
        {title}
      </h3>

      {/* Node Description */}
      <p className="font-sans text-xs sm:text-[13px] text-[#6C6B66] leading-relaxed mb-5 font-normal">
        {description}
      </p>

      {/* Action Trigger */}
      <Link
        href={actionHref}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold group/btn transition-colors hover:text-[#A87445]"
      >
        <span>{actionLabel}</span>
        <div
          className={`w-6 h-6 rounded-full border border-[#D9D4CC] flex items-center justify-center transition-all duration-200
                     group-hover/btn:border-[#A87445] group-hover/btn:bg-[#A87445] group-hover/btn:text-white
                     ${isHovered ? "border-[#A87445]" : ""}`}
        >
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}
