export function getBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Oxlate Blog",
    url: "https://www.oxlate.com/blog",
    description:
      "Insights on web development, automation, and building modern digital products.",
    publisher: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
  };
}
