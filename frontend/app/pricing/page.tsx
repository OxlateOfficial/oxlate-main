import { loadPricing } from "@/lib/cms/loadPricing";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingCards from "@/components/sections/pricing/PricingCards";
import PricingFactors from "@/components/sections/pricing/PricingFactors";
import PricingCTA from "@/components/sections/pricing/PricingCTA";
import { getPricingSchema } from "@/lib/seo/schema/pricing";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import { getFAQSchema } from "@/lib/seo/schema/faq";
import { loadPricingFAQ } from "@/lib/cms/loadPricingFAQ";
export const metadata = {
  title: "Pricing | Oxlate",
  description:
    "Transparent, value-based pricing for websites, apps, and automation services by Oxlate.",
};

export default function PricingPage() {
  const pricing = loadPricing();
    const pricingSchema = getPricingSchema({
    services: pricing.services.map((s: any) => ({
        id: s.id,
        title: s.title,
        range: s.range,
    })),
    });

  if (!pricing) return null;
    const pricingFAQ = loadPricingFAQ();

    const faqSchema = getFAQSchema(pricingFAQ);


  return (
    <main>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(pricingSchema),
        }}
        />
        {/* FAQ Schema */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
        }}
        />

      <PricingHero
        title={pricing.philosophy.title}
        description={pricing.philosophy.description}
      />

      <PricingCards services={pricing.services} />

      <PricingFactors factors={pricing.factors} />
        <PricingFAQ faqs={pricingFAQ} />
      <PricingCTA
        title={pricing.cta.title}
        description={pricing.cta.description}
      />
    </main>
  );
}
