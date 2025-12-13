export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Oxlate",
    url: "https://oxlate.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://oxlate.in/?service={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
