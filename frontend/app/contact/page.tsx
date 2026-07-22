import type { Metadata } from "next"
import { Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { QuoteForm } from "@/components/features/contact/QuoteForm"
import contactData from "@/lib/data/contact.json"

export const metadata: Metadata = {
  title: "Contact Oxlate | Get a Quote",
  description:
    "Get in touch with Oxlate for web development, mobile app development, and SEO. Based in Chandigarh. We reply within 24 hours.",
  alternates: {
    canonical: "https://www.oxlate.com/contact",
  },
}

const steps = [
  { step: "1", title: "We review your request", desc: "We'll read your requirements carefully before we connect." },
  { step: "2", title: "Discovery call", desc: "A quick call to understand your project in detail." },
  { step: "3", title: "Proposal & timeline", desc: "A clear proposal with scope, approach, and timeline." },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Page hero */}
        <section className="bg-background px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-4">Get in Touch</p>
            <h1 className="mb-6">Tell us about your project</h1>
            <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
              We reply within 24 hours on business days. No sales pressure — just a real conversation about what you're building.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="section-padding bg-muted px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2">

              {/* Form */}
              <div>
                <p className="eyebrow mb-4">Send a message</p>
                <h2 className="mb-8 text-2xl">Get a quote</h2>
                <QuoteForm />
              </div>

              {/* Contact info sidebar */}
              <div className="space-y-6 lg:pt-24">

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contactData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-[var(--shadow-card-resting)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat for instant responses</p>
                    <p className="mt-1 text-sm font-medium text-primary">{contactData.phone} →</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-[var(--shadow-card-resting)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-tint">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    <p className="mt-1 text-sm font-medium text-primary">{contactData.email}</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                    <MapPin className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">{contactData.location}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Serving clients across India</p>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                    <Clock className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Response Time</p>
                    <p className="text-sm text-muted-foreground">{contactData.responseTime}</p>
                  </div>
                </div>

                {/* Google review */}
                <a
                  href={contactData.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Star className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  Review us on Google ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="section-padding bg-background px-6 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="eyebrow mb-3">Process</p>
              <h2>What happens next?</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint">
                    <span className="stat-number text-lg text-primary">{s.step}</span>
                  </div>
                  <h3 className="mb-2 text-base">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
