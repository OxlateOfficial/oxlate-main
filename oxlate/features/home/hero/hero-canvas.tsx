"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHeroProgressContext, useIsDesktop } from "./use-hero-progress";

export function HeroCanvas() {
  const progress = useHeroProgressContext();
  const isDesktop = useIsDesktop();

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none layer-l0 bg-[#F5F2EC] overflow-hidden">
      {/* L1 Hairline CAD Grid: Starts faint in Stage 1, intensely constructs into crisp blueprint on scroll */}
      <motion.div
        style={
          isDesktop && progress
            ? {
                opacity: progress.canvasGridOpacity,
                scale: progress.gridExpansion,
              }
            : { opacity: 0.85 }
        }
        className="absolute inset-0 w-full h-full layer-l1 origin-center will-change-[opacity,transform]"
      >
        <Image
          src="/assets/hero-datum-grid.svg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
      </motion.div>

      {/* L1.1 Dynamic Architectural Datum Beams (Sweeping outward from center on scroll [0.08, 0.28]) */}
      {isDesktop && progress && (
        <>
          {/* Architectural Datum Beams with Precision Text Knockout (Line cuts off for text with clearance space) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none layer-l1"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <mask id="datumBeamKnockout">
                {/* White: Visible linework */}
                <rect x="0" y="0" width="1440" height="900" fill="white" />
                {/* Black Knockouts: Cut out line cleanly wherever text or hubs reside */}
                {/* Left Column Zone 04 (Work / Independent Projects) */}
                <rect x="0" y="320" width="460" height="300" fill="black" />
                {/* Right Column Zone 03 (Approach) */}
                <rect x="980" y="320" width="460" height="300" fill="black" />
                {/* Top Center Column (IDEAS ALIGN ... EST 2025) */}
                <rect x="520" y="30" width="400" height="210" fill="black" />
                {/* Center Void & Oxlate Hub */}
                <circle cx="720" cy="450" r="190" fill="black" />
                {/* Bottom Center CTA & Metadata */}
                <rect x="490" y="650" width="460" height="230" fill="black" />
              </mask>
            </defs>

            {/* Masked Horizontal Datum Beam */}
            <motion.g
              mask="url(#datumBeamKnockout)"
              style={{ scaleX: progress.datumHorizontalScale, transformOrigin: "center" }}
            >
              <line
                x1="0"
                y1="450"
                x2="1440"
                y2="450"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.32"
              />
              <line
                x1="48"
                y1="450"
                x2="1392"
                y2="450"
                stroke="#A87445"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
            </motion.g>

            {/* Masked Vertical Datum Beam */}
            <motion.g
              mask="url(#datumBeamKnockout)"
              style={{ scaleY: progress.datumVerticalScale, transformOrigin: "center" }}
            >
              <line
                x1="720"
                y1="0"
                x2="720"
                y2="900"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.32"
              />
              <line
                x1="720"
                y1="48"
                x2="720"
                y2="852"
                stroke="#A87445"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
            </motion.g>

            {/* Precision CAD Boundary Ticks where datum lines terminate before text */}
            <motion.g style={{ opacity: progress.gridTicksOpacity }}>
              {/* Left Zone boundary tick */}
              <line x1="80" y1="444" x2="80" y2="456" stroke="#A87445" strokeWidth="1.2" strokeOpacity="0.6" />
              {/* Right Zone boundary tick */}
              <line x1="1360" y1="444" x2="1360" y2="456" stroke="#A87445" strokeWidth="1.2" strokeOpacity="0.6" />
              {/* Top Center boundary tick */}
              <line x1="714" y1="50" x2="726" y2="50" stroke="#A87445" strokeWidth="1.2" strokeOpacity="0.6" />
            </motion.g>

            {/* Top-Right Projection Ray */}
            <motion.line
              x1="720"
              y1="450"
              x2="1400"
              y2="70"
              stroke="#A87445"
              strokeWidth="0.85"
              strokeOpacity="0.28"
              strokeDasharray="6 6"
              style={{ pathLength: progress.constructionRaysProgress }}
            />
            {/* Bottom-Right Projection Ray */}
            <motion.line
              x1="720"
              y1="450"
              x2="1400"
              y2="830"
              stroke="#111111"
              strokeWidth="0.85"
              strokeOpacity="0.22"
              strokeDasharray="6 6"
              style={{ pathLength: progress.constructionRaysProgress }}
            />
            {/* Top-Left Projection Ray */}
            <motion.line
              x1="720"
              y1="450"
              x2="40"
              y2="70"
              stroke="#111111"
              strokeWidth="0.85"
              strokeOpacity="0.22"
              strokeDasharray="6 6"
              style={{ pathLength: progress.constructionRaysProgress }}
            />
            {/* Bottom-Left Projection Ray */}
            <motion.line
              x1="720"
              y1="450"
              x2="40"
              y2="830"
              stroke="#A87445"
              strokeWidth="0.85"
              strokeOpacity="0.28"
              strokeDasharray="6 6"
              style={{ pathLength: progress.constructionRaysProgress }}
            />

            {/* Precision Coordinate Intersections */}
            <motion.g style={{ opacity: progress.gridTicksOpacity }}>
              {/* Quadrant Crosshairs */}
              <path
                d="M 352 225 H 368 M 360 217 V 233"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <path
                d="M 1072 225 H 1088 M 1080 217 V 233"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <path
                d="M 352 675 H 368 M 360 667 V 683"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <path
                d="M 1072 675 H 1088 M 1080 667 V 683"
                stroke="#111111"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
            </motion.g>
          </svg>
        </>
      )}
    </div>
  );
}
