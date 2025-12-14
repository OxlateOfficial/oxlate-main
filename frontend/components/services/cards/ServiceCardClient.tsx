"use client";

import { SERVICE_DATA } from "@/lib/constants/services";
import ServiceFeaturesCard from "@/components/ui/cards/ServiceFeaturesCard";
import ServicePricingCard from "@/components/ui/cards/ServicePricingCard";
type Props = {
  service:string;
  // card: {
  //   title: string;
  //   subtitle: string;
  //   features: string[];
  //   startingPrice: string;
  //   deliveryTime: string;
  //   ctaText: string;
  // };
};

export default function ServiceCardClient( {service}:Props) {
  const card = SERVICE_DATA[service as keyof typeof SERVICE_DATA] || SERVICE_DATA["web-development"];
  return (
<section className="relative w-full px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div 
          className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {card.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 tracking-wide">
              {card.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceFeaturesCard features={card.features} />
            <ServicePricingCard 
              price={card.startingPrice}
              time={card.deliveryTime}
              ctaText={card.ctaText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
