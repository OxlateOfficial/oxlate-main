"use client";

import { motion } from "framer-motion";

type CircleBgProps = {
  variant?: "light" | "dark" | "gradient";
  density?: "low" | "medium" | "high";
  animate?: boolean;
};

export default function CircleBg({
  variant = "light",
  density = "medium",
  animate = true,
}: CircleBgProps) {
  // Color schemes based on variant
  const getColors = () => {
    switch (variant) {
      case "light":
        return {
          bg: "bg-gray-50",
          circles: [
            "rgba(229, 231, 235, 0.4)", // gray-200
            "rgba(209, 213, 219, 0.3)", // gray-300
            "rgba(243, 244, 246, 0.5)", // gray-100
            "rgba(229, 231, 235, 0.35)", // gray-200
          ],
        };
      case "dark":
        return {
          bg: "bg-gray-900",
          circles: [
            "rgba(55, 65, 81, 0.3)", // gray-700
            "rgba(75, 85, 99, 0.25)", // gray-600
            "rgba(31, 41, 55, 0.4)", // gray-800
            "rgba(55, 65, 81, 0.35)", // gray-700
          ],
        };
      case "gradient":
        return {
          bg: "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200",
          circles: [
            "rgba(229, 231, 235, 0.5)",
            "rgba(209, 213, 219, 0.4)",
            "rgba(243, 244, 246, 0.6)",
            "rgba(229, 231, 235, 0.45)",
          ],
        };
      default:
        return {
          bg: "bg-gray-50",
          circles: [
            "rgba(229, 231, 235, 0.4)",
            "rgba(209, 213, 219, 0.3)",
            "rgba(243, 244, 246, 0.5)",
            "rgba(229, 231, 235, 0.35)",
          ],
        };
    }
  };

  const colors = getColors();

  // Circle configurations based on density
  const getCircles = () => {
    const baseCircles = [
      // Large circles
      { size: 600, x: "10%", y: "15%", color: colors.circles[0], blur: 80, duration: 25 },
      { size: 500, x: "75%", y: "20%", color: colors.circles[1], blur: 70, duration: 30 },
      { size: 550, x: "50%", y: "60%", color: colors.circles[2], blur: 75, duration: 28 },
      
      // Medium circles
      { size: 400, x: "20%", y: "70%", color: colors.circles[3], blur: 60, duration: 22 },
      { size: 350, x: "85%", y: "65%", color: colors.circles[0], blur: 55, duration: 26 },
      { size: 380, x: "45%", y: "10%", color: colors.circles[1], blur: 58, duration: 24 },
    ];

    const mediumCircles = [
      { size: 300, x: "65%", y: "80%", color: colors.circles[2], blur: 50, duration: 20 },
      { size: 280, x: "15%", y: "45%", color: colors.circles[3], blur: 48, duration: 23 },
    ];

    const smallCircles = [
      { size: 250, x: "90%", y: "35%", color: colors.circles[0], blur: 45, duration: 18 },
      { size: 220, x: "30%", y: "85%", color: colors.circles[1], blur: 40, duration: 21 },
      { size: 240, x: "70%", y: "50%", color: colors.circles[2], blur: 42, duration: 19 },
    ];

    switch (density) {
      case "low":
        return baseCircles.slice(0, 4);
      case "medium":
        return [...baseCircles, ...mediumCircles];
      case "high":
        return [...baseCircles, ...mediumCircles, ...smallCircles];
      default:
        return [...baseCircles, ...mediumCircles];
    }
  };

  const circles = getCircles();

  return (
    <div className={`absolute inset-0 overflow-hidden ${colors.bg}`}>
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/30 pointer-events-none" />

      {/* Floating circles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {circles.map((circle, index) => (
            <filter key={`blur-${index}`} id={`blur-${index}`}>
              <feGaussianBlur in="SourceGraphic" stdDeviation={circle.blur} />
            </filter>
          ))}
        </defs>

        {circles.map((circle, index) => {
          if (animate) {
            return (
              <motion.circle
                key={index}
                cx={circle.x}
                cy={circle.y}
                r={circle.size / 2}
                fill={circle.color}
                filter={`url(#blur-${index})`}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                animate={{
                  x: [0, 20, -15, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.05, 0.98, 1],
                }}
                transition={{
                  duration: circle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1],
                }}
              />
            );
          }

          return (
            <circle
              key={index}
              cx={circle.x}
              cy={circle.y}
              r={circle.size / 2}
              fill={circle.color}
              filter={`url(#blur-${index})`}
            />
          );
        })}
      </svg>

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}