"use client";

type Props = {
  features: string[];
};

export default function ServiceFeaturesCard({ features }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-200">
      <h3 
        className="text-lg sm:text-xl font-semibold mb-6 text-black tracking-wide"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        What You Get
      </h3>
      
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
              <svg 
                className="w-3 h-3 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}