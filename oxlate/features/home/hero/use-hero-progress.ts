"use client";

import { createContext, useContext, useState, useEffect, RefObject } from "react";
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

export interface HeroProgressValues {
  scrollYProgress: MotionValue<number>;
  /** Central X continuous trajectory */
  xPosition: MotionValue<string>;
  xScale: MotionValue<number>;
  xDepartureY: MotionValue<string>;
  xAnnotationsOpacity: MotionValue<number>;

  /** Left editorial intro copy exit choreography [0.08, 0.20] */
  introContentOpacity: MotionValue<number>;
  introContentX: MotionValue<string>;
  introContentMaskImage: MotionValue<string>;
  introContentClipMask: MotionValue<string>;
  introPointerEvents: MotionValue<"none" | "auto">;

  /** Architectural background micro-construction linework [0.08, 0.28] */
  canvasGridOpacity: MotionValue<number>;
  datumHorizontalScale: MotionValue<number>;
  datumVerticalScale: MotionValue<number>;
  constructionRaysProgress: MotionValue<number>;
  gridTicksOpacity: MotionValue<number>;

  /** CAD structural network & orbit guides */
  cadLinesBirth: MotionValue<number>;
  linesProgress: MotionValue<number>;
  linesOpacity: MotionValue<number>;
  orbitGuidesProgress: MotionValue<number>;

  /** Architectural service band transforms */
  bandRotation: MotionValue<number>;
  bandY: MotionValue<string>;
  bandOpacity: MotionValue<number>;

  /** Pre-building & asynchronous zone construction progress values */
  zone01Progress: MotionValue<number>;
  zone01LineProgress: MotionValue<number>;
  zone01TextProgress: MotionValue<number>;

  zone02Progress: MotionValue<number>;
  zone02WebProgress: MotionValue<number>;
  zone02MobileProgress: MotionValue<number>;
  zone02SoftwareProgress: MotionValue<number>;

  hubProgress: MotionValue<number>;
  hubAxiomProgress: MotionValue<number>;

  zone03Progress: MotionValue<number>;
  zone03RailProgress: MotionValue<number>;
  zone03ActiveStep: MotionValue<number>;

  zone04Progress: MotionValue<number>;
  zone04SliceProgress: MotionValue<number>;

  zone05Progress: MotionValue<number>;
  nextCtaProgress: MotionValue<number>;

  /** Stage 3 Command Center overall appearance & departure */
  commandCenterOpacity: MotionValue<number>;
  commandCenterScale: MotionValue<number>;
  commandCenterVisibility: MotionValue<"visible" | "hidden">;
  commandCenterPointerEvents: MotionValue<"none" | "auto">;
  departureConnectorProgress: MotionValue<number>;
  gridExpansion: MotionValue<number>;
}

export function useHeroProgress(
  targetRef?: RefObject<HTMLElement | null>
): HeroProgressValues {
  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Inertial spring dampening to ensure buttery interpolation on tick-based mouse wheels
  const scrollYProgress = useSpring(rawScrollProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.25,
    restDelta: 0.0001,
  });

  // --------------------------------------------------------------------------
  // 1. GIANT X TRAJECTORY: Moves to center and scales down cleanly FIRST
  // Canvas remains empty of zones while X is moving
  // 0.10: x = +36vw, scale = 1.25 (Anchored right with generous visible mark presence)
  // 0.18: x = +24vw, scale = 1.02 (Smooth glide inward begins)
  // 0.26: x = +10vw, scale = 0.62 (Transforming and scaling down)
  // 0.34: x = 0vw,   scale = 0.32 (Docked into center hub coordinate void)
  // 0.34 -> 0.88: scale = 0.32 (Stable Reading Plateau)
  // 0.88 -> 1.00: scale = 0.30 with subtle upward shift leading into next section
  // --------------------------------------------------------------------------
  const xPosition = useTransform(
    scrollYProgress,
    [0.0, 0.10, 0.18, 0.26, 0.34, 0.88, 1.0],
    ["36vw", "36vw", "24vw", "10vw", "0vw", "0vw", "0vw"],
    { clamp: true }
  );

  const xScale = useTransform(
    scrollYProgress,
    [0.0, 0.10, 0.18, 0.26, 0.34, 0.88, 1.0],
    [1.25, 1.25, 1.02, 0.62, 0.235, 0.235, 0.22],
    { clamp: true }
  );

  const xDepartureY = useTransform(
    scrollYProgress,
    [0.0, 0.26, 0.34, 0.88, 1.0],
    ["0px", "0px", "-20px", "-20px", "-36px"],
    { clamp: true }
  );

  // Micro-annotations on X fade out as the mark begins moving inward
  const xAnnotationsOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.16, 1.0],
    [1.0, 1.0, 0.0, 0.0],
    { clamp: true }
  );

  // --------------------------------------------------------------------------
  // 2. STAGE 1 INTRO COPY EXIT: Exits cleanly as X begins moving
  // Soft right-to-left gradient fade cutoff: feathered wipe sweeps 100% -> -30%
  // Drift left: 0 -> -28px, opacity: 1.0 -> 0.0
  // --------------------------------------------------------------------------
  const introContentOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.18, 1.0],
    [1.0, 1.0, 0.0, 0.0],
    { clamp: true }
  );

  const introContentX = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.18, 1.0],
    ["0px", "0px", "-28px", "-28px"],
    { clamp: true }
  );

  const introMaskPercent = useTransform(
    scrollYProgress,
    [0.0, 0.06, 0.18, 1.0],
    [100, 100, -30, -30],
    { clamp: true }
  );

  const introContentMaskImage = useTransform(
    introMaskPercent,
    (pct: number) =>
      `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${pct}%, rgba(0,0,0,0) ${pct + 30}%)`
  );

  // Backward compatibility: keep clip-mask transparent without cutting abruptly
  const introContentClipMask = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const introPointerEvents = useTransform(
    introContentOpacity,
    (v: number) => (v < 0.05 ? ("none" as const) : ("auto" as const))
  );

  // --------------------------------------------------------------------------
  // 2B. ARCHITECTURAL BACKGROUND VISIBLE MICRO-CONSTRUCTION [0.08, 0.30]
  // In Stage 1 [0.0 - 0.08]: Clean ivory background with faint ambient grid (0.12).
  // On scroll [0.08 - 0.28]: The drafting blueprint constructs from scratch:
  // - Grid ramps to full definition (0.12 -> 0.85)
  // - Horizontal datum axis sweeps outward from center across screen (scaleX: 0 -> 1)
  // - Vertical datum axis sweeps outward from center (scaleY: 0 -> 1)
  // - Diagonal projection guide rays sketch outward across quadrants (pathLength: 0 -> 1)
  // - Grid intersection crosshair ticks snap into focus (opacity: 0 -> 1)
  // --------------------------------------------------------------------------
  const canvasGridOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.28, 0.90, 1.0],
    [0.12, 0.12, 0.85, 0.85, 0.35],
    { clamp: true }
  );

  const datumHorizontalScale = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.24, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const datumVerticalScale = useTransform(
    scrollYProgress,
    [0.0, 0.10, 0.26, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const constructionRaysProgress = useTransform(
    scrollYProgress,
    [0.0, 0.12, 0.28, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const gridTicksOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.14, 0.28, 0.90, 1.0],
    [0.0, 0.0, 1.0, 1.0, 0.35],
    { clamp: true }
  );

  // --------------------------------------------------------------------------
  // 3. ARCHITECTURAL SERVICE BAND -> DISSOLVES BEFORE ZONES EMERGE
  // Calibrated trajectory:
  // - Stage 1: -20° angle, center at calc(53vh + 18.2vw) so right edge exits at exactly 53vh
  // - Stage 2: Smoothly eases and levels out to 0° at 50vh
  // - Stage 3: Dissolves cleanly as CAD structure locks into place
  // --------------------------------------------------------------------------
  const bandLevelProgress = useTransform(
    scrollYProgress,
    [0.0, 0.08, 0.28, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const bandRotation = useTransform(bandLevelProgress, (p: number) => {
    // High-order smooth cubic easing: weighted, mechanical deceleration
    const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    return -20 + 20 * ease;
  });

  const bandY = useTransform(bandLevelProgress, (p: number) => {
    const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    const vh = 53 - 3 * ease;
    const vw = 18.2 * (1 - ease);
    if (vw <= 0.01) return `${vh.toFixed(2)}vh`;
    return `calc(${vh.toFixed(2)}vh + ${vw.toFixed(2)}vw)`;
  });

  const bandOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.18, 0.30, 1.0],
    [1.0, 1.0, 0.0, 0.0],
    { clamp: true }
  );

  // --------------------------------------------------------------------------
  // 4. CAD STRUCTURAL NETWORK & CONCENTRIC ORBIT GUIDES
  // Forms as X approaches center [0.26, 0.36]
  // --------------------------------------------------------------------------
  const cadLinesBirth = useTransform(
    scrollYProgress,
    [0.0, 0.24, 0.34, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const linesProgress = useTransform(
    scrollYProgress,
    [0.0, 0.26, 0.36, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const linesOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.26, 0.34, 0.90, 1.0],
    [0.0, 0.0, 1.0, 1.0, 0.35],
    { clamp: true }
  );

  const orbitGuidesProgress = useTransform(
    scrollYProgress,
    [0.0, 0.26, 0.36, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // --------------------------------------------------------------------------
  // 5. SEQUENTIAL ZONE EMERGENCE WITH CLEAR GAPS (01 -> 04 -> 03 -> 02 -> 05)
  // Zones start popping up ONLY when the X logo is almost small at center!
  // --------------------------------------------------------------------------

  // 1st to arise: Zone 01 Identity (Top-Left) [0.34, 0.44]
  const zone01Progress = useTransform(
    scrollYProgress,
    [0.0, 0.34, 0.44, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone01LineProgress = useTransform(
    scrollYProgress,
    [0.0, 0.34, 0.40, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone01TextProgress = useTransform(
    scrollYProgress,
    [0.0, 0.36, 0.44, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // 2nd to arise: Zone 04 Work (Bottom-Left) [0.42, 0.52]
  const zone04Progress = useTransform(
    scrollYProgress,
    [0.0, 0.42, 0.52, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone04SliceProgress = useTransform(
    scrollYProgress,
    [0.0, 0.42, 0.50, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // 3rd to arise: Zone 03 Approach (Middle-Right) [0.50, 0.60]
  const zone03Progress = useTransform(
    scrollYProgress,
    [0.0, 0.50, 0.60, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone03RailProgress = useTransform(
    scrollYProgress,
    [0.0, 0.50, 0.58, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // Bronze active marker index traveling down the rail during construction (0 -> 4)
  const zone03ActiveStep = useTransform(
    scrollYProgress,
    [0.0, 0.50, 0.52, 0.54, 0.56, 0.58, 0.60, 1.0],
    [0, 0, 0, 1, 2, 3, 4, 4],
    { clamp: true }
  );

  // 4th to arise: Zone 02 Capabilities + Center Hub [0.58, 0.68]
  const zone02Progress = useTransform(
    scrollYProgress,
    [0.0, 0.58, 0.68, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone02WebProgress = useTransform(
    scrollYProgress,
    [0.0, 0.58, 0.62, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone02MobileProgress = useTransform(
    scrollYProgress,
    [0.0, 0.61, 0.65, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const zone02SoftwareProgress = useTransform(
    scrollYProgress,
    [0.0, 0.64, 0.68, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const hubProgress = useTransform(
    scrollYProgress,
    [0.0, 0.58, 0.68, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const hubAxiomProgress = useTransform(
    scrollYProgress,
    [0.0, 0.56, 0.64, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // 5th to arise: Zone 05 Principles + Next CTA [0.66, 0.74]
  const zone05Progress = useTransform(
    scrollYProgress,
    [0.0, 0.66, 0.74, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  const nextCtaProgress = useTransform(
    scrollYProgress,
    [0.0, 0.66, 0.74, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // --------------------------------------------------------------------------
  // 6. COMMAND CENTER OVERALL PRESENCE & DEPARTURE RELEASE
  // Transparent stage; individual zones manage their own visibility
  // --------------------------------------------------------------------------
  const commandCenterOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.32, 0.36, 0.90, 1.0],
    [0.0, 0.0, 1.0, 1.0, 0.0],
    { clamp: true }
  );

  const commandCenterScale = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    [1.0, 1.0]
  );

  const commandCenterVisibility = useTransform(
    commandCenterOpacity,
    (v: number) => (v > 0.05 ? ("visible" as const) : ("hidden" as const))
  );

  const commandCenterPointerEvents = useTransform(
    commandCenterOpacity,
    (v: number) => (v > 0.05 ? ("auto" as const) : ("none" as const))
  );

  // Downward departure connector toward Capabilities section [0.88, 0.98]
  const departureConnectorProgress = useTransform(
    scrollYProgress,
    [0.0, 0.88, 0.98, 1.0],
    [0.0, 0.0, 1.0, 1.0],
    { clamp: true }
  );

  // Background CAD datum grid subtle expansion on departure
  const gridExpansion = useTransform(
    scrollYProgress,
    [0.0, 0.88, 1.0],
    [1.0, 1.0, 1.08],
    { clamp: true }
  );

  return {
    scrollYProgress,
    xPosition,
    xScale,
    xDepartureY,
    xAnnotationsOpacity,
    introContentOpacity,
    introContentX,
    introContentMaskImage,
    introContentClipMask,
    introPointerEvents,
    canvasGridOpacity,
    datumHorizontalScale,
    datumVerticalScale,
    constructionRaysProgress,
    gridTicksOpacity,
    bandRotation,
    bandY,
    bandOpacity,
    cadLinesBirth,
    linesProgress,
    linesOpacity,
    orbitGuidesProgress,
    zone01Progress,
    zone01LineProgress,
    zone01TextProgress,
    zone02Progress,
    zone02WebProgress,
    zone02MobileProgress,
    zone02SoftwareProgress,
    hubProgress,
    hubAxiomProgress,
    zone03Progress,
    zone03RailProgress,
    zone03ActiveStep,
    zone04Progress,
    zone04SliceProgress,
    zone05Progress,
    nextCtaProgress,
    commandCenterOpacity,
    commandCenterScale,
    commandCenterVisibility,
    commandCenterPointerEvents,
    departureConnectorProgress,
    gridExpansion,
  };
}

export const HeroProgressContext = createContext<HeroProgressValues | null>(null);

export function useHeroProgressContext(): HeroProgressValues | null {
  return useContext(HeroProgressContext);
}

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
