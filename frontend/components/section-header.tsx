import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", centered && "text-center", className)}>
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-pretty text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
