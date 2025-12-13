"use client";

import { SERVICES } from "@/lib/constants/services";
import { useServiceSelection } from "@/hooks/useServiceSelection";

export default function ServiceSelector() {
  const { service, setService } = useServiceSelection();

  return (
    <section className="relative z-20 -mt-32 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-xl border border-gray-200">

        {/* Selection Bar */}
        <nav className="flex justify-center gap-4 md:gap-6 py-6">
          {SERVICES.map((item) => {
            const isActive = service === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setService(item.id)}
                className={`relative px-4 py-2 text-sm md:text-base font-medium transition
                  ${isActive ? "text-black" : "text-gray-400 hover:text-gray-600"}
                `}
              >
                {/* Circle */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-black"></span>
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

      </div>
    </section>
  );
}
