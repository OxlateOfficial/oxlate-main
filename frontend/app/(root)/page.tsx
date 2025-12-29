// oxlate-main/frontend/app/(root)/page.tsx
import HeroSection from "@/components/sections/home/HeroSection/HeroSection";
import HomeStickyBar from "@/components/sections/home/HomeStickyBar";
import InfiniteServiceSlider from "@/components/services/cards/InfiniteServiceSlider";
import ServiceLandingPreview from "@/components/services/landing/ServiceLandingPreview";
import CTASection from "@/components/sections/CTA/CTASection";
import ServicePortfolioSection from "@/components/services/portfolio/ServicePortfolioSection";
import WhyTrustUsSection from "@/components/sections/home/WhyTrustSection";
import InitService from "@/components/services/InitService";

import LazySection from "@/components/performance/LazySection";
import { loadServiceLanding } from "@/lib/cms/loadServiceLanding";
import { SERVICES, ServiceId } from "@/lib/constants/services";

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const serviceParam = params.service;

  const service: ServiceId =
    SERVICES.some(s => s.id === serviceParam)
      ? (serviceParam as ServiceId)
      : "web-development";

  // Preload ALL service landings to avoid API calls
  const allLandings = SERVICES.reduce((acc, s) => {
    try {
      acc[s.id] = loadServiceLanding(s.id);
    } catch (error) {
      console.error(`Failed to load landing for ${s.id}:`, error);
    }
    return acc;
  }, {} as Record<string, any>);

  const initialLanding = allLandings[service] || loadServiceLanding("web-development");

  return (
    <main className="relative w-full font-[Orbitron]">
      <InitService service={service} />
      <HeroSection />
      <HomeStickyBar />
      <InfiniteServiceSlider />

      <LazySection>
        {/* Pass all landings to avoid API calls */}
        <ServiceLandingPreview 
          allLandings={allLandings}
          initialLanding={initialLanding} 
        />
      </LazySection>

      {/* <CTASection variant="soft" service={service} /> */}
      <ServicePortfolioSection service={service} />
      <WhyTrustUsSection />
      <CTASection variant="final" service={service} />
    </main>
  );
}