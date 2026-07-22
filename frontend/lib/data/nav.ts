import type { NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceAnchors = [
  { label: "Web Development", href: "/services#web-development" },
  { label: "Mobile App Development", href: "/services#app-development" },
  { label: "SEO Optimization", href: "/services#seo" },
];

export const footerLinks = {
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile App Development", href: "/services#app-development" },
    { label: "SEO Optimization", href: "/services#seo" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
