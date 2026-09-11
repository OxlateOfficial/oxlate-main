import rawProducts from "./products.json";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "development" | "beta" | "live";
  category: string;
  technologies: string[];
  features: string[];
  publishedAt: string;
  updatedAt: string;
  indexable: boolean;
  liveUrl?: string;
}

export const PRODUCTS: ProductItem[] = rawProducts as unknown as ProductItem[];

export function getAllProducts(): ProductItem[] {
  return PRODUCTS;
}

export function getIndexableProducts(): ProductItem[] {
  return PRODUCTS.filter((p) => p.indexable);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
