type BlogPostSchemaInput = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
};

export function getBlogPostSchema({
  title,
  description,
  slug,
  publishedAt,
}: BlogPostSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Oxlate",
      url: "https://www.oxlate.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.oxlate.com/blog/${slug}`,
    },
  };
}
