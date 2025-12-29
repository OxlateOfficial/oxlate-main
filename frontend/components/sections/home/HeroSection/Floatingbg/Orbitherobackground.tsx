'use client';

import { useEffect, useRef, useId, useState } from 'react';
import { OrbitSystemConfig } from '@/types/orbit';
import { DEFAULT_ORBIT_CONFIG } from '@/config/orbitConfig';
import { renderTechLogo } from '../renderTechLogo';

interface Props {
  config?: OrbitSystemConfig;
}

export default function OrbitHeroBackground({
  config = DEFAULT_ORBIT_CONFIG,
}: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const baseId = useId();

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  // Important: initialize as false so server and first client render match (avoids hydration mismatches).
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // color progression per orbit (inner -> outer)
  const ORBIT_TINTS = [
    '#FFFFFF',
    '#F4F5F3',
    '#E4E6E2',
    '#CFD2CD',
    '#B9BDB8',
    '#9FA49E',
  ];

  // Intersection observer + prefers-reduced-motion + resize + scroll throttling + visibility
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const mediaListener = () => setReduceMotion(media.matches);
    media.addEventListener('change', mediaListener);

    const el = wrapperRef.current;
    const obs = el
      ? new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
          threshold: 0.15,
        })
      : null;
    if (el && obs) obs.observe(el);

    let scrollTimer: number | undefined;
    const onScroll = () => {
      setIsScrolling(true);
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => setIsScrolling(false), 180);
    };

    const onResize = () => setIsMobile(window.innerWidth <= 768);

    const onVisibility = () => {
      if (document.visibilityState !== 'visible') {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      media.removeEventListener('change', mediaListener);
      if (obs && el) obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, []);

  // Apply CSS rotation to each orbit group and control play state
  useEffect(() => {
    if (!svgRef.current) return;

    const prefersReduced = reduceMotion;
    // Build a stable list (keep original indices) so ids don't shift between server/client
    const orbitsWithIndex = config.orbits.map((orbit, idx) => ({ orbit, idx }));
    const visibleOrbitsWithIndex = isMobile
      ? orbitsWithIndex.filter(({ idx }) => idx < config.mobileMaxOrbits)
      : orbitsWithIndex;

    visibleOrbitsWithIndex.forEach(({ orbit, idx }, visibleIdx) => {
      const group = svgRef.current!.querySelector(
        `#orbit-group-${idx}`
      ) as SVGGElement | null;
      if (!group) return;

      const rotationDuration = Math.max(1, 6 / Math.max(orbit.speed, 0.0003)); // seconds/rev
      const direction = orbit.direction === -1 ? 'reverse' : 'normal';
      const shouldPlay =
        config.enableAnimation &&
        !prefersReduced &&
        isVisible &&
        !isScrolling &&
        document.visibilityState === 'visible';

      group.style.animation = `orbit-rotate ${rotationDuration}s linear infinite ${direction}`;
      group.style.transformOrigin = '0 0';
      group.style.animationPlayState = shouldPlay ? 'running' : 'paused';
    });
  }, [config, isVisible, isScrolling, reduceMotion, isMobile]);

  // Determine visible orbits (respect mobileMaxOrbits). Keep original indices for stable ids.
  const orbitsWithIndex = config.orbits.map((orbit, idx) => ({ orbit, idx }));
  const visibleOrbitsWithIndex = isMobile
    ? orbitsWithIndex.filter(({ idx }) => idx < config.mobileMaxOrbits)
    : orbitsWithIndex;

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          [id^="orbit-group-"] { animation: none !important; }
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="-800 -600 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ minHeight: '90vh' }}
      >
        {/* NOTE: removed heavy background gradient & circle to reduce paint cost on mobile */}

        {[...visibleOrbitsWithIndex].reverse().map(({ orbit, idx }, revIndex) => {
          const visibleLen = visibleOrbitsWithIndex.length;
          const i = visibleLen - 1 - revIndex; // visible-order index for tint/opacity progression
          const effectiveIconSize = isMobile
            ? Math.max(18, Math.round(orbit.iconSize * 0.8))
            : orbit.iconSize;

          const tint = ORBIT_TINTS[i] ?? orbit.primaryColor;

          // dimming progression: inner -> subtle, outer -> brighter
          const iconOpacity = isMobile
            ? Math.min(0.6, orbit.iconOpacity)
            : Math.max(
                0,
                Math.min(1, orbit.iconOpacity * (0.85 - i * 0.08))
              );

          return (
            <g key={idx} transform={`translate(0 ${orbit.depthOffset})`}>
              <g transform={`translate(0 ${orbit.lift})`}>
                {/* minimal base ring (transparent) to keep layout but avoid heavy fills */}
                <circle cx="0" cy="0" r={orbit.radius} fill={tint} />
              </g>

              <g id={`orbit-group-${idx}`}>
                {Array.from({ length: orbit.elementCount }).map((_, index) => {
                  const angle = (360 / orbit.elementCount) * index;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * orbit.radius;
                  const y = Math.sin(rad) * orbit.radius;

                  const tech = config.techOrder[index % config.techOrder.length];
                  // use original orbit idx in id so it's stable across renders
                  const logoId = `${baseId}-orbit-${idx}-el-${index}`;

                  return (
                    <g
                      key={logoId}
                      transform={`translate(${x}, ${y})`}
                      opacity={iconOpacity}
                    >
                      <g
                        transform={`translate(${ -effectiveIconSize / 2 }, ${ -effectiveIconSize / 2 })`}
                      >
                        {renderTechLogo(
                          tech,
                          effectiveIconSize,
                          tint,
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

        <circle cx="0" cy="0" r={config.centerClearRadius} fill="white" />
      </svg>
    </div>
  );
}
