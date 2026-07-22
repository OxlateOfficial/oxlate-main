import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABand() {
  return (
    <section className="bg-secondary px-6 py-20 text-center lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-4 text-secondary-foreground/50">Start your project</p>
        <h2 className="mb-6 text-secondary-foreground">
          Have a project in mind?
        </h2>
        <p className="mb-10 text-lg text-secondary-foreground/70">
          Tell us what you're building. We'll reply within 24 hours with a clear plan and honest quote.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-pill bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-150 hover:bg-[#A84923] hover:gap-4"
        >
          Get a Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
