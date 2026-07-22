import type { PortfolioItem } from "@/lib/types";

export const portfolio: PortfolioItem[] = [
  {
    id: "mentor-krish",
    title: "MentorKrish — Coaching Platform",
    image: "/images/Mentorkrish.png",
    label: "Founding Developer's Work",
    caption:
      "A full-stack coaching and mentorship platform built to connect students with mentors. Features booking, video sessions, and progress tracking.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: undefined,
  },
  {
    id: "portfolio-web",
    title: "Agency Marketing Website",
    image: "/images/Placeholder.jpg",
    label: "Independent Project",
    caption:
      "A premium B2B marketing website for a digital agency. Architected with Next.js App Router, Tailwind CSS, and headless CMS.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    link: undefined,
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    image: "/images/Placeholder.jpg",
    label: "Independent Project",
    caption:
      "A React Native mobile application with offline support, push notifications, and a custom REST API backend.",
    tech: ["React Native", "FastAPI", "PostgreSQL"],
    link: undefined,
  },
];
