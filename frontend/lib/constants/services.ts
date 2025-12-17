export const SERVICES = [
  { id: "web-development", label: "Website" },
  { id: "app-development", label: "App" },
  { id: "automation", label: "Automation" },
  { id: "software", label: "ERP / Software" },
  { id: "custom", label: "Custom Solution" },
] as const;

export type ServiceId = typeof SERVICES[number]["id"];
