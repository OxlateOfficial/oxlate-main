import HeroSection from "@/components/core/HeroSection/HeroSection";
import ServiceSelector from "@/components/core/ServiceSelector/SelectionState";
import ServiceCardSection from "@/components/core/ServiceSelector/ServiceCardSection";
import ServiceLandingPreview from "@/components/sections/ServiceLandingPreview";
import { getOrganizationSchema } from "@/lib/seo/schema/organization";
import { getWebsiteSchema } from "@/lib/seo/schema/website";
import LazySection from "@/components/performance/LazySection";
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
    </main>
  );
}
