'use client';

import { useEffect, useRef, useState } from 'react';
import { FloatingIconConfig } from '@/types/icons';
import { DEFAULT_ORBIT_CONFIG } from '@/config/floatingIconConfig';
import { renderTechLogo } from '../renderTechLogo';
import './floating-icons.css';

interface Props {
  config?: FloatingIconConfig;
}

export default function OrbitHeroBackground({
  config = DEFAULT_ORBIT_CONFIG,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const listener = () => setReduceMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const shouldAnimate = config.enableAnimation && active && !reduceMotion;

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
        <svg
        viewBox="-400 -300 800 600" // centered viewBox
        className="w-full h-full"
        >
        {config.layers.map((layer, i) => {
          const dirClass =
            layer.direction === 1
              ? 'orbit-animate-cw'
              : 'orbit-animate-ccw';

          return (
            <g
              key={i}
              className={shouldAnimate ? dirClass : 'orbit-paused'}
              style={{
                animationDuration: `${180 / layer.speed}s`,
              }}
            >
              {Array.from({ length: layer.elementCount }).map((_, index) => {
                const angle = (360 / layer.elementCount) * index;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * layer.radius;
                const y = Math.sin(rad) * layer.radius;

                const tech =
                  config.techOrder[index % config.techOrder.length];

                return (
                  <g
                    key={index}
                    transform={`translate(${x}, ${y})`}
                    opacity={layer.iconOpacity}
                  >
                    <g
                      transform={`translate(${
                        -layer.iconSize / 2
                      }, ${-layer.iconSize / 2})`}
                    >
                      {renderTechLogo(
                        tech,
                        layer.iconSize,
                        '#9CA3AF',
                        `orbit-${i}-${index}`
                      )}
                    </g>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
