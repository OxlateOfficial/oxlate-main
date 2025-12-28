'use client';

import { useEffect, useRef, useState } from 'react';
import { renderTechLogo } from '@/components/sections/home/HeroSection/renderTechLogo';
import './hero-tech-card-bg.css';

const TECHS = ['python', 'java', 'html', 'github', 'vercel', 'nextjs'] as const;

export default function HeroTechCardBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  // motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const listener = () => setReduceMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // pause when section not visible
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const shouldAnimate = active && !reduceMotion;

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
      aria-hidden
    >
      <div className="hero-tech-card-wrapper">
        {/* row of floating cards */}
        {TECHS.map((tech, idx) => {
          const delay = idx * 0.12;
          const floatClass =
            idx % 2 === 0 ? 'hero-tech-card-float-up' : 'hero-tech-card-float-down';

          return (
            <div
              key={tech}
              className={`hero-tech-card ${shouldAnimate ? floatClass : 'hero-tech-card-paused'}`}
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="hero-tech-card-inner">
                {renderTechLogo(tech, 40, '#111827', `hero-tech-${tech}`)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
