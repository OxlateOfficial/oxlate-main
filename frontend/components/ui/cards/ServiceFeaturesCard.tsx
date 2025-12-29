"use client";

type Props = {
  features: readonly string[];
};

export default function ServiceFeaturesCard({ features }: Props) {
  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 min-h-[280px] sm:min-h-[320px] flex flex-col">
      {/* Decorative corner elements - subtle and minimal */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="40" fill="black" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="60" width="40" height="40" fill="black" />
        </svg>
      </div>

      {/* Header with separator */}
      <div className="mb-5 sm:mb-6 pb-4 border-b border-gray-200">
        <h3
          className="text-sm sm:text-base font-bold text-black tracking-[0.1em] uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          What You Get
        </h3>
      </div>

      {/* Features List */}
      <ul className="space-y-3 sm:space-y-3.5 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 group">
            {/* Enhanced Checkmark Icon with hover effect */}
            <span className="shrink-0 w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-black flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeWidth={3.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>

            {/* Feature Text */}
            <span className="text-[13px] sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}