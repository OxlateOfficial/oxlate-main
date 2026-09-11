"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

const CAD_GLYPHS = ["0", "1", "7", "X", "3", "8", "F", "2", "4", "9", "A", "E", "■", "/"];

interface GenerativeTextProps {
  text: string;
  mode?: "plotter" | "decode" | "line-mask";
  progress?: MotionValue<number>;
  threshold?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delayMs?: number;
  lines?: string[];
}

/**
 * Architectural Generative Text:
 * Replaces flat opacity fades with authentic CAD drafting reveals:
 * - 'plotter': Horizontal laser slit clip-path wipe tied directly to scroll progress
 * - 'line-mask': Staggered line emergence from behind an architectural hairline datum
 * - 'decode': Technical instrument matrix roll cycling through CAD glyphs to lock characters
 */
export function GenerativeText({
  text,
  mode = "plotter",
  progress,
  threshold = 0.1,
  className = "",
  as: Component = "span",
  delayMs = 0,
  lines,
}: GenerativeTextProps) {
  // Fallback progress if none passed
  const defaultProgress = useTransform(() => 1);
  const activeProgress = progress ?? defaultProgress;

  // Mode 1: Laser Plotter Horizontal Clip Wipe (tied directly to scroll progress)
  const clipPath = useTransform(
    activeProgress,
    [0.0, 1.0],
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  // Mode 2: Line Mask Vertical Emergence
  const lineY = useTransform(activeProgress, [0.0, 1.0], ["105%", "0%"]);
  const lineOpacity = useTransform(activeProgress, [0.0, 0.4, 1.0], [0, 0.7, 1]);

  // Mode 3: Matrix Character Decoding
  const [displayText, setDisplayText] = useState(text);
  const [hasStarted, setHasStarted] = useState(false);
  const [locked, setLocked] = useState(false);
  const iterationRef = useRef(0);

  // Monitor progress threshold to trigger matrix decode
  useMotionValueEvent(activeProgress, "change", (latest) => {
    if (latest >= threshold && !hasStarted && !locked) {
      setHasStarted(true);
    } else if (latest < threshold && hasStarted) {
      // Reset if user scrolls back up
      setHasStarted(false);
      setLocked(false);
      setDisplayText(text);
    }
  });

  useEffect(() => {
    if (mode !== "decode" || !hasStarted || locked) return;

    let timerId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timerId = setTimeout(() => {
      iterationRef.current = 0;
      intervalId = setInterval(() => {
        iterationRef.current += 1;
        const current = iterationRef.current;
        const lockSpeed = 2.5;

        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              if (index < Math.floor(current / lockSpeed)) {
                return char;
              }
              return CAD_GLYPHS[Math.floor(Math.random() * CAD_GLYPHS.length)];
            })
            .join("")
        );

        if (current >= text.length * lockSpeed + 4) {
          clearInterval(intervalId);
          setDisplayText(text);
          setLocked(true);
        }
      }, 40);
    }, delayMs);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [mode, hasStarted, locked, text, delayMs]);

  if (mode === "plotter") {
    return (
      <motion.span
        style={{ clipPath }}
        className={`inline-block will-change-[clip-path] ${className}`}
      >
        {text}
      </motion.span>
    );
  }

  if (mode === "line-mask") {
    const textLines = lines || text.split("\n");
    return (
      <Component className={`flex flex-col ${className}`}>
        {textLines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-0.5">
            <motion.span
              style={{ y: lineY, opacity: lineOpacity }}
              className="block will-change-transform"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // mode === "decode"
  return (
    <Component
      className={`font-mono will-change-contents transition-opacity duration-150 ${
        hasStarted || !progress ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {displayText}
    </Component>
  );
}
