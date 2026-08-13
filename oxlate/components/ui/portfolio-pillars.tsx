'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Code, ExternalLink } from 'lucide-react'
import { PortfolioItem } from '@/lib/types/home'

interface PortfolioPillarsProps {
  items: PortfolioItem[]
}

export function PortfolioPillars({ items }: PortfolioPillarsProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* 3 Pedestal Pillars Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-end md:gap-8 lg:gap-12">
        {items.map((item, index) => {
          // Staggered positioning matching sketch: 1st & 2nd higher, 3rd set lower
          const isLowerPillar = index === 2

          return (
            <div
              key={item.id}
              className={`flex flex-col justify-end transition-all duration-500 ${
                isLowerPillar ? 'md:translate-y-12' : 'md:translate-y-0'
              }`}
            >
              {/* Pedestal Top Badge */}
              <div className="mb-3 flex items-center justify-between px-2 font-mono text-[10px] text-muted-foreground">
                <span>STAND 0{index + 1}</span>
                {isLowerPillar ? <span>STAGGERED PEDESTAL</span> : <span>ELEVATED PEDESTAL</span>}
              </div>

              {/* Main Pillar Card */}
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-foreground/15 bg-card p-6 shadow-sm hover:border-bronze hover:shadow-xl md:p-8"
              >
                {/* Background Accent Lines */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-bronze/5 blur-2xl transition-all duration-500 group-hover:bg-bronze/15" />

                {/* Top Section */}
                <div>
                  {/* Category / Type Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-bronze/40 bg-bronze/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-bronze">
                      <Sparkles size={11} />
                      {item.type}
                    </span>

                    {item.stats && (
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {item.stats}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-bronze">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-border pt-5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-foreground/10 bg-foreground/5 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-wider text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-5 flex items-center justify-between font-mono text-xs font-semibold text-foreground group-hover:text-bronze">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.article>

              {/* Architectural Stand Base Column */}
              <div className="mt-3 mx-auto h-12 w-3/4 rounded-b-xl border-x border-b border-foreground/10 bg-foreground/[0.03] text-center font-mono text-[9px] text-muted-foreground/60 flex items-center justify-center">
                OXLATE PILLAR 0{index + 1}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
