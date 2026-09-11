"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface GenerativeLineProps {
  orientation?: "horizontal" | "vertical";
  origin?: "left" | "right" | "center" | "top" | "bottom";
  progress?: MotionValue<number>;
  className?: string;
  color?: string;
  thickness?: number;
}

/**
 * Architectural Hairline Rule:
 * Physically draws across (scaleX) or down (scaleY) along the drafting plane
 * rather than fading in from opacity.
 */
export function GenerativeLine({
  orientation = "horizontal",
  origin = "left",
  progress,
  className = "",
  color = "#111111",
  thickness = 1,
}: GenerativeLineProps) {
  const defaultProgress = useTransform(() => 1);
  const activeProgress = progress ?? defaultProgress;

  const scale = useTransform(activeProgress, [0.0, 1.0], [0, 1]);
  const opacity = useTransform(activeProgress, [0.0, 0.2, 1.0], [0, 0.7, 1]);

  const originMap: Record<string, string> = {
    left: "0% 50%",
    right: "100% 50%",
    center: "50% 50%",
    top: "50% 0%",
    bottom: "50% 100%",
  };

  if (orientation === "vertical") {
    return (
      <motion.div
        style={{
          scaleY: scale,
          opacity,
          transformOrigin: originMap[origin] || "50% 0%",
          width: `${thickness}px`,
          backgroundColor: color,
        }}
        className={`will-change-transform ${className}`}
      />
    );
  }

  return (
    <motion.div
      style={{
        scaleX: scale,
        opacity,
        transformOrigin: originMap[origin] || "0% 50%",
        height: `${thickness}px`,
        backgroundColor: color,
      }}
      className={`will-change-transform ${className}`}
    />
  );
}
