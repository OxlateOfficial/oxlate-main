import { loadServiceCard } from "@/lib/cms/loadServiceCard";
import ServiceCardClient from "./ServiceCardClient";

type Props = {
  service: string;
};

export default function ServiceCardSection({ service }: Props) {
  const card = loadServiceCard(service);

  return <ServiceCardClient service={card} />;
}
