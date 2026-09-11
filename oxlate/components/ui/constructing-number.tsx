"use client";

import React, { useState, useEffect, useRef } from "react";

interface ConstructingNumberProps {
  value: string;
  isConstructing?: boolean;
  className?: string;
  speedMs?: number;
}

const GLYPHS = ["0", "1", "7", "X", "3", "8", "F", "2", "4", "9", "A", "E"];

/**
 * Architectural Constructing Number:
 * Cycles through random CAD glyphs and resolves with a mechanical lock-in
 * sensation to simulate real-time number synthesis.
 */
export function ConstructingNumber({
  value,
  isConstructing = true,
  className = "",
  speedMs = 45,
}: ConstructingNumberProps) {
  const [displayText, setDisplayText] = useState(value);
  const [locked, setLocked] = useState(false);
  const iterationRef = useRef(0);

  useEffect(() => {
    if (!isConstructing || locked) {
      setDisplayText(value);
      return;
    }

    let intervalId: NodeJS.Timeout;
    iterationRef.current = 0;

    intervalId = setInterval(() => {
      iterationRef.current += 1;

      // Gradually lock characters from left to right
      const lockThreshold = 8;
      const progress = iterationRef.current;

      setDisplayText((prev) =>
        value
          .split("")
          .map((char, index) => {
            if (index < Math.floor(progress / 3)) {
              return char;
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (progress >= lockThreshold + value.length * 3) {
        clearInterval(intervalId);
        setDisplayText(value);
        setLocked(true);
      }
    }, speedMs);

    return () => clearInterval(intervalId);
  }, [value, isConstructing, locked, speedMs]);

  return (
    <span className={`font-orbitron tabular-nums select-none ${className}`}>
      {displayText}
    </span>
  );
}
