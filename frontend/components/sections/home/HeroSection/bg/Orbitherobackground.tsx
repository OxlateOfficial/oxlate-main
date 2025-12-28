'use client';

import { useEffect, useRef, useId } from 'react';
import { OrbitSystemConfig } from '@/types/orbit';
import { DEFAULT_ORBIT_CONFIG } from '@/config/orbitConfig';
import { renderTechLogo } from './renderTechLogo';

interface Props {
  config?: OrbitSystemConfig;
}

export default function OxlateOrbitBackground({
  config = DEFAULT_ORBIT_CONFIG,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number | null>(null);
  const rotations = useRef<number[]>(config.orbits.map(() => 0));
  const baseId = useId();

  useEffect(() => {
    if (!config.enableAnimation) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const animate = () => {
      config.orbits.forEach((orbit, i) => {
        const group = svgRef.current?.querySelector(
          `#orbit-group-${i}`
        ) as SVGGElement | null;

        if (!group) return;

        rotations.current[i] += orbit.speed * orbit.direction;
        group.setAttribute(
          'transform',
          `rotate(${rotations.current[i]})`
        );

      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [config]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="-800 -600 1600 1000"
        className="w-full h-full"
        style={{ minHeight: '80vh' }}
      >
        {/* BACKGROUND DEPTH */}
        <defs>
          <radialGradient id="orbit-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.35" />
          </radialGradient>

          {/* SHADOW FILTER */}
          <filter id="orbit-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <circle
          cx="0"
          cy="0"
          r={config.backgroundRadius}
          fill="url(#orbit-bg)"
        />

        {/* STAGED ORBITS (outer → inner) */}
        {[...config.orbits].reverse().map((orbit, revIndex) => {
          const i = config.orbits.length - 1 - revIndex;

          return (
            <g key={i} transform={`translate(0 ${orbit.depthOffset})`}>
              <g transform={`translate(0 ${orbit.lift})`}>
                {/* SHADOW */}
                <circle
                  cx="0"
                  cy={orbit.shadowOffset}
                  r={orbit.radius}
                  fill={orbit.shadowColor}
                  opacity="0.18"
                  filter="url(#orbit-shadow)"
                />

                {/* BASE DISC */}
                <circle
                  cx="0"
                  cy="0"
                  r={orbit.radius}
                  fill={orbit.fillColor}
                />

                {/* RIM */}
                <circle
                  cx="0"
                  cy="0"
                  r={orbit.radius}
                  fill="none"
                  stroke={orbit.rimColor}
                  strokeWidth={orbit.strokeWidth}
                  strokeOpacity={orbit.strokeOpacity}
                  strokeDasharray={orbit.dashArray}
                />
              </g>

              {/* FLOATING ELEMENTS */}
              <g id={`orbit-group-${i}`}>
                {Array.from({ length: orbit.elementCount }).map((_, index) => {
                  const angle = (360 / orbit.elementCount) * index;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * orbit.radius;
                  const y = Math.sin(rad) * orbit.radius;

                  const tech =
                    config.techOrder[index % config.techOrder.length];
                  const logoId = `${baseId}-orbit-${i}-el-${index}`;

                  return (
                        <g
                        key={logoId}
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
                          logoId
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
            </g>
          );
        })}

        {/* CENTER PLATFORM */}
        <circle
          cx="0"
          cy="0"
          r={config.centerClearRadius}
          fill="white"
        />
        <circle
          cx="0"
          cy="0"
          r={config.centerClearRadius}
          fill="none"
          stroke="#E5E7EB"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}
