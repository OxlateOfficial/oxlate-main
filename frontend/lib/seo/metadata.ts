import type { Metadata } from "next";

type ServiceMetaInput = {
  title: string;
  description: string;
  slug: string;
};

export function generateServiceMetadata({
  title,
  description,
  slug,
}: ServiceMetaInput): Metadata {
  const baseUrl = "https://oxlate.in";

  return {
    title,
    description,

    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/services/${slug}`,
      siteName: "Oxlate",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
