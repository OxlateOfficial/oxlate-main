"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OxlateHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-gray-800 overflow-hidden flex items-center justify-center"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-gray-800 pointer-events-none" />

      {/* Large Oxlate Logo Background - Faded */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.03]"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(1.2)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative w-[80%] h-[80%] max-w-[1400px] max-h-[1400px]">
          <Image
            src="/images/icons/Oxlate_wht.svg"
            alt=""
            fill
            className="object-contain animate-[float_20s_ease-in-out_infinite]"
            priority
          />
        </div>
      </div>

      {/* Orbital System Background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          className="absolute w-[120%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer orbit ring */}
          <circle
            cx="600"
            cy="600"
            r="500"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
            className="animate-[spin_100s_linear_infinite]"
            style={{ transformOrigin: "center" }}
          />

          {/* Middle orbit ring */}
          <circle
            cx="600"
            cy="600"
            r="380"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
            className="animate-[spin_70s_linear_infinite_reverse]"
            style={{ transformOrigin: "center" }}
          />

          {/* Inner orbit ring */}
          <circle
            cx="600"
            cy="600"
            r="260"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            filter="url(#glow)"
            className="animate-[spin_50s_linear_infinite]"
            style={{ transformOrigin: "center" }}
          />

          {/* Orbital nodes */}
          <g className="animate-[spin_100s_linear_infinite]" style={{ transformOrigin: "600px 600px" }}>
            <circle cx="600" cy="100" r="4" fill="white" opacity="0.6" filter="url(#glow)" />
            <circle cx="1100" cy="600" r="3" fill="white" opacity="0.4" filter="url(#glow)" />
          </g>

          <g className="animate-[spin_70s_linear_infinite_reverse]" style={{ transformOrigin: "600px 600px" }}>
            <circle cx="980" cy="600" r="4" fill="white" opacity="0.5" filter="url(#glow)" />
            <circle cx="220" cy="600" r="4" fill="white" opacity="0.5" filter="url(#glow)" />
          </g>

          {/* Grid lines */}
          <line x1="600" y1="120" x2="600" y2="1080" stroke="white" strokeWidth="0.5" opacity="0.1" strokeDasharray="8,15" />
          <line x1="120" y1="600" x2="1080" y2="600" stroke="white" strokeWidth="0.5" opacity="0.1" strokeDasharray="8,15" />

          {/* Connecting arcs */}
          <path
            d="M 600 340 Q 740 470 600 600"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.15"
            strokeDasharray="4,8"
            className="animate-[pulse_5s_ease-in-out_infinite]"
          />
          <path
            d="M 600 860 Q 460 730 600 600"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.15"
            strokeDasharray="4,8"
            className="animate-[pulse_5s_ease-in-out_infinite]"
            style={{ animationDelay: "2.5s" }}
          />

          {/* Center core */}
          <circle cx="600" cy="600" r="6" fill="white" opacity="0.7" filter="url(#glow)">
            <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Secondary layer - Floating grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
            transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 border border-white/10 rounded-full mb-16 backdrop-blur-sm bg-white/[0.02] animate-[fadeIn_0.8s_ease-out]">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] tracking-[0.35em] text-white/60 uppercase font-light">
              Strongly Modern
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-10 animate-[fadeIn_1s_ease-out_0.2s_both]">
            <div className="flex flex-col gap-1 sm:gap-2">
              {/* Line 1 */}
              <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap">
                <span className="text-6xl sm:text-3xl md:text-3xl lg:text-[1rem] font-extralight text-white tracking-tight leading-none">
                  We build
                </span>
              </div>

              {/* Line 2 - Outlined word */}
              <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap">
                <span
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[1rem] font-extralight tracking-tight leading-none"
                  style={{
                    WebkitTextStroke: "1.5px white",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  digital
                </span>
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[1rem] font-extralight text-white tracking-tight leading-none">
                  systems
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[1rem] font-extralight text-white tracking-tight leading-none">
                  that scale
                </span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-[15px] sm:text-base md:text-lg text-white/40 leading-relaxed mb-14 font-light tracking-wide animate-[fadeIn_1s_ease-out_0.4s_both]">
            We design and build secure, modern digital systems — websites, ERP platforms,
            and custom software — engineered for clarity, performance, and long-term growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-[fadeIn_1s_ease-out_0.6s_both]">
            <button className="group relative px-10 py-4 bg-white text-black font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-[15px]">
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button className="group px-10 py-4 border border-white/20 text-white font-medium tracking-wide backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 text-[15px]">
              <span className="flex items-center gap-2">
                See Our Work
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Bottom indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-[fadeIn_1s_ease-out_1s_both]">
            <div className="flex flex-col items-center gap-3 opacity-30 hover:opacity-60 transition-opacity duration-500 cursor-pointer">
              <span className="text-[10px] text-white tracking-[0.3em] uppercase font-light">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-[slideDown_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(48px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}