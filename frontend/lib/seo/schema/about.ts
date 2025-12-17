type AboutSchemaInput = {
  name: string;
  url: string;
  description: string;
};

export function getAboutPageSchema({
  name,
  url,
  description,
}: AboutSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${name}`,
    url,
    description,
    mainEntity: {
      "@type": "Organization",
      name,
      url,
    },
  };
}
