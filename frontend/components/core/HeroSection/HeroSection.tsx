import React from 'react'

export default function HomeSection() {
  return (
    <main className="relative w-full font-['Orbitron']">
            {/* HERO SECTION */}
      <section className="relative min-h-[80vh] bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl min-h-[40vh] text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-black">
            OXLATE
          </h1>
          <p className="mt-4 text-lg uppercase tracking-widest text-gray-600">
            Strongly Modern
          </p>
          <p className="mt-6 text-gray-700 leading-loose tracking-widest text-sm">
            Oxlate is a modern technology-driven platform focused on clean design,
            performance, and simplicity — built for the future with a strong
            foundation.
          </p>
        </div>
      </section>
    </main>
  );
}
