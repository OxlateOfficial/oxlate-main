import HeroSection from "@/components/sections/home/HeroSection/HeroSection";
import ServiceSelector from "@/components/layout/Header/SelectionState";
import ServiceCardSection from "@/components/services/cards/ServiceCardSection";
import ServiceLandingPreview from "@/components/services/landing/ServiceLandingPreview";
import ServicePortfolioSection from "@/components/services/portfolio/ServicePortfolioSection";
import WhyTrustUsSection from "@/components/sections/home/WhyTrustSection";
import CTASection from "@/components/sections/CTA/CTASection";


import LazySection from "@/components/performance/LazySection";
import { getWebsiteSchema } from "@/lib/seo/schema/website";
import { getOrganizationSchema } from "@/lib/seo/schema/organization";
import { SERVICES , ServiceId } from "@/lib/constants/services";


const SERVICE_IDS = SERVICES.map(s => s.id);



type Props = {
  searchParams: Promise<{ service?: string }>;
};


export default async function Home({ searchParams }: Props) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  const params = await searchParams;
  const serviceParam = params.service;

  const service: ServiceId = SERVICE_IDS.includes(serviceParam as ServiceId)
    ? (serviceParam as ServiceId)
    : "web-development";


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
