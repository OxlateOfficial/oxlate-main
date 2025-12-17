"use client";

import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics/events";
type Props = {
  data: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  service?: string;
};

export default function CTAClient({ data, service }: Props) {
  const router = useRouter();

  const handlePrimary = () => {
    trackEvent("cta_primary_click", { service: service ?? null });
    router.push(
      service ? `/contact?service=${service}` : "/contact"
    );
  };

  const handleWhatsApp = () => {
    const text = service
      ? `Hi Oxlate, I want to discuss a ${service} project`
      : "Hi Oxlate, I want to discuss a project";
    trackEvent("cta_whatsapp_click", { service: service ?? null });
    window.open(
      `https://wa.me/917508317625?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="px-4 py-20 bg-black text-white text-center">
      <h2 className="text-2xl font-semibold mb-3">
        {data.title}
      </h2>

      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        {data.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handlePrimary}
          className="rounded-xl bg-white text-black px-8 py-4 font-medium"
        >
          {data.primaryButton}
        </button>

        <button
          onClick={handleWhatsApp}
          className="rounded-xl border border-white px-8 py-4 font-medium"
        >
          {data.secondaryButton}
        </button>
      </div>
    </section>
  );
}
