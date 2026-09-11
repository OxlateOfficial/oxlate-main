'use client';

import { useEffect, useState } from 'react';
import { NAV_SECTIONS } from './nav.constants';

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('intro');

  useEffect(() => {
    let ticking = false;

    const checkActiveSection = () => {
      const vh = window.innerHeight;

      // 1. 400vh Intro pinned hero check:
      // While the bottom of #intro is still in or above the lower half of the viewport,
      // the user is strictly within the Hero experience.
      const introEl = document.getElementById('intro');
      if (introEl) {
        const introRect = introEl.getBoundingClientRect();
        if (introRect.bottom > vh * 0.35) {
          setActiveId('intro');
          return;
        }
      }

      // 2. Subsequent standard flow sections: evaluate from bottom to top
      const focalLine = vh * 0.45;
      for (let i = NAV_SECTIONS.length - 1; i >= 1; i--) {
        const section = NAV_SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom > vh * 0.1) {
            setActiveId(section.id);
            return;
          }
        }
      }

      // Default fallback
      setActiveId('intro');
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run immediately on mount to ensure clean initial state
    checkActiveSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return activeId;
}
