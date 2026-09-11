import rawInsights from "./insights.json";

export interface AuthorEntity {
  name: string;
  role: string;
  url?: string;
  sameAs?: string[];
}

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: AuthorEntity;
  readingTime: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  indexable: boolean;
}

export const INSIGHTS: InsightItem[] = rawInsights as unknown as InsightItem[];

export function getAllInsights(): InsightItem[] {
  return INSIGHTS;
}

export function getIndexableInsights(): InsightItem[] {
  return INSIGHTS.filter((i) => i.indexable);
}

export function getInsightBySlug(slug: string): InsightItem | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
