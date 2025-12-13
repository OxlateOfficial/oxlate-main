import { loadServiceFull } from "@/lib/cms/loadServiceFull";
import { generateServiceMetadata } from "@/lib/seo/metadata";

import WhatIsSection from "@/components/core/DynamicContent/WhatIsSection";
import WhyChooseSection from "@/components/core/DynamicContent/WhyChooseSection";
import ProcessSection from "@/components/core/DynamicContent/ProcessSection";
import FAQSection from "@/components/core/DynamicContent/FAQSection";
import CTASection from "@/components/shared/CTASection";

import { getServiceSchema } from "@/lib/seo/schema/service";
import { getFAQSchema } from "@/lib/seo/schema/faq";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumb";

export async function generateMetadata() {
  const content = loadServiceFull("web-development");

  return generateServiceMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    slug: "web-development",
  });
}

export default function WebDevelopmentPage() {
  const content = loadServiceFull("web-development");
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
        title="Web Development"
        text={content.whatIs}
      />

      <WhyChooseSection items={content.why} />

      <ProcessSection steps={content.process} />

      <FAQSection faqs={content.faqs} />

      <CTASection service={content.id} />

    </main>
  );
}
