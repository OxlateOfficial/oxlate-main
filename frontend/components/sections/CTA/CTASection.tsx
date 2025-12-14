import { loadCTA } from "@/lib/cms/loadCTA";
import CTAClient from "./CTAClient";

type Props = {
  variant?: "soft" | "final";
  service?: string;
};

export default function CTASection({
  variant = "final",
  service,
}: Props) {
  const cta = loadCTA()[variant];

  return (
    <CTAClient
      data={cta}
      service={service}
    />
  );
}
