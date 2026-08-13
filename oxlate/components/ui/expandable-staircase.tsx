'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { StaircaseCard } from '@/lib/types/home'

interface ExpandableStaircaseProps {
  cards: StaircaseCard[]
}

export function ExpandableStaircase({ cards }: ExpandableStaircaseProps) {
  // Track hovered card index (default -1 means compressed)
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  // Split cards into Top Row (2 wide) and Bottom Row (2 narrow)
  const topRowCards = cards.slice(0, 2)
  const bottomRowCards = cards.slice(2, 4)

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* Top Row — 2 Cards with wider spacing */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
        {topRowCards.map((card) => (
          <StaircaseCardItem
            key={card.id}
            card={card}
            isExpanded={activeCardId === card.id}
            onHoverStart={() => setActiveCardId(card.id)}
            onHoverEnd={() => setActiveCardId(null)}
            onClick={() => setActiveCardId(activeCardId === card.id ? null : card.id)}
          />
        ))}
      </div>

      {/* Declining Center Visual Divider */}
      <div className="my-8 flex justify-center">
        <div className="h-8 w-px bg-gradient-to-b from-bronze/50 to-transparent" />
      </div>

      {/* Bottom Row — 2 Cards set lower with narrower spacing */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {bottomRowCards.map((card) => (
          <StaircaseCardItem
            key={card.id}
            card={card}
            isExpanded={activeCardId === card.id}
            onHoverStart={() => setActiveCardId(card.id)}
            onHoverEnd={() => setActiveCardId(null)}
            onClick={() => setActiveCardId(activeCardId === card.id ? null : card.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StaircaseCardItem({
  card,
  isExpanded,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  card: StaircaseCard
  isExpanded: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
        isExpanded
          ? '-translate-y-2 border-bronze bg-card shadow-xl ring-2 ring-bronze/30'
          : 'border-foreground/15 bg-card/60 hover:border-bronze/60 hover:bg-card hover:shadow-md'
      }`}
    >
      {/* Top Accent Line */}
      <div
        className={`h-1 w-full transition-colors duration-300 ${
          isExpanded ? 'bg-bronze' : 'bg-transparent group-hover:bg-bronze/40'
        }`}
      />

      <div className="p-6 md:p-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-bronze">{card.number}</span>
            <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {card.category}
            </span>
          </div>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              isExpanded
                ? 'border-bronze bg-bronze text-background'
                : 'border-border text-muted-foreground group-hover:border-bronze group-hover:text-bronze'
            }`}
          >
            {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-bronze">
          {card.title}
        </h3>

        {/* Short Summary (Always Visible) */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {card.shortSummary}
        </p>

        {/* Expanded Rich Content (Pops up when hovered/expanded) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-6 overflow-hidden border-t border-border pt-5"
            >
              <p className="text-sm leading-relaxed text-foreground/90">
                {card.fullBody}
              </p>

              {/* Highlights List */}
              <div className="mt-5 space-y-2">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-bronze">
                  KEY HIGHLIGHTS
                </p>
                {card.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={13} className="shrink-0 text-bronze" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link inside Card */}
              <div className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold text-bronze">
                <span>Explore {card.title}</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover prompt footer when compressed */}
      {!isExpanded && (
        <div className="flex items-center justify-between border-t border-foreground/5 bg-foreground/[0.02] px-6 py-2.5 font-mono text-[10px] text-muted-foreground group-hover:text-bronze">
          <span>Hover / Tap to Expand Section</span>
          <Plus size={12} />
        </div>
      )}
    </motion.div>
  )
}
