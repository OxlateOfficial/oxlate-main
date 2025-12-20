export const SERVICES = [
  { id: "web-development", label: "Website" },
  { id: "app-development", label: "App" },
  { id: "automation", label: "Automation" },
  { id: "software", label: "ERP / Software" },
  { id: "custom", label: "Custom Solution" },
] as const;



const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-oxlate" },
  { label: "Services", href: "/services/web-development" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
];

export { NAV_ITEMS };
export type ServiceId = typeof SERVICES[number]["id"];
