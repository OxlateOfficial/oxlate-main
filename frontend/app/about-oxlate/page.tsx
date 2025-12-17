import { loadAbout } from "@/lib/cms/loadAbout";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutBulletSection from "@/components/sections/about/AboutBulletSection";
import AboutFounderNote from "@/components/sections/about/AboutFounderNote";
import AboutVision from "@/components/sections/about/AboutVision";
import WhyTrustUsSection from "@/components/sections/home/WhyTrustSection";
import { getAboutPageSchema } from "@/lib/seo/schema/about";
import { getOrganizationSchema } from "@/lib/seo/schema/organization";




export default function AboutPage() {
  const data = loadAbout();

  const aboutSchema = getAboutPageSchema({
    name: "Oxlate",
    url: "https://oxlate.com/about",
    description:
      "About Oxlate — a modern digital solutions studio focused on performance, clarity, and reliability.",
  });

  const orgSchema = getOrganizationSchema();

  return (
    <main>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema),
        }}
      />

      <AboutHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      <AboutBulletSection
        title={data.whoWeAre.title}
        points={data.whoWeAre.points}
      />

      <AboutBulletSection
        title={data.standFor.title}
        points={data.standFor.points}
      />

      <AboutBulletSection
        title={data.howWeWork.title}
        points={data.howWeWork.points}
      />

      <AboutFounderNote
        title={data.founderNote.title}
        text={data.founderNote.text}
      />

      <AboutVision
        title={data.vision.title}
        text={data.vision.text}
      />

      {/* REUSED TRUST SECTION */}
      <WhyTrustUsSection />

    </main>
  );
}
