import { loadServiceFull } from "@/lib/cms/loadServiceFull";
import { generateServiceMetadata } from "@/lib/seo/metadata";

import WhatIsSection from "@/components/sections/home/WhatIsSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import FAQSection from "@/components/sections/home/FAQSection";
import CTASection from "@/components/sections/CTA/CTASection";
import ServicePortfolioSection from "@/components/services/portfolio/ServicePortfolioSection";
import { getServiceSchema } from "@/lib/seo/schema/service";
import { getFAQSchema } from "@/lib/seo/schema/faq";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumb";
import WhyTrustUsSection from "@/components/sections/home/WhyTrustSection";
export async function generateMetadata() {
  const content = loadServiceFull("automation");

  return generateServiceMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    slug: "automation",
  });
}

export default function AutomationPage() {
  const content = loadServiceFull("automation");
  const serviceSchema = getServiceSchema({
    name: content.title,
    description: content.metaDescription,
    slug: content.id,
  });

  const faqSchema = getFAQSchema(content.faqs);
  const breadcrumbSchema = getBreadcrumbSchema(
    content.title,
    content.id
  );


  return (
    <main className="px-4 font-[Orbitron] leading-loose tracking-widest">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* INTRO */}
      <section className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          {content.title}
        </h1>
        <p className="text-gray-700">
          {content.intro}
        </p>
      </section>

      <WhatIsSection
        title="Automation Services"
        text={content.whatIs}
      />

      <WhyChooseSection items={content.why} />

      <ProcessSection steps={content.process} />

      <FAQSection faqs={content.faqs} />

      <ServicePortfolioSection service="automation" />

        <WhyTrustUsSection />
      <CTASection service={content.id} />

    </main>
  );
}
