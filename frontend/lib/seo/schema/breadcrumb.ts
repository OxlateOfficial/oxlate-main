export function getBreadcrumbSchema(serviceName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://oxlate.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: serviceName,
        item: `https://oxlate.in/services/${slug}`,
      },
    ],
  };
}
