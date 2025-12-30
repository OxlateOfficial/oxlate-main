"use client";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import { trackEvent } from "@/lib/analytics/events";
import { useRouter } from "next/navigation";

export default function ServiceSelector() {
  const { service, setService } = useServiceSelection();
  const router = useRouter();

  return (
    <div className="sticky top-20 z-40 mx-4 sm:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="card bg-white/95 backdrop-blur-sm p-2">
          <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
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
                  aria-pressed={isActive}
                  className={`
                    px-6 py-3 text-sm font-medium rounded-lg whitespace-nowrap
                    transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    ${
                      isActive
                        ? "bg-dark text-white shadow-md"
                        : "text-secondary hover:bg-soft"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}