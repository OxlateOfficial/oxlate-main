import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'

/**
 * Dynamic Robots Directive Generator for Oxlate V1
 * Single Source of Truth driven by siteConfig.
 * Specifications: /docs/seo/03-TECHNICAL-SEO.md & /docs/seo/05-AI-SEARCH.md
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
