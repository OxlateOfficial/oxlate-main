import type { Metadata } from "next"
import Link from "next/link"
import { Globe, Smartphone, TrendingUp, ArrowRight, Check } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CTABand } from "@/components/features/home/CTABand"
import { services } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Services | Oxlate — Web Development, App Development, SEO",
  description:
    "Oxlate offers web development, mobile app development, and SEO optimization for Indian businesses. No pricing, just quality — get a custom quote.",
  alternates: {
    canonical: "https://www.oxlate.com/services",
  },
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Page hero */}
        <section className="bg-background px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-4">Our Services</p>
            <h1 className="mb-6">Three disciplines. Done properly.</h1>
            <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
              We build websites, mobile apps, and SEO strategies for Indian businesses — focused, not scattered.
            </p>
          </div>
        </section>

        {/* Service sections */}
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Globe
          const isEven = i % 2 === 0
          return (
            <section
              key={service.id}
              id={service.anchor}
              className={[
                "scroll-mt-20 px-6 py-20 lg:px-16",
                isEven ? "bg-muted" : "bg-surface",
              ].join(" ")}
            >
              <div className="mx-auto max-w-7xl">
                <div className="grid items-start gap-16 lg:grid-cols-2">
                  {/* Text */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint">
                      <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="mb-5">{service.title}</h2>
                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-[#A84923] hover:gap-3"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Features list */}
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 shadow-[var(--shadow-card-resting)]">
                      <p className="eyebrow mb-6">What's included</p>
                      <ul className="space-y-4">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-tint">
                              <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                            </span>
                            <span className="text-sm leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
