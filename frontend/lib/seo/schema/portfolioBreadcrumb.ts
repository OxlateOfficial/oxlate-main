type PortfolioBreadcrumbInput = {
  projectTitle?: string;
  projectSlug?: string;
};

export function getPortfolioBreadcrumbSchema({
  projectTitle,
  projectSlug,
}: PortfolioBreadcrumbInput = {}) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://oxlate.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://oxlate.in/portfolio",
    },
  ];

  if (projectTitle && projectSlug) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: projectTitle,
      item: `https://oxlate.in/portfolio/${projectSlug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
