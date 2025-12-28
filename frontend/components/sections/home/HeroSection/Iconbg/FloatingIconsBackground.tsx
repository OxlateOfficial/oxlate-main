'use client';

import { useEffect, useRef, useState } from 'react';
import { OrbitSystemConfig } from '@/types/icons';
import { DEFAULT_ORBIT_CONFIG } from '@/config/floatingIconConfig';
import { renderTechLogo } from '../renderTechLogo';
import './floating-icons.css';

interface Props {
  config?: OrbitSystemConfig;
}

export default function OrbitHeroBackground({
  config = DEFAULT_ORBIT_CONFIG,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // pause when hero leaves viewport
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

  // pause during scroll
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

  // respect prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const listener = () => setReduceMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const shouldAnimate =
    config.enableAnimation && isVisible && !isScrolling && !reduceMotion;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="-600 -450 1200 700"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full md:h-[110%] lg:h-full"
        >
        {config.orbits.map((orbit, i) => {
            const directionClass =
            orbit.direction === 1 ? 'orbit-animate-cw' : 'orbit-animate-ccw';

            return (
            <g key={i}>
                <g
                className={shouldAnimate ? directionClass : 'orbit-paused'}
                style={{ animationDuration: `${40/ orbit.speed}s` }}
                >
                {Array.from({ length: orbit.elementCount }).map((_, index) => {
                    const angle = (360 / orbit.elementCount) * index;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * orbit.radius;
                    const y = Math.sin(rad) * orbit.radius;
                    const tech = config.techOrder[index % config.techOrder.length];

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
                            `orbit-${i}-${index}`,
                        )}
                        </g>
                    </g>
                    );
                })}
                </g>
            </g>
            );
        })}
        </svg>
    </div>
  );
}
