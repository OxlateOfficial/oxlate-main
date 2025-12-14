import { loadServiceLanding } from "@/lib/cms/loadServiceLanding";
import ServiceLandingClient from "@/components/services/landing/ServiceLandingClient";

type Props = {
  service: string;
};

export default function ServiceLandingPreview({ service }: Props) {
  const landing = loadServiceLanding(service);

  return <ServiceLandingClient landing={landing} />;
}
