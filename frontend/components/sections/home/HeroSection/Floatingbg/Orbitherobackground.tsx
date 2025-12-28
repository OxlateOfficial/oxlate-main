'use client';

import { useEffect, useRef, useState } from 'react';
import { OrbitSystemConfig } from '@/types/orbit';
import { DEFAULT_ORBIT_CONFIG } from '@/config/orbitConfig';
import { renderTechLogo } from '../renderTechLogo';
import './orbit.css';

interface Props {
  config?: OrbitSystemConfig;
}

export default function OrbitHeroBackground({
  config = DEFAULT_ORBIT_CONFIG,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);


  /* ─────────────────────────────────────────────
     1️⃣ Pause when hero leaves viewport
  ───────────────────────────────────────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ─────────────────────────────────────────────
     2️⃣ Pause during scroll (resume after idle)
  ───────────────────────────────────────────── */
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 180);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);

    const listener = () => setReduceMotion(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
    }, []);

  const shouldAnimate =
    config.enableAnimation &&
    isVisible &&
    !isScrolling &&
    !reduceMotion;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="-800 -600 1600 1000"
        className="w-full h-full"
        style={{ minHeight: '80vh' }}
      >
        {/* BACKGROUND */}
        {/* <defs>
          <radialGradient id="orbit-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.35" />
          </radialGradient>
        </defs> */}
{/* 
        <circle
          cx="0"
          cy="0"
          r={config.backgroundRadius}
          fill="url(#orbit-bg)"
        /> */}

        {/* ORBITS */}
        {config.orbits.map((orbit, i) => {
          const directionClass =
            orbit.direction === 1
              ? 'orbit-animate-cw'
              : 'orbit-animate-ccw';

          return (
            <g key={i}>
              {/* STATIC RING */}
              <circle
                cx="0"
                cy="0"
                r={orbit.radius}
                fill={orbit.fillColor}
                opacity={orbit.fillOpacity}
              />
              {/* <circle
                cx="0"
                cy="0"
                r={orbit.radius}
                fill="none"
                stroke={orbit.rimColor}
                strokeWidth={orbit.strokeWidth}
                strokeOpacity={orbit.strokeOpacity}
                strokeDasharray={orbit.dashArray}
              /> */}

              {/* ICON GROUP (ONLY THIS ROTATES) */}
              <g
                className={`
                  ${shouldAnimate ? directionClass : 'orbit-paused'}
                `}
                style={{
                  animationDuration: `${120 / orbit.speed}s`,
                }}
              >
                {Array.from({ length: orbit.elementCount }).map((_, index) => {
                  const angle = (360 / orbit.elementCount) * index;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * orbit.radius;
                  const y = Math.sin(rad) * orbit.radius;

                  const tech =
                    config.techOrder[index % config.techOrder.length];

                  return (
                    <g
                      key={index}
                      transform={`translate(${x}, ${y})`}
                      opacity={orbit.iconOpacity}
                    >
                      <g
                        transform={`translate(${
                          -orbit.iconSize / 2
                        }, ${-orbit.iconSize / 2})`}
                      >
                        {renderTechLogo(
                          tech,
                          orbit.iconSize,
                          orbit.primaryColor,
                          `orbit-${i}-${index}`
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
            </g>
          );
        })}

        {/* CENTER CLEAR */}
        {/* <circle
          cx="0"
          cy="0"
          r={config.centerClearRadius}
          fill="white"
        /> */}
      </svg>
    </div>
  );
}
