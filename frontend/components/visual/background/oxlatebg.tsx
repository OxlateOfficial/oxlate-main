"use client";

import { useEffect, useState } from "react";

export default function OxlateBackground() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ✅ Move UP as page scrolls DOWN (slow pace)
  const translateY = isMobile ? -offset * 0.06 : -offset * 0.45;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-0"
        style={{
          transform: `translateY(-10%) translateY(${translateY}px)`,
          willChange: "transform",
        }}
      >
        <span
          className="
            text-[34vh]
            md:text-[42vh]
            lg:text-[60vh]
            font-extrabold
            tracking-tight
            text-black/[0.10]
            select-none
            whitespace-nowrap
          "
          style={{
            fontFamily: "Orbitron, sans-serif",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "translateX(35%) ,",
          }}
        >
          OXLATE
        </span>
      </div>
    </div>
  );
}
