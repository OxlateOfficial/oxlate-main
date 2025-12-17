import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants/services";
import { loadAllPortfolio } from "@/lib/cms/loadPortfolioAll";
import { loadBlogPosts } from "@/lib/cms/loadBlogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oxlate.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap[number][] = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-oxlate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap[number][] =
    SERVICES.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  const portfolioProjects: MetadataRoute.Sitemap[number][] =
    loadAllPortfolio().map((project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const blogPosts: MetadataRoute.Sitemap[number][] =
    loadBlogPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioProjects,
    ...blogPosts,
  ];
}
