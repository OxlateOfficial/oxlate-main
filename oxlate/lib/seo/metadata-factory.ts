import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { routes } from "./routes";

/**
 * Supported Page Classification Types
 */
export type PageType =
  | "HOME"
  | "SERVICE"
  | "WORK_INDEX"
  | "WORK_DETAIL"
  | "ABOUT"
  | "CONTACT"
  | "INSIGHT"
  | "PRODUCT"
  | "UTILITY";

export interface PageMetadataOptions {
  pageType: PageType;
  title: string;
  description: string;
  slug?: string;
  path?: string;
  ogImage?: string;
  indexable?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Data-Driven Metadata Factory
 * Generates uniform, canonical, type-safe Next.js Metadata for any page or content item.
 */
export function createPageMetadata({
  pageType,
  title,
  description,
  slug,
  path,
  ogImage,
  indexable = true,
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  // Determine canonical URL based on classification
  let canonicalUrl = siteConfig.url;
  if (path) {
    canonicalUrl = routes.absolute.custom(path);
  } else if (slug && pageType === "WORK_DETAIL") {
    canonicalUrl = routes.absolute.project(slug);
  } else if (slug && pageType === "PRODUCT") {
    canonicalUrl = routes.absolute.product(slug);
  } else if (slug && pageType === "INSIGHT") {
    canonicalUrl = routes.absolute.insight(slug);
  } else if (pageType === "SERVICE") {
    canonicalUrl = routes.absolute.services();
  } else if (pageType === "WORK_INDEX") {
    canonicalUrl = routes.absolute.work();
  } else if (pageType === "ABOUT") {
    canonicalUrl = routes.absolute.about();
  } else if (pageType === "CONTACT") {
    canonicalUrl = routes.absolute.contact();
  }

  const socialImage = ogImage || "/opengraph-image";

  // Strip duplicate trailing brand suffix if passed by caller to prevent "Title | Oxlate | Oxlate"
  const cleanTitle = title
    .replace(new RegExp(`\\s*\\|\\s*${siteConfig.name}\\s*$`, "i"), "")
    .trim();
  const fullBrandTitle = `${cleanTitle} | ${siteConfig.name}`;

  return {
    title: pageType === "HOME" ? { absolute: siteConfig.title } : cleanTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: pageType === "WORK_DETAIL" || pageType === "INSIGHT" ? "article" : "website",
      url: canonicalUrl,
      title: fullBrandTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.social.xHandle,
      creator: siteConfig.social.xHandle,
      title: fullBrandTitle,
      description,
      images: [socialImage],
    },
  };
}
