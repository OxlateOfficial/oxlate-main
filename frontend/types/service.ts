export interface Service {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  features: string[];
  whatIs: string;
  whyImportant: string;
  process: Array<{ step: number; title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  portfolioItems: string[];
  metaDescription?: string;
}