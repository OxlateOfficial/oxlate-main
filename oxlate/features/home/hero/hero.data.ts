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
  headline: "Digital Architecture for the Modern Web.",
  subtitle:
    "Oxlate is a technology partner building websites, web applications, mobile products and custom business software with disciplined design and engineering.",
  ctaLabel: "Contact",
  ctaHref: "#contact",
  strutTag: "Architecture Discipline",
  serviceDisciplines: [
    "WEB DEVELOPMENT",
    "MOBILE APPLICATIONS",
    "CUSTOM SYSTEMS",
  ],
};
