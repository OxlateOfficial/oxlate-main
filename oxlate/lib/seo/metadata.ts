/**
 * On-Page SEO Metadata & Heading Architecture for Oxlate V1
 * Single Source of Truth driven by siteConfig (/lib/config/site.ts)
 * Specifications: /docs/seo/02-PAGE-SEO.md & /docs/seo/03-TECHNICAL-SEO.md
 */

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config/site'
import { SITE_URL } from './schema'

export interface RouteH1Definition {
  route: string
  h1Text: string
  sectionHeadings?: Record<string, string>
}

/**
 * Strict Single H1 Rules Registry across V1 Launch Routes
 * Rule: Exactly 1 <h1> per route rendered statically in initial HTML payload.
 */
export const ROUTE_H1_REGISTRY: Record<string, RouteH1Definition> = {
  '/': {
    route: '/',
    h1Text: 'Thoughtful web experiences and mobile applications.',
    sectionHeadings: {
      '02': 'Built for real workflows.',
      '03': 'Demonstrations of craft.',
      '04': 'Engineering principles.',
      '05': 'A focused technology partner.',
      '06': 'Have something worth building?',
    },
  },
  '/services': {
    route: '/services',
    h1Text: 'Capabilities and technical disciplines.',
  },
  '/work': {
    route: '/work',
    h1Text: 'Selected engineering demonstrations and case studies.',
  },
  '/about': {
    route: '/about',
    h1Text: 'A focused technology partner for web and mobile.',
  },
  '/contact': {
    route: '/contact',
    h1Text: 'Initiate a project or technical consultation.',
  },
}

/**
 * Validates that an H1 text matches the registered canonical H1 for a route.
 * Returns true if valid, throws/logs error if multiple or non-conforming.
 */
export function validateSingleH1Rule(route: string, renderedH1Count: number): boolean {
  if (renderedH1Count !== 1) {
    console.error(
      `[SEO ERROR] Route "${route}" violated Single H1 Rule! Found ${renderedH1Count} <h1> elements. Expected strictly 1.`
    )
    return false
  }
  return true
}

/**
 * Default global site metadata setup
 * Centralized, dynamic, and compliant with Google & Bing search directives.
 */
export const DEFAULT_SITE_METADATA: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.xHandle,
    creator: siteConfig.social.xHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: siteConfig.verification.google || undefined,
    other: siteConfig.verification.bing ? { 'msvalidate.01': siteConfig.verification.bing } : undefined,
  },
}

/**
 * Route-specific metadata configurations for the 5 V1 launch routes
 */
export const ROUTE_METADATA_REGISTRY: Record<string, Metadata> = {
  '/': {
    title: 'Oxlate — Web Development & Mobile Applications',
    description:
      'Oxlate builds custom websites, web applications, and mobile products with calm architectural discipline and precision engineering.',
    alternates: {
      canonical: `${SITE_URL}/`,
    },
  },
  '/services': {
    title: 'Services & Capabilities | Oxlate',
    description:
      'Explore Oxlate technical capabilities in web development, mobile application engineering, and custom software systems.',
    alternates: {
      canonical: `${SITE_URL}/services`,
    },
  },
  '/work': {
    title: 'Selected Work & Case Studies | Oxlate',
    description:
      'Demonstrations of craft, software engineering case studies, and mobile application projects built by Oxlate.',
    alternates: {
      canonical: `${SITE_URL}/work`,
    },
  },
  '/about': {
    title: 'About Oxlate | Technology Partner',
    description:
      'Learn about Oxlate, our engineering principles, founding ethos, and architectural approach to modern software development.',
    alternates: {
      canonical: `${SITE_URL}/about`,
    },
  },
  '/contact': {
    title: 'Contact Oxlate | Initiate a Project',
    description:
      'Get in touch with Oxlate to discuss custom web development, mobile applications, or technical system engineering.',
    alternates: {
      canonical: `${SITE_URL}/contact`,
    },
  },
}
