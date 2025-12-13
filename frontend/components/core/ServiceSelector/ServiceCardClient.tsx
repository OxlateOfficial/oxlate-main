"use client";

import ServiceFeaturesCard from "@/components/ui/cards/ServiceFeaturesCard";
import ServicePricingCard from "@/components/ui/cards/ServicePricingCard";

type Props = {
  card: {
    title: string;
    subtitle: string;
    features: string[];
    startingPrice: string;
    deliveryTime: string;
    ctaText: string;
  };
};

export default function ServiceCardClient({ card }: Props) {
  return (
    <section className="relative z-20 mt-24 px-4">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
        <ServiceFeaturesCard
          title={card.title}
          subtitle={card.subtitle}
          features={card.features}
        />

        <ServicePricingCard
          price={card.startingPrice}
          time={card.deliveryTime}
          ctaText={card.ctaText}
        />
      </div>
    </section>
  );
}
