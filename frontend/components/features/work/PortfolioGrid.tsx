import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge-oxlate"
import { portfolio } from "@/lib/data/portfolio"

export function PortfolioGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {portfolio.map((project) => (
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
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Honesty label — required on every card */}
            <div className="absolute left-4 top-4">
              <Badge variant="solid-tint">{project.label}</Badge>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <h3 className="mb-2 text-lg">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.caption}
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-border px-3 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-150 hover:gap-3"
              >
                View Project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
