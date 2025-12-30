"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/layout/Providers";
import GridBg from "./gridbg/GridBg";
export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Fade calculations (tuned) ----
  const contentOpacity = Math.max(0, 1 - scrollY / 220);
  const contentTranslate = Math.min(20, scrollY / 10);

  const sectionOpacity = Math.max(0.15, 1 - scrollY / 420);
  const bgOpacity = Math.max(0, 1 - scrollY / 520);

  return (
    <main
      className={`relative w-full font-[Orbitron] overflow-hidden transition-colors duration-200 ${
        isDark ? "bg-dark text-white" : "bg-soft text-primary"
      }`}
      style={{
        opacity: sectionOpacity,
        transition: "opacity 0.15s linear",
      }}
    >

      {/* <div className="absolute inset-0 pointer-events-none">
        <GridBg
          columns={16}
          rows={10}
          stroke="#000"
          strokeOpacity={0.06}
          strokeWidth={0.4}
          className="w-full h-full"
        />
      </div> */}
      {/* SEO TEXT */}
      <section className="sr-only">
        <h1>Oxlate Web Development Company</h1>
        <p>
          Oxlate is a web development and automation company based in India,
          providing mobile-first websites, ERP systems, custom software and
          SEO-friendly digital solutions for local and global businesses.
        </p>
      </section>

      {/* HERO CONTENT */}
      <section
        className="
          relative w-full
          min-h-[55vh]
          sm:min-h-[50vh]
          flex items-center justify-center
          px-4
          py-14 sm:py-20
        "
      >
        <div
          className="
            max-w-xl sm:max-w-2xl mx-auto text-center
            mt-[10vh] sm:mt-[10vh] md:mt-[8vh]
            space-y-5 sm:space-y-6
            will-change-transform
          "
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslate}px)`,
            transition: "opacity 0.15s linear, transform 0.15s linear",
          }}
        >
          {/* LOGO */}
          <div className="flex justify-center">
            <Image
              src="/images/icons/Oxlate_blk.svg"
              alt="Oxlate Logo"
              width={120}
              height={120}
              priority
              className="select-none w-54 sm:w-72 md:w-94 h-auto"
            />
          </div>

          {/* TAGLINE */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-medium -mt-4 text-brand">
            STRONGLY MODERN
          </p>

          {/* DESCRIPTION */}
          <p className="max-w-md sm:max-w-xl mx-auto text-xs sm:text-base leading-relaxed tracking-wide px-2 sm:px-4 text-muted">
            We design and build secure, modern digital solutions that are simple
            to use, tailored to your business, and built to last.
          </p>
        </div>
      </section>
    </main>
  );
}
