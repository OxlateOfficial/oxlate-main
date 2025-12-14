"use client";

type Props = {
  price: string;
  time: string;
  ctaText: string;
};

export default function ServicePricingCard({ price, time, ctaText }: Props) {
  return (
    <div className="bg-black rounded-2xl p-6 sm:p-8 shadow-md text-white flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2">
            Starting From
          </p>
          <p 
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {price}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2">
            Delivery Time
          </p>
          <p className="text-xl sm:text-2xl font-semibold">
            {time}
          </p>
        </div>
      </div>

      <button 
        className="mt-6 w-full bg-white text-black py-3 sm:py-4 px-6 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 tracking-wide"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {ctaText}
      </button>
    </div>
  );
}