"use client";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import { trackEvent } from "@/lib/analytics/events";
export default function ServiceSelector() {
  const { service, setService } = useServiceSelection();

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
          {SERVICES.map((item) => {
            const isActive = service === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setService(item.id);
                  trackEvent("service_select", { service: item.id });
                }}
                className={`
                  relative px-4 sm:px-6 py-2.5 sm:py-3
                  text-xs sm:text-sm font-medium rounded-full
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "text-black border-2 border-black bg-white"
                      : "text-gray-400 hover:text-gray-700 border-2 border-transparent hover:border-gray-300"
                  }
                `}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
