type PricingService = {
  id: string;
  title: string;
  range: string;
};

type PricingSchemaInput = {
  services: PricingService[];
};

export function getPricingSchema({ services }: PricingSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing | Oxlate",
    url: "https://oxlate.com/pricing",
    description:
      "Transparent, value-based pricing for web development, app development, and automation services by Oxlate.",
    mainEntity: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      provider: {
        "@type": "Organization",
        name: "Oxlate",
        url: "https://oxlate.com",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          description: service.range,
        },
        availability: "https://schema.org/InStock",
      },
    })),
  };
}
