import { loadContact } from "@/lib/cms/loadContact";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import ContactLocation from "@/components/sections/contact/ContactLocation";
import { getContactPageSchema } from "@/lib/seo/schema/contact";

export const metadata = {
  title: "Contact Oxlate | Get a Quote",
  description:
    "Contact Oxlate to discuss your project. Get clear guidance, fast responses, and practical solutions.",
  alternates: {
    canonical: "https://www.oxlate.com/contact",
  },
};

export default function ContactPage() {
  const data = loadContact();

  return (
    <main className="px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactPageSchema()),
        }}
      />
      
      <ContactHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      <section className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">

        {/* FORM */}
        <ContactForm />

        {/* METHODS */}
        <div className="space-y-8">
          <ContactMethods
            whatsapp={data.methods.whatsapp}
            email={data.methods.email}
          />

          <ContactLocation
            city={data.location.city}
            note={data.location.note}
          />
        </div>

      </section>

    </main>
  );
}
