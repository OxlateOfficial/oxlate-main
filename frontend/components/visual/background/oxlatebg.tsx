"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/icons/Oxlate_blk.svg";

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

  // Vertical parallax (gentle on mobile)
  const translateY = isMobile ? -offset * 0.06 : -offset * 0.45;

  // Horizontal offset (keep to right)
  const translateX = isMobile ? "translateX(50%)" : "translateX(48%)";
  const baseTranslateY = isMobile ? "translateY(-10%)" : "translateY(40%)";
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-0"
        style={{
          transform: `
            ${baseTranslateY}
            translateY(${translateY}px)
            ${translateX}
            rotate(90deg)
          `,
          transformOrigin: "center",
          willChange: "transform",
        }}
      >
        <Image
          src={Logo}
          alt=""
          className="
            opacity-[0.08]
            w-[100vh]
            sm:w-[140vh]
            md:w-[180vh]
            lg:w-[210vh]
            max-w-none
            select-none
          "
        />
      </div>
    </div>
  );
}
