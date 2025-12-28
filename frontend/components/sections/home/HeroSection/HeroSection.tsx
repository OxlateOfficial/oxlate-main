"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/layout/Providers";
// import HeroGlobeBackground from './globe/HeroGlobeBackground';
import OrbitHeroBackground from './bg/Orbitherobackground';

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative w-full font-[Orbitron]  bg-white/70">
      {/* <HeroGlobeBackground /> */}
      <OrbitHeroBackground />
      {/* SEO TEXT (unchanged) */}
      <section className="sr-only">
        <h1>Oxlate Web Development Company</h1>
        <p>
          Oxlate is a web development and automation company based in India, providing
          mobile-first websites, ERP systems, custom software and SEO-friendly digital
          solutions for local and global businesses.
        </p>
      </section>

      {/* HERO */}
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
            max-w-xl
            sm:max-w-2xl
            mx-auto
            text-center
            mt-[149]
            space-y-5 sm:space-y-6
          "
        >

          {/* LOGO */}
          <div className="flex justify-center">
            <Image
              src={
                isDark
                  ? "/images/icons/Oxlate_wht.svg"
                  : "/images/icons/Oxlate_blk.svg"
              }
              alt="Oxlate Logo"
              width={120}
              height={120}
              priority
              className="
                select-none
                transition-opacity duration-300
                w-54 sm:w-72 md:w-94
                h-auto
              "
            />
          </div>

          {/* TAGLINE */}
          <p
            className={`
              text-[10px] sm:text-xs
              uppercase tracking-[0.28em]
              font-medium
              -mt-4
              ${isDark ? "text-gray-300" : "text-gray-500"}
            `}
          >
            STRONGLY MODERN
          </p>

          {/* DESCRIPTION */}
          <p
            className={`
              max-w-md
              sm:max-w-xl
              mx-auto
              text-sm sm:text-base
              leading-relaxed
              tracking-wide
              
              px-2 sm:px-4
              ${isDark ? "text-gray-200" : "text-gray-700"}
            `}
          >
            We design and build secure, modern digital solutions that are simple to use,
            tailored to your business, and built to last.
          </p>
        </div>
      </section>
    </main>
    
  );
}
