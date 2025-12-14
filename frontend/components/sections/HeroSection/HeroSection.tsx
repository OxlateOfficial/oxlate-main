import React from 'react'
import Image from 'next/image';
export default function HomeSection() {
  return (
    <main className="relative w-full font-['Orbitron']">
            {/* HERO SECTION */}
    <section className="relative w-full min-h-[50vh] flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src="/images/icons/Oxlate_blk.svg"
            alt="Oxlate Logo"
            width={120}
            height={120}
            priority
            className="select-none opacity-90 hover:opacity-100 transition-opacity duration-300
            w-68 sm:w-68 md:w-92 h-auto
            "
          />
        </div>
        <p 
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 font-medium -mt-5"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          STRONGLY MODERN
        </p>
        
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-gray-700 tracking-wide px-4">
          A technology-driven platform focused on clean design, performance, and simplicity — built for the future with a strong foundation.
        </p>
      </div>
    </section>
    </main>
  );
}
