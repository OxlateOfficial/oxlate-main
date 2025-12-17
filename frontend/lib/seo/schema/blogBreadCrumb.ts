type BlogBreadcrumbInput = {
  postTitle?: string;
  postSlug?: string;
};

export function getBlogBreadcrumbSchema({
  postTitle,
  postSlug,
}: BlogBreadcrumbInput = {}) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.oxlate.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.oxlate.com/blog",
    },
  ];

  if (postTitle && postSlug) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: postTitle,
      item: `https://www.oxlate.com/blog/${postSlug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
