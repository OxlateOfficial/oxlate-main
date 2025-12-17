import { SERVICES } from "@/lib/constants/services";

export function mapServicesToLinks(serviceIds: string[]) {
  return SERVICES
    .filter((s) => serviceIds.includes(s.id))
    .map((s) => ({
      label: s.label,
      href: `/services/${s.id}`,
    }));
}
