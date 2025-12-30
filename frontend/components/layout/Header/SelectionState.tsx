"use client";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import { trackEvent } from "@/lib/analytics/events";
import { useRouter } from "next/navigation";

export default function ServiceSelector() {
  const { service, setService } = useServiceSelection();
  const router = useRouter();

  return (
    <div
      className="
        sticky top-2 z-50
        mx-2 sm:mx-0
        bg-white/95 backdrop-blur-md
        border border-gray-200
        rounded-[22px] sm:rounded-3xl
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        overflow-x-auto
        scrollbar-hide
      "
    >
      <nav
        className="
          px-3 sm:px-4
          py-3 sm:py-4
        "
      >
        <div
          className="
            flex items-center gap-2 sm:gap-4
            min-w-max
            justify-start sm:justify-center
          "
        >
          {SERVICES.map((item) => {
            const isActive = service === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setService(item.id);
                  router.push(`/?service=${item.id}`, { scroll: false });
                  trackEvent("service_select", { service: item.id });
                }}
                className={`
                  px-4 sm:px-6
                  py-2.5 sm:py-3
                  text-[12px] sm:text-sm
                  font-medium
                  rounded-full
                  whitespace-nowrap
                  transition-all duration-200
                  ${
                    isActive
                      ? `
                        text-black
                        bg-white
                        border border-black
                        shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                      `
                      : `
                        text-gray-400
                        border border-transparent
                        hover:text-gray-700
                        hover:border-gray-300
                        hover:bg-gray-50
                      `
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
