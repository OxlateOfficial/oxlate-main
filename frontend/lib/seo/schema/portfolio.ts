type PortfolioSchemaInput = {
  url: string;
};

export function getPortfolioSchema({ url }: PortfolioSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Oxlate Portfolio",
    url,
    description:
      "A collection of web development, automation, and software projects built by Oxlate.",
    isPartOf: {
      "@type": "WebSite",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
    about: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
  };
}
