"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { NAV_SECTIONS } from "./nav.constants";
import { useActiveSection } from "./use-active-section";

interface DialItemProps {
  section: (typeof NAV_SECTIONS)[number];
  isActive: boolean;
  isItemHovered: boolean;
  mouseY: any;
  isExpanded: boolean;
  onHoverItem: (id: string | null) => void;
}

function DialItem({
  section,
  isActive,
  isItemHovered,
  mouseY,
  isExpanded,
  onHoverItem,
}: DialItemProps) {
  const itemRef = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = itemRef.current?.getBoundingClientRect();
    if (!bounds || val === -1) return 1000;
    const itemCenter = bounds.top + bounds.height / 2;
    return val - itemCenter;
  });

  const rawScale = useTransform(distance, [-70, -35, 0, 35, 70], [1, 1.08, 1.22, 1.08, 1]);
  const scale = useSpring(rawScale, { damping: 18, stiffness: 220 });

  const rawX = useTransform(distance, [-50, 0, 50], [0, 6, 0]);
  const x = useSpring(rawX, { damping: 20, stiffness: 240 });

  return (
    <motion.div
      style={{ scale, x }}
      className="origin-left relative flex items-center h-9 select-none"
      onMouseEnter={() => onHoverItem(section.id)}
      onMouseLeave={() => onHoverItem(null)}
    >
      {/* Camouflaged Spreaded White Blur Highlight - NO card, NO crease */}
      {isItemHovered && (
        <motion.div
          layoutId="hover-camouflaged-whiteness"
          className="absolute -inset-x-5 -inset-y-1.5 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 90% at center, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.25) 45%, transparent 80%)",
            filter: "blur(4px)",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      <Link
        ref={itemRef}
        href={`#${section.id}`}
        className="group relative flex items-center h-full text-left z-10 px-1"
        aria-current={isActive ? "true" : undefined}
      >
        {/* Permanent Milestone Number (01, 02, etc.) - NO dot in front */}
        <div className="w-8 h-full flex items-center justify-start shrink-0">
          <span
            className={`font-orbitron text-[11px] tracking-wider transition-colors duration-150 ${
              isActive
                ? "text-[#A87445] font-bold"
                : isItemHovered
                ? "text-[#111111] font-semibold"
                : "text-[#8C8A84] group-hover:text-[#111111]"
            }`}
          >
            {section.index}
          </span>
        </div>

        {/* Section Label: Unfolds on hover */}
        <motion.div
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            x: isExpanded ? 0 : -8,
          }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center pl-1.5 pr-4 whitespace-nowrap"
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          <span
            className={`font-mono text-xs uppercase tracking-widest transition-colors duration-150 ${
              isActive
                ? "text-[#A87445] font-semibold"
                : isItemHovered
                ? "text-[#111111] font-semibold"
                : "text-[#6C6B66] group-hover:text-[#111111] font-medium"
            }`}
          >
            {section.label}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/**
 * Architectural Continuous Scroll Tracker:
 * - Full vertical datum track line visible behind a continuous golden fill.
 * - Golden runner bar (w-[3px] h-6) glides down the line continuously as you scroll.
 * - Permanent section counting milestones (01 to 06) along the line with NO dots in front.
 * - On hover: The surrounding area has a soft faded blur with feathered margins,
 *   and whichever item you hover over has clean soft whiteness behind it.
 */
export function SideDial() {
  const activeSectionId = useActiveSection();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const mouseY = useMotionValue(-1);

  // Global Continuous Scroll Progress [0.0 -> 1.0]
  const { scrollYProgress } = useScroll();

  // Smooth real-time continuous scroll fill height
  const rawFillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fillHeight = useSpring(rawFillHeight, { stiffness: 300, damping: 30 });

  const rawRunnerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const runnerTop = useSpring(rawRunnerTop, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    mouseY.set(-1);
    setIsHovered(false);
    setHoveredItemId(null);
  };

  if (!mounted) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hidden md:flex fixed left-3 lg:left-5 top-1/2 -translate-y-1/2 z-50 layer-l7 select-none items-center"
      aria-label="Continuous Section Scroll Tracker"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Continuous Vertical Scroll Track (Behind the line)                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative flex flex-col justify-between h-[270px]">
        {/* Crease-Free Spreaded Blur Wash with Feathered Gradient Mask */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="absolute -inset-x-16 -inset-y-10 pointer-events-none z-0 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 130% 110% at 0% 50%, rgba(245, 242, 236, 0.90) 0%, rgba(245, 242, 236, 0.45) 50%, transparent 85%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            maskImage:
              "radial-gradient(ellipse 130% 110% at 0% 50%, black 25%, rgba(0, 0, 0, 0.6) 55%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 130% 110% at 0% 50%, black 25%, rgba(0, 0, 0, 0.6) 55%, transparent 90%)",
          }}
        >
          {/* Architectural Paper Grain Texture */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <filter id="drafting-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 1 0"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#drafting-grain)" />
          </svg>
        </motion.div>

        {/* Full-length background hairline datum line */}
        <div className="absolute left-[3px] top-1 bottom-1 w-[1px] bg-[#111111]/15 z-10" />

        {/* Real-time continuous golden scroll coverage line */}
        <motion.div
          style={{ height: fillHeight }}
          className="absolute left-[2px] top-1 w-[3px] bg-[#A87445] origin-top rounded-full shadow-[0_0_8px_rgba(168,116,69,0.55)] will-change-transform z-10"
        />

        {/* Real-time precision golden runner bar (replaces the old dot) */}
        <motion.div
          style={{ top: runnerTop }}
          className="absolute left-[2px] -translate-y-1/2 w-[3px] h-6 rounded-full bg-[#A87445] shadow-[0_0_10px_rgba(168,116,69,0.7)] z-20 pointer-events-none will-change-transform"
        />

        {/* Section Milestones (01 to 06) stationed along the line */}
        <div className="relative z-10 flex flex-col justify-between h-full pl-3.5">
          {NAV_SECTIONS.map((section) => (
            <DialItem
              key={section.id}
              section={section}
              isActive={activeSectionId === section.id}
              isItemHovered={hoveredItemId === section.id}
              mouseY={mouseY}
              isExpanded={isHovered}
              onHoverItem={setHoveredItemId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
