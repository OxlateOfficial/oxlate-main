import { loadPrivacy } from "@/lib/cms/loadPrivacy";
import LegalLayout from "@/components/sections/legal/LegalLayout";
import LegalContent from "@/components/sections/legal/LegalContent";
import { getLegalPageSchema } from "@/lib/seo/schema/legal";

export const metadata = {
  title: "Privacy Policy | Oxlate",
  description:
    "Read Oxlate’s privacy policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.oxlate.com/legal/privacy",
  },
};

export default function PrivacyPage() {
  const data = loadPrivacy();

  const schema = getLegalPageSchema({
    name: "Privacy Policy",
    url: "https://www.oxlate.com/legal/privacy",
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
