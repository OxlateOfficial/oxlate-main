export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Oxlate",
    url: "https://www.oxlate.com/contact",
    about: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
  };
}
