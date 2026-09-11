import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/site'
import { getAllProjects } from '@/data/projects.data'
import { getIndexableProducts } from '@/data/products.data'
import { getIndexableInsights } from '@/data/insights.data'
import { routes } from '@/lib/seo/routes'
import { assertSeoArchitectureValid } from '@/lib/seo/validation'

/**
 * Dynamic Sitemap Generator for Oxlate Launch & Growth
 * Single Source of Truth driven by siteConfig, routes helper, and content registries.
 * Strictly outputs only canonical, indexable, 200-status URLs.
 * Asserts SEO state validity at build time via assertSeoArchitectureValid().
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Enforce build-time SEO invariants (fails build on duplicate slugs, chains, missing metadata, etc.)
  assertSeoArchitectureValid()

  const baseReleaseDate = new Date(siteConfig.releaseDate)

  // 1. Core Top-Level Routes with realistic release timestamps
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: routes.absolute.home(),
      lastModified: baseReleaseDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: routes.absolute.services(),
      lastModified: baseReleaseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: routes.absolute.work(),
      lastModified: baseReleaseDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: routes.absolute.about(),
      lastModified: baseReleaseDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: routes.absolute.contact(),
      lastModified: baseReleaseDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // 2. Dynamic Project Case Studies from projects registry (omits draft/non-indexable items)
  const projects = getAllProjects().filter((p) => p.indexable !== false)
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: routes.absolute.project(p.slug),
    lastModified: p.updatedAt ? new Date(p.updatedAt) : (p.publishedAt ? new Date(p.publishedAt) : baseReleaseDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 3. Dynamic Products from products registry (only indexable items)
  const productRoutes: MetadataRoute.Sitemap = getIndexableProducts().map((pr) => ({
    url: routes.absolute.product(pr.slug),
    lastModified: pr.updatedAt ? new Date(pr.updatedAt) : (pr.publishedAt ? new Date(pr.publishedAt) : baseReleaseDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 4. Dynamic Insights/Articles from insights registry (only indexable items)
  const insightRoutes: MetadataRoute.Sitemap = getIndexableInsights().map((ins) => ({
    url: routes.absolute.insight(ins.slug),
    lastModified: ins.updatedAt ? new Date(ins.updatedAt) : (ins.publishedAt ? new Date(ins.publishedAt) : baseReleaseDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...coreRoutes, ...projectRoutes, ...productRoutes, ...insightRoutes]
}

