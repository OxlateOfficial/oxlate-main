export interface HeroData {
  chapterTag: string;
  headline: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  strutTag: string;
  serviceDisciplines: string[];
}

export const heroData: HeroData = {
  chapterTag: "01 // INTRO",
  headline: "We build fast, reliable websites and mobile apps for growing businesses.",
  subtitle:
    "We plan properly from day one so your software scales without breaking. Work directly with senior builders—no middlemen, no bloated agency overhead, and 100% code ownership.",
  ctaLabel: "Start a Project",
  ctaHref: "#contact",
  strutTag: "Modern Software Studio",
  serviceDisciplines: [
    "WEB APPLICATIONS",
    "MOBILE APPS",
    "INTERNAL TOOLS",
  ],
};
