"use client";

import React, { useState, useEffect } from "react";
import { NAV_SECTIONS, NavSection } from "./nav.constants";

export function MobileStatusTicker() {
  const [activeSection, setActiveSection] = useState("01");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.querySelector(`#${NAV_SECTIONS[i].id}`);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(NAV_SECTIONS[i].index);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem: NavSection =
    NAV_SECTIONS.find((item) => item.index === activeSection) || NAV_SECTIONS[0];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden pointer-events-auto layer-l6">
      <a
        href={`#${activeItem.id}`}
        className="flex items-center gap-2 bg-[#F5F2EC]/95 backdrop-blur-md border border-[#D9D4CC] rounded-[4px] px-3.5 py-1.5 font-mono text-[11px] tracking-widest uppercase text-[#111111] font-medium"
      >
        <span className="w-1.5 h-1.5 bg-[#A87445] rotate-45 inline-block" />
        <span>
          {activeItem.index} / 06 • {activeItem.label}
        </span>
      </a>
    </div>
  );
}
