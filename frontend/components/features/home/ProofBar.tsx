import { Code2, Smartphone, TrendingUp, Clock } from "lucide-react"
import { Divider } from "@/components/ui/divider"

const stats = [
  {
    icon: Code2,
    value: "Next.js · React Native · FastAPI",
    label: "Tech Stack Breadth",
  },
  {
    icon: Clock,
    value: "< 24 hrs",
    label: "Reply Commitment",
  },
  {
    icon: TrendingUp,
    value: "3+",
    label: "Years Production Apps",
  },
  {
    icon: Smartphone,
    value: "48 hrs",
    label: "Custom Quote Turnaround",
  },
]

export function ProofBar() {
  return (
    <section className="border-y border-border bg-surface px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="flex flex-1 items-center gap-4 px-6 py-8 first:pl-0 last:pr-0"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="stat-number text-lg">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
