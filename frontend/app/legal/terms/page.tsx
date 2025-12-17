import { loadTerms } from "@/lib/cms/loadTerms";
import LegalLayout from "@/components/sections/legal/LegalLayout";
import LegalContent from "@/components/sections/legal/LegalContent";
import { getLegalPageSchema } from "@/lib/seo/schema/legal";

export const metadata = {
  title: "Terms & Conditions | Oxlate",
  description:
    "Read Oxlate’s terms and conditions governing the use of our services.",
  alternates: {
    canonical: "https://www.oxlate.com/legal/terms",
  },
};

export default function TermsPage() {
  const data = loadTerms();

  const schema = getLegalPageSchema({
    name: "Terms & Conditions",
    url: "https://www.oxlate.com/legal/terms",
  });

  return (
    <main>
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <LegalLayout
        title={data.title}
        lastUpdated={data.lastUpdated}
      >
        <LegalContent sections={data.sections} />
      </LegalLayout>
    </main>
  );
}
