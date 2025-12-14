import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ServiceSelector from "@/components/layout/Header/SelectionState";
import ServiceCardSection from "@/components/services/cards/ServiceCardSection";
import ServiceLandingPreview from "@/components/services/landing/ServiceLandingPreview";
import ServicePortfolioSection from "@/components/services/portfolio/ServicePortfolioSection";
import WhyTrustUsSection from "@/components/sections/DynamicContent/WhyTrustSection";
import CTASection from "@/components/sections/CTA/CTASection";


import LazySection from "@/components/performance/LazySection";
import { getWebsiteSchema } from "@/lib/seo/schema/website";
import { getOrganizationSchema } from "@/lib/seo/schema/organization";


type Props = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  const service = params.service ?? "web-development";

  return (
    <main className="relative w-full font-[Orbitron] leading-loose tracking-widest">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />



      <HeroSection />
      <ServiceSelector />
      <ServiceCardSection service={service} />
      <LazySection>
        <ServiceLandingPreview service={service} />
      </LazySection>
        <CTASection variant="soft" service={service} />
      <ServicePortfolioSection service={service} />
      <WhyTrustUsSection />
        <CTASection variant="final" service={service} />
    </main>
  );
}
