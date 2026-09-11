"use client";

import React, { useState, useEffect, RefObject } from "react";
import { motion } from "framer-motion";
import { useHeroProgressContext } from "./use-hero-progress";

interface HeroSystemConnectorNetworkProps {
  activeZone?: string | null;
  containerRef?: RefObject<HTMLDivElement | null>;
}

interface Point {
  x: number;
  y: number;
}

/**
 * Inward Radial Drafting Vector Network & Concentric CAD Convergence
 * - Sections originate calculated angular vectors directed inward toward the Oxlate center.
 * - Central radial fade mask dissolves lines softly around the Oxlate logo (zero overlap).
 * - Bottle-fill stroke reveal from section toward center.
 * - Real-time responsive recalculation via ResizeObserver.
 */
export function HeroSystemConnectorNetwork({
  activeZone,
  containerRef,
}: HeroSystemConnectorNetworkProps) {
  const heroProgress = useHeroProgressContext();

  const [dims, setDims] = useState<{ width: number; height: number }>({
    width: 1380,
    height: 750,
  });

  const [anchors, setAnchors] = useState<{
    z01: Point;
    z02: Point;
    z03: Point;
    z04: Point;
    z05: Point;
    hub: Point;
  }>({
    z01: { x: 380, y: 130 },
    z02: { x: 1000, y: 130 },
    z03: { x: 1000, y: 390 },
    z04: { x: 380, y: 520 },
    z05: { x: 1000, y: 580 },
    hub: { x: 690, y: 375 },
  });

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const updateMeasurements = () => {
      const cRect = container.getBoundingClientRect();
      const width = cRect.width || 1380;
      const height = cRect.height || 750;
      const hx = width / 2;
      const hy = height / 2;

      setDims({ width, height });

      const getPoint = (id: string, defX: number, defY: number): Point => {
        const el = container.querySelector(`[data-anchor="${id}"]`);
        if (!el) return { x: defX, y: defY };
        const eRect = el.getBoundingClientRect();
        return {
          x: eRect.left + eRect.width / 2 - cRect.left,
          y: eRect.top + eRect.height / 2 - cRect.top,
        };
      };

      setAnchors({
        z01: getPoint("zone-01", 380, 130),
        z02: getPoint("zone-02", width - 380, 130),
        z03: getPoint("zone-03", width - 380, hy),
        z04: getPoint("zone-04", 380, height - 200),
        z05: getPoint("zone-05", width - 380, height - 160),
        hub: { x: hx, y: hy },
      });
    };

    updateMeasurements();

    const ro = new ResizeObserver(() => {
      updateMeasurements();
    });
    ro.observe(container);

    window.addEventListener("resize", updateMeasurements, { passive: true });

    // Re-check after layout paint
    const t = setTimeout(updateMeasurements, 250);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateMeasurements);
      clearTimeout(t);
    };
  }, [containerRef]);

  const { hub, z01, z02, z03, z04, z05 } = anchors;
  const { width, height } = dims;

  // Calculated angular CAD paths leading from each section inward toward the center:
  // Zone 01 (Identity): Right edge of Identity -> horizontal lead -> 45° angle towards center
  const z01ElbowX = Math.min(z01.x + 45, hub.x - 90);
  const pathZ01 = `M ${z01.x} ${z01.y} L ${z01ElbowX} ${z01.y} L ${hub.x - 60} ${hub.y - 50} L ${hub.x} ${hub.y}`;

  // Zone 04 (Work): Right edge of Work -> horizontal lead -> 45° angle towards center
  const z04ElbowX = Math.min(z04.x + 45, hub.x - 90);
  const pathZ04 = `M ${z04.x} ${z04.y} L ${z04ElbowX} ${z04.y} L ${hub.x - 60} ${hub.y + 50} L ${hub.x} ${hub.y}`;

  // Zone 02 (Capabilities): Left edge of Capabilities -> horizontal lead -> 45° angle towards center
  const z02ElbowX = Math.max(z02.x - 45, hub.x + 90);
  const pathZ02 = `M ${z02.x} ${z02.y} L ${z02ElbowX} ${z02.y} L ${hub.x + 60} ${hub.y - 50} L ${hub.x} ${hub.y}`;

  // Zone 03 (Approach): Left edge of Approach -> horizontal lead -> straight ray towards center
  const z03ElbowX = Math.max(z03.x - 40, hub.x + 80);
  const pathZ03 = `M ${z03.x} ${z03.y} L ${z03ElbowX} ${z03.y} L ${hub.x} ${hub.y}`;

  // Zone 05 (Why Oxlate): Left edge of Why Oxlate -> horizontal lead -> 45° angle towards center
  const z05ElbowX = Math.max(z05.x - 45, hub.x + 90);
  const pathZ05 = `M ${z05.x} ${z05.y} L ${z05ElbowX} ${z05.y} L ${hub.x + 60} ${hub.y + 50} L ${hub.x} ${hub.y}`;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Radial Logo Exclusion Mask: Lines dissolve softly before touching the central Oxlate logo */}
        <radialGradient id="centerLogoExclusion" cx={hub.x} cy={hub.y} r="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="black" />
          <stop offset="60%" stopColor="black" />
          <stop offset="85%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>

        <mask id="logoFadeMask">
          <rect x="0" y="0" width={width} height={height} fill="white" />
          <circle cx={hub.x} cy={hub.y} r="145" fill="url(#centerLogoExclusion)" />
        </mask>
      </defs>

      {/* 1. Concentric CAD Orbit Guides centered around Central Oxlate Mark */}
      <g opacity="0.6">
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="120"
          stroke="#D9D4CC"
          strokeWidth="0.75"
          strokeDasharray="4 4"
          style={heroProgress ? { pathLength: heroProgress.orbitGuidesProgress } : undefined}
        />
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="190"
          stroke="#D9D4CC"
          strokeWidth="0.75"
          strokeDasharray="5 5"
          strokeOpacity="0.55"
          style={heroProgress ? { pathLength: heroProgress.orbitGuidesProgress } : undefined}
        />
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="280"
          stroke="#D9D4CC"
          strokeWidth="0.5"
          strokeDasharray="6 6"
          strokeOpacity="0.35"
          style={heroProgress ? { pathLength: heroProgress.orbitGuidesProgress } : undefined}
        />
      </g>


      {/* 3. Inward Vector Paths (Masked by Logo Exclusion Mask so they smoothly dissolve at center) */}
      <g mask="url(#logoFadeMask)">
        {/* ======================================================== */}
        {/* ZONE 01 VECTOR (Identity: Top-Left -> Inward to Center) */}
        {/* ======================================================== */}
        <g>
          <motion.path
            d={pathZ01}
            style={heroProgress ? { pathLength: heroProgress.zone01Progress } : undefined}
            stroke={activeZone === "01" ? "#A87445" : "#D9D4CC"}
            strokeWidth={activeZone === "01" ? 1.75 : 0.85}
            strokeOpacity={activeZone === "01" ? 1 : 0.75}
            className="transition-colors duration-200"
          />
          {activeZone === "01" && (
            <motion.path
              d={pathZ01}
              stroke="#A87445"
              strokeWidth="2.5"
              strokeDasharray="14 90"
              animate={{ strokeDashoffset: [-104, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          )}
        </g>

        {/* ======================================================== */}
        {/* ZONE 04 VECTOR (Work: Lower-Left -> Inward to Center) */}
        {/* ======================================================== */}
        <g>
          <motion.path
            d={pathZ04}
            style={heroProgress ? { pathLength: heroProgress.zone04Progress } : undefined}
            stroke={activeZone === "04" ? "#A87445" : "#D9D4CC"}
            strokeWidth={activeZone === "04" ? 1.75 : 0.85}
            strokeOpacity={activeZone === "04" ? 1 : 0.75}
            className="transition-colors duration-200"
          />
          {activeZone === "04" && (
            <motion.path
              d={pathZ04}
              stroke="#A87445"
              strokeWidth="2.5"
              strokeDasharray="14 90"
              animate={{ strokeDashoffset: [-104, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          )}
        </g>

        {/* ======================================================== */}
        {/* ZONE 02 VECTOR (Capabilities: Top-Right -> Inward to Center) */}
        {/* ======================================================== */}
        <g>
          <motion.path
            d={pathZ02}
            style={heroProgress ? { pathLength: heroProgress.zone02Progress } : undefined}
            stroke={activeZone === "02" ? "#A87445" : "#D9D4CC"}
            strokeWidth={activeZone === "02" ? 1.75 : 0.85}
            strokeOpacity={activeZone === "02" ? 1 : 0.75}
            className="transition-colors duration-200"
          />
          {activeZone === "02" && (
            <motion.path
              d={pathZ02}
              stroke="#A87445"
              strokeWidth="2.5"
              strokeDasharray="14 90"
              animate={{ strokeDashoffset: [-104, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          )}
        </g>

        {/* ======================================================== */}
        {/* ZONE 03 VECTOR (Approach: Mid-Right -> Inward to Center) */}
        {/* ======================================================== */}
        <g>
          <motion.path
            d={pathZ03}
            style={heroProgress ? { pathLength: heroProgress.zone03Progress } : undefined}
            stroke={activeZone === "03" ? "#A87445" : "#D9D4CC"}
            strokeWidth={activeZone === "03" ? 1.75 : 0.85}
            strokeOpacity={activeZone === "03" ? 1 : 0.75}
            className="transition-colors duration-200"
          />
          {activeZone === "03" && (
            <motion.path
              d={pathZ03}
              stroke="#A87445"
              strokeWidth="2.5"
              strokeDasharray="14 90"
              animate={{ strokeDashoffset: [-104, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          )}
        </g>

        {/* ======================================================== */}
        {/* ZONE 05 VECTOR (Why Oxlate: Lower-Right -> Inward to Center) */}
        {/* ======================================================== */}
        <g>
          <motion.path
            d={pathZ05}
            style={heroProgress ? { pathLength: heroProgress.zone05Progress } : undefined}
            stroke={activeZone === "05" ? "#A87445" : "#D9D4CC"}
            strokeWidth={activeZone === "05" ? 1.75 : 0.85}
            strokeOpacity={activeZone === "05" ? 1 : 0.75}
            className="transition-colors duration-200"
          />
          {activeZone === "05" && (
            <motion.path
              d={pathZ05}
              stroke="#A87445"
              strokeWidth="2.5"
              strokeDasharray="14 90"
              animate={{ strokeDashoffset: [-104, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          )}
        </g>
      </g>

      {/* 4. Intersection Node Pips & Micro-Labels */}
      {/* Zone 01 Elbow Pip */}
      <circle
        cx={z01ElbowX}
        cy={z01.y}
        r={activeZone === "01" ? 3.5 : 2.5}
        fill={activeZone === "01" ? "#A87445" : "#111111"}
        className="transition-all duration-200"
      />
      <text
        x={z01ElbowX + 8}
        y={z01.y + 14}
        className="font-mono text-[8px] uppercase tracking-widest fill-[#8C8A84] select-none pointer-events-none"
      >
        SYS.01 // INWARD
      </text>

      {/* Zone 04 Elbow Pip */}
      <circle
        cx={z04ElbowX}
        cy={z04.y}
        r={activeZone === "04" ? 3.5 : 2.5}
        fill={activeZone === "04" ? "#A87445" : "#111111"}
        className="transition-all duration-200"
      />
      <text
        x={z04ElbowX + 8}
        y={z04.y - 8}
        className="font-mono text-[8px] uppercase tracking-widest fill-[#8C8A84] select-none pointer-events-none"
      >
        SYS.04 // PROJECTS
      </text>

      {/* Zone 02 Elbow Pip */}
      <circle
        cx={z02ElbowX}
        cy={z02.y}
        r={activeZone === "02" ? 3.5 : 2.5}
        fill={activeZone === "02" ? "#A87445" : "#111111"}
        className="transition-all duration-200"
      />

      {/* Zone 05 Elbow Pip */}
      <circle
        cx={z05ElbowX}
        cy={z05.y}
        r={activeZone === "05" ? 3.5 : 2.5}
        fill={activeZone === "05" ? "#A87445" : "#111111"}
        className="transition-all duration-200"
      />

      {/* Orbit Intersection Pips */}
      <circle cx={hub.x} cy={hub.y - 120} r="2.5" fill="#A87445" />
      <circle cx={hub.x} cy={hub.y + 120} r="2.5" fill="#A87445" />
      <circle cx={hub.x - 120} cy={hub.y} r="2.5" fill="#A87445" />
      <circle cx={hub.x + 120} cy={hub.y} r="2.5" fill="#A87445" />
    </svg>
  );
}
