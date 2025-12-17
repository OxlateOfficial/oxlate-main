type LegalSchemaInput = {
  name: string;
  url: string;
};

export function getLegalPageSchema({ name, url }: LegalSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
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
