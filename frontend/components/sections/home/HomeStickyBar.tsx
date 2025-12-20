"use client";

import { useStickyState } from "@/hooks/useStickyState";
import  ServiceSelector  from "@/components/layout/Header/SelectionState";
import MainNavigation  from "@/components/layout/Header/MainNavigation";

export default function HomeStickyBar() {
  const { sentinelRef, isStuck } = useStickyState();

  return (
    <>
      {/* Sentinel lives ABOVE the bar */}
      <div ref={sentinelRef} className="h-px" />

      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="mx-auto  h-[64] max-w-6xl px-4 py-4 relative ">

          {/* Service selector */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isStuck ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ServiceSelector />
          </div>

          {/* Main navigation */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isStuck ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <MainNavigation />
          </div>

        </nav>
      </div>
    </>
  );
}
