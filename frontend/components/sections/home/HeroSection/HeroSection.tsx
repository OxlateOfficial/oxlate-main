import React from 'react'
import Image from 'next/image';
export default function HomeSection() {
  return (
    <main className="relative w-full font-['Orbitron']">
      {/* Accessible hidden content for SEO / screen readers */}
      <section className="sr-only">
        <h1>Oxlate Web Development Company</h1>
        <p>
          Oxlate is a web development and automation company based in India, providing
          mobile-first websites, ERP systems, custom software and SEO-friendly digital
          solutions for local and global businesses.
        </p>
      </section>

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
         We design and build secure, modern digital solutions that are simple to use, tailored to your business, and built to last.
        </p>
      </div>
    </section>
    </main>
  );
}
