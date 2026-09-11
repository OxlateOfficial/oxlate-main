import rawProjects from "./projects.json";

export interface ProjectItem {
  id: string;
  slug: string;
  index: string;
  priority: number;
  featuredInHero: boolean;
  featuredOnHome: boolean;
  badge: "Independent Project" | "Founding Developer's Work" | "Client Work";
  title: string;
  subtitle: string;
  category: string;
  headline: string;
  summary: string;
  whatWasBuilt: string;
  technicalChallenge: string;
  architecturalSolution: string;
  highlights: string[];
  techStack: string[];
  schematicType: "platform" | "mobile";
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  publishedAt?: string;
  updatedAt?: string;
  indexable?: boolean;
}

export const PROJECTS: ProjectItem[] = (rawProjects as unknown as ProjectItem[]).sort(
  (a, b) => a.priority - b.priority
);

export function getAllProjects(): ProjectItem[] {
  return PROJECTS;
}

export function getHeroProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featuredInHero).slice(0, 3);
}

export function getFeaturedHomeProjects(): ProjectItem[] {
  return PROJECTS.filter((p) => p.featuredOnHome).slice(0, 2);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
