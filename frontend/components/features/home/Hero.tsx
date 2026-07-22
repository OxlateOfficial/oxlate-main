import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pt-24 pb-0 lg:px-16">
      {/* Subtle warm grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C15A2E 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">

          {/* Text block — ~5/12 */}
          <div className="lg:col-span-5">
            {/* Eyebrow */}
            <p className="eyebrow mb-6">Digital Agency · India</p>

            {/* H1 — two lines, accent on second */}
            <h1 className="mb-6">
              We Build Digital{" "}
              <span className="text-accent">Solutions</span>
              {" "}That Actually Work
            </h1>

            {/* Subtext */}
            <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
              Websites, mobile apps, and SEO for Indian businesses — built fast, built right, and built to grow.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-150 hover:bg-[#A84923] hover:gap-3"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-150 hover:text-primary"
              >
                See Our Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Image block — ~7/12 */}
          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-[var(--radius-md)] bg-muted">
              {/* Aspect ratio container */}
              <div className="aspect-[4/3]">
                <Image
                  src="/images/Placeholder.jpg"
                  alt="Oxlate — Digital solutions built for Indian businesses"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                {/* Warm overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              {/* Floating proof card */}
              <div className="absolute bottom-6 left-6 rounded-[var(--radius-sm)] bg-surface px-5 py-4 shadow-md">
                <p className="stat-number text-2xl">3+</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Years Building Production Apps</p>
              </div>
            </div>

            {/* Decorative accent dot */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-tint opacity-60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
