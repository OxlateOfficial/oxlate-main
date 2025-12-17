type ProjectSchemaInput = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export function getProjectSchema({
  title,
  description,
  url,
  image,
}: ProjectSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    image,
    author: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
  };
}
