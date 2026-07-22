import Link from "next/link"
import { Globe, Smartphone, TrendingUp, ArrowRight } from "lucide-react"
import { services } from "@/lib/data/services"

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
}

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <p className="eyebrow mb-3">What We Build</p>
          <h2 className="mb-4 max-w-xl">Three services, done properly</h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            We focus on three disciplines. This narrow scope is intentional — deep expertise, not a sprawling service list.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe
            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-[var(--radius-md)] border border-border bg-surface p-8 shadow-[var(--shadow-card-resting)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-primary-tint transition-colors duration-200 group-hover:bg-primary">
                  <Icon
                    className="h-6 w-6 text-primary transition-colors duration-200 group-hover:text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3">{service.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn more */}
                <Link
                  href={`/services#${service.anchor}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-150 hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
