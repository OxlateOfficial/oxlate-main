import type { Metadata } from "next"
import Link from "next/link"
import { Target, Zap, Shield, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CTABand } from "@/components/features/home/CTABand"

export const metadata: Metadata = {
  title: "About Oxlate | Digital Solutions for Indian Businesses",
  description:
    "Learn about Oxlate's mission — helping Indian businesses build a strong digital presence with transparent process, fast delivery, and honest communication.",
  alternates: {
    canonical: "https://www.oxlate.com/about",
  },
}

const values = [
  {
    icon: Target,
    title: "Transparency",
    description:
      "Clear scope, honest pricing, and straightforward communication at every step. You'll never be surprised by a change in cost or timeline.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast without cutting corners. Our lean process gets you from idea to live product in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "We build for performance, accessibility, and longevity — not just for the demo. Every product is production-grade from day one.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Page hero */}
        <section className="bg-background px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-4">About Oxlate</p>
            <h1 className="mb-6">
              Built by builders,{" "}
              <span className="text-accent">for builders</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
              We help Indian businesses succeed online with digital solutions that actually work — websites, apps, and SEO, with no hidden costs and no jargon.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-muted px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Our Mission</p>
                <h2 className="mb-6">Every business deserves a strong digital presence</h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Whether you're a shop owner in Chandigarh, a startup founder in Bangalore, or a service provider in Delhi — you deserve a digital presence that works as hard as you do.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our goal is to remove the complexity, hidden costs, and technical jargon from digital services and replace them with clear, affordable, effective solutions.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Reply Commitment", value: "< 24 hrs" },
                  { label: "Quote Turnaround", value: "48 hrs" },
                  { label: "Tech Stack", value: "Modern" },
                  { label: "Focus", value: "India" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[var(--radius-md)] border border-border bg-surface p-6 text-center shadow-[var(--shadow-card-resting)]"
                  >
                    <p className="stat-number text-2xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding bg-background px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="eyebrow mb-3">Our Approach</p>
              <h2>How we work</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    className="flex flex-col rounded-[var(--radius-md)] border border-border bg-surface p-8 shadow-[var(--shadow-card-resting)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
