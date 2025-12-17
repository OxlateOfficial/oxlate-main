import { loadServiceCard } from "@/lib/cms/loadServiceCard";
import ServiceCardClient from "./ServiceCardClient";
import { ServiceId } from "@/lib/constants/services";

type Props = {
  service: ServiceId;
};

export default function ServiceCardSection({ service }: Props) {
  // 🔒 SAFETY FALLBACK
  const safeService: ServiceId =
    service ?? "web-development";

  const card = loadServiceCard(safeService);

  return <ServiceCardClient card={card} />;
}