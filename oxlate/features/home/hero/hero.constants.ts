/**
 * Hero continuous scroll timeline threshold ranges.
 * Normalized scroll progress values (0.0 to 1.0) within the sticky Hero scroll container.
 *
 * Mental model: ONE PINNED ENVIRONMENT evolving continuously without visible stage boundaries.
 *
 * - 0.00 - 0.10: ARRIVAL
 * - 0.08 - 0.25: STAGE 1 CONTENT EXIT + CAD STRUCTURE BIRTH
 * - 0.18 - 0.42: TRANSFORMATION / CONVERGENCE (Bar -> Axis, X -> Center, Pre-building)
 * - 0.28 - 0.55: STAGE 3 ASYNCHRONOUS CONSTRUCTION
 * - 0.45 - 0.82: FULLY ALIVE / READING PLATEAU
 * - 0.82 - 1.00: DEPARTURE (Connector extends toward Capabilities, release into page)
 */

export const HERO_TIMELINE = {
  // Phase intervals
  ARRIVAL: [0.0, 0.10] as const,
  STAGE_1_EXIT: [0.08, 0.20] as const,
  BAND_LEVEL: [0.08, 0.20] as const,
  BAND_MORPH: [0.18, 0.26] as const,
  X_TRAJECTORY: [0.10, 0.34] as const,
  ORBITS_AND_CAD: [0.26, 0.36] as const,

  // Sequential Zone Emergence with Generous Gaps (01 -> 04 -> 03 -> 02 -> 05)
  ZONE_01_IDENTITY: [0.34, 0.44] as const,
  ZONE_04_WORK: [0.42, 0.52] as const,
  ZONE_03_APPROACH: [0.50, 0.60] as const,
  ZONE_02_CAPABILITIES: [0.58, 0.68] as const,
  CENTER_HUB: [0.58, 0.68] as const,
  ZONE_05_PRINCIPLES: [0.66, 0.74] as const,
  NEXT_CTA: [0.66, 0.74] as const,

  // Stable Interactive Reading Plateau
  READING_PLATEAU: [0.74, 0.88] as const,

  // Departure into site narrative
  DEPARTURE: [0.88, 1.00] as const,
} as const;

export const HERO_SCROLL_THRESHOLDS = {
  ARRIVAL: HERO_TIMELINE.ARRIVAL,
  STAGE_1_EXIT: HERO_TIMELINE.STAGE_1_EXIT,
  READING_PLATEAU: HERO_TIMELINE.READING_PLATEAU,
  DEPARTURE: HERO_TIMELINE.DEPARTURE,
} as const;

