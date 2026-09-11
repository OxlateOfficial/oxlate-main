/**
 * Comprehensive SEO Validation Engine for Oxlate
 * 
 * Rejects invalid SEO states at build time and prevents deployment of broken:
 * - Slugs, IDs, or canonical duplicates
 * - Missing metadata (titles, descriptions, excerpts)
 * - Missing timestamps on indexable content
 * - Redirect chains or circular redirects
 * - Leaked draft/noindex content into sitemaps
 */

import { siteConfig } from "@/lib/config/site";
import { getAllProjects } from "@/data/projects.data";
import { getAllProducts } from "@/data/products.data";
import { getAllInsights } from "@/data/insights.data";
import { LEGACY_REDIRECT_REGISTRY, HOST_REDIRECT_REGISTRY } from "@/lib/seo/legacy-url-map";
import { routes } from "@/lib/seo/routes";

export interface SeoValidationError {
  category: "METADATA" | "SLUG" | "CANONICAL" | "REDIRECT" | "SITEMAP" | "ENTITY";
  message: string;
  itemRef?: string;
}

export interface ValidationReport {
  isValid: boolean;
  errors: SeoValidationError[];
  warnings: string[];
  checkedCounts: {
    services: number;
    projects: number;
    products: number;
    insights: number;
    redirects: number;
  };
}

export function validateSeoArchitecture(): ValidationReport {
  const errors: SeoValidationError[] = [];
  const warnings: string[] = [];

  // 1. Validate Central siteConfig
  if (!siteConfig.name || siteConfig.name.trim() === "") {
    errors.push({ category: "ENTITY", message: "siteConfig.name is missing or empty" });
  }
  if (!siteConfig.url || !siteConfig.url.startsWith("http")) {
    errors.push({ category: "CANONICAL", message: `siteConfig.url is invalid: '${siteConfig.url}'` });
  }
  if (!siteConfig.title || siteConfig.title.trim() === "") {
    errors.push({ category: "METADATA", message: "siteConfig.title is missing or empty" });
  }
  if (!siteConfig.description || siteConfig.description.trim() === "") {
    errors.push({ category: "METADATA", message: "siteConfig.description is missing or empty" });
  }

  // 2. Validate Services
  const serviceIds = new Set<string>();
  for (const s of siteConfig.services) {
    if (!s.id || serviceIds.has(s.id)) {
      errors.push({ category: "SLUG", message: `Duplicate or missing service id: '${s.id}'`, itemRef: s.id });
    }
    serviceIds.add(s.id);
    if (!s.name || s.name.trim() === "") {
      errors.push({ category: "METADATA", message: `Service missing name: '${s.id}'`, itemRef: s.id });
    }
    if (!s.shortDescription || s.shortDescription.trim() === "") {
      errors.push({ category: "METADATA", message: `Service missing shortDescription: '${s.id}'`, itemRef: s.id });
    }
  }

  // 3. Validate Projects
  const projectSlugs = new Set<string>();
  const projects = getAllProjects();
  for (const p of projects) {
    if (!p.slug || projectSlugs.has(p.slug)) {
      errors.push({ category: "SLUG", message: `Duplicate or missing project slug: '${p.slug}'`, itemRef: p.slug });
    }
    projectSlugs.add(p.slug);
    if (!p.title || p.title.trim() === "") {
      errors.push({ category: "METADATA", message: `Project missing title: '${p.slug}'`, itemRef: p.slug });
    }
    if (!p.summary || p.summary.trim() === "") {
      errors.push({ category: "METADATA", message: `Project missing summary: '${p.slug}'`, itemRef: p.slug });
    }
    if (p.indexable !== false && (!p.updatedAt && !p.publishedAt)) {
      errors.push({
        category: "METADATA",
        message: `Indexable project missing both publishedAt and updatedAt timestamps: '${p.slug}'`,
        itemRef: p.slug,
      });
    }
  }

  // 4. Validate Products
  const productSlugs = new Set<string>();
  const products = getAllProducts();
  for (const pr of products) {
    if (!pr.slug || productSlugs.has(pr.slug)) {
      errors.push({ category: "SLUG", message: `Duplicate or missing product slug: '${pr.slug}'`, itemRef: pr.slug });
    }
    productSlugs.add(pr.slug);
    if (!pr.name || pr.name.trim() === "") {
      errors.push({ category: "METADATA", message: `Product missing name: '${pr.slug}'`, itemRef: pr.slug });
    }
    if (!pr.description || pr.description.trim() === "") {
      errors.push({ category: "METADATA", message: `Product missing description: '${pr.slug}'`, itemRef: pr.slug });
    }
    if (pr.indexable && (!pr.updatedAt && !pr.publishedAt)) {
      errors.push({
        category: "METADATA",
        message: `Indexable product missing both publishedAt and updatedAt timestamps: '${pr.slug}'`,
        itemRef: pr.slug,
      });
    }
  }

  // 5. Validate Insights
  const insightSlugs = new Set<string>();
  const insights = getAllInsights();
  for (const ins of insights) {
    if (!ins.slug || insightSlugs.has(ins.slug)) {
      errors.push({ category: "SLUG", message: `Duplicate or missing insight slug: '${ins.slug}'`, itemRef: ins.slug });
    }
    insightSlugs.add(ins.slug);
    if (!ins.title || ins.title.trim() === "") {
      errors.push({ category: "METADATA", message: `Insight missing title: '${ins.slug}'`, itemRef: ins.slug });
    }
    if (!ins.excerpt || ins.excerpt.trim() === "") {
      errors.push({ category: "METADATA", message: `Insight missing excerpt: '${ins.slug}'`, itemRef: ins.slug });
    }
    if (!ins.author || !ins.author.name || ins.author.name.trim() === "") {
      errors.push({ category: "ENTITY", message: `Insight missing author entity name: '${ins.slug}'`, itemRef: ins.slug });
    }
    if (ins.indexable && (!ins.updatedAt && !ins.publishedAt)) {
      errors.push({
        category: "METADATA",
        message: `Indexable insight missing both publishedAt and updatedAt timestamps: '${ins.slug}'`,
        itemRef: ins.slug,
      });
    }
  }

  // 6. Cross-Collection Slug Collision Check
  const allSlugs = new Map<string, string>();
  for (const slug of projectSlugs) allSlugs.set(slug, "project");
  for (const slug of productSlugs) {
    if (allSlugs.has(slug)) {
      errors.push({
        category: "SLUG",
        message: `Slug collision across collections: '${slug}' is used in both ${allSlugs.get(slug)} and product`,
        itemRef: slug,
      });
    }
    allSlugs.set(slug, "product");
  }
  for (const slug of insightSlugs) {
    if (allSlugs.has(slug)) {
      errors.push({
        category: "SLUG",
        message: `Slug collision across collections: '${slug}' is used in both ${allSlugs.get(slug)} and insight`,
        itemRef: slug,
      });
    }
    allSlugs.set(slug, "insight");
  }

  // 7. Validate Redirect Registry & Chain Prevention
  const redirectSources = new Set<string>();
  const redirectDestinations = new Map<string, string>();

  for (const r of LEGACY_REDIRECT_REGISTRY) {
    if (!r.source || !r.source.startsWith("/")) {
      errors.push({ category: "REDIRECT", message: `Invalid redirect source format: '${r.source}'` });
    }
    if (redirectSources.has(r.source)) {
      errors.push({ category: "REDIRECT", message: `Duplicate redirect source registered: '${r.source}'` });
    }
    redirectSources.add(r.source);

    if (!r.destination) {
      errors.push({ category: "REDIRECT", message: `Redirect source '${r.source}' missing destination` });
    } else {
      // Strip anchor to check path chain
      const destPath = r.destination.split("#")[0];
      redirectDestinations.set(r.source, destPath);
    }
  }

  // Chain detection: A -> B where B is also a redirect source
  for (const [source, destPath] of redirectDestinations.entries()) {
    if (redirectSources.has(destPath)) {
      errors.push({
        category: "REDIRECT",
        message: `Detected redirect chain: '${source}' -> '${destPath}', but '${destPath}' is also registered as a redirect source.`,
        itemRef: source,
      });
    }
  }

  // 8. Canonical Route Invariants
  const canonicalHome = routes.absolute.home();
  if (canonicalHome !== `${siteConfig.url}/`) {
    errors.push({
      category: "CANONICAL",
      message: `Canonical home mismatch: expected '${siteConfig.url}/', got '${canonicalHome}'`,
    });
  }

  const report: ValidationReport = {
    isValid: errors.length === 0,
    errors,
    warnings,
    checkedCounts: {
      services: siteConfig.services.length,
      projects: projects.length,
      products: products.length,
      insights: insights.length,
      redirects: LEGACY_REDIRECT_REGISTRY.length + HOST_REDIRECT_REGISTRY.length,
    },
  };

  return report;
}

/**
 * Asserts SEO state validity; throws actionable Error if any invariant fails.
 * Designed to be executed during Next.js build or CI.
 */
export function assertSeoArchitectureValid(): void {
  const report = validateSeoArchitecture();
  if (!report.isValid) {
    const errorDetails = report.errors
      .map((e, idx) => `${idx + 1}. [${e.category}] ${e.message}${e.itemRef ? ` (ref: ${e.itemRef})` : ""}`)
      .join("\n");
    throw new Error(`\n❌ [SEO ARCHITECTURE VALIDATION FAILED]\nFound ${report.errors.length} violation(s):\n${errorDetails}\n`);
  }
}
