"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface SliceRevealedFrameProps {
  progress?: MotionValue<number>;
  children: React.ReactNode;
  slicesCount?: number;
  className?: string;
}

/**
 * Architectural Slice-Revealed Frame:
 * Simulates a CAD image generating portion-by-portion across 6 horizontal slices
 * with staggered progressive reveals.
 */
export function SliceRevealedFrame({
  progress,
  children,
  slicesCount = 6,
  className = "",
}: SliceRevealedFrameProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* If no progress is provided, render static content */}
      {!progress ? (
        children
      ) : (
        <div className="relative w-full h-full">
          {Array.from({ length: slicesCount }).map((_, i) => {
            const start = i / (slicesCount + 2);
            const end = (i + 2) / (slicesCount + 2);
            const sliceProgress = useTransform(progress, [start, end], [0, 1], {
              clamp: true,
            });
            const sliceTop = (i / slicesCount) * 100;
            const sliceHeight = 100 / slicesCount;

            return (
              <motion.div
                key={i}
                style={{
                  clipPath: `polygon(0% ${sliceTop}%, 100% ${sliceTop}%, 100% ${sliceTop + sliceHeight}%, 0% ${sliceTop + sliceHeight}%)`,
                  opacity: sliceProgress,
                }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {children}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
