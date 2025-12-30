"use client";

import React from "react";

type GridBgProps = {
  /** Total width of the SVG coordinate system */
  width?: number;
  /** Total height of the SVG coordinate system */
  height?: number;

  /** Number of vertical columns */
  columns?: number;
  /** Number of horizontal rows */
  rows?: number;

  /** Line color */
  stroke?: string;
  /** Line opacity */
  strokeOpacity?: number;
  /** Line thickness */
  strokeWidth?: number;

  /** Optional className for positioning */
  className?: string;
};

export default function GridBg({
  width = 100,
  height = 100,
  columns = 12,
  rows = 12,
  stroke = "#000000",
  strokeOpacity = 0.08,
  strokeWidth = 0.5,
  className = "",
}: GridBgProps) {
  const colStep = width / columns;
  const rowStep = height / rows;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Vertical lines */}
      {Array.from({ length: columns + 1 }).map((_, i) => {
        const x = i * colStep;
        return (
          <line
            key={`v-${i}`}
            x1={x}
            y1={0}
            x2={x}
            y2={height}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
          />
        );
      })}

      {/* Horizontal lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => {
        const y = i * rowStep;
        return (
          <line
            key={`h-${i}`}
            x1={0}
            y1={y}
            x2={width}
            y2={y}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
          />
        );
      })}
    </svg>
  );
}
