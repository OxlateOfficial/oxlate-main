import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { portfolio } from "@/lib/data/portfolio"
import { Badge } from "@/components/ui/badge-oxlate"

export function WorkPreview() {
  // Show first 2 portfolio items
  const featured = portfolio.slice(0, 2)

  return (
    <section className="section-padding bg-muted px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Selected Work</p>
            <h2>Projects we're proud of</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-150 hover:gap-3"
          >
            View all work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 2-column grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-[var(--shadow-card-resting)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Honesty badge — required, non-optional */}
                <div className="absolute left-4 top-4">
                  <Badge variant="solid-tint">{project.label}</Badge>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6">
                <h3 className="mb-2 text-lg">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.caption}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-pill border border-border px-3 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
