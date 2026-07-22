import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CTABand } from "@/components/features/home/CTABand"
import { PortfolioGrid } from "@/components/features/work/PortfolioGrid"

export const metadata: Metadata = {
  title: "Work | Oxlate — Portfolio",
  description:
    "Projects built by the Oxlate team — clearly labeled as independent projects or founding developer work. Honest portfolio, real outcomes.",
  alternates: {
    canonical: "https://www.oxlate.com/work",
  },
}

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Page hero */}
        <section className="bg-background px-6 py-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-4">Our Work</p>
            <h1 className="mb-6">Projects we've built</h1>
            <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
              Every project is labeled honestly — independent work or founding developer projects. No inflated client counts, no fabricated case studies.
            </p>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="section-padding bg-muted px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <PortfolioGrid />
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
