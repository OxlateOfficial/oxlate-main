type ServiceSchemaInput = {
  name: string;
  description: string;
  slug: string;
};

export function getServiceSchema({
  name,
  description,
  slug,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://oxlate.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description,
    url: `https://oxlate.in/services/${slug}`,
  };
}
