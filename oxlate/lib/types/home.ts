export interface Capability {
  label: string
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right'
  subtext?: string
}

export interface StaircaseCard {
  id: string
  number: string
  category: string
  title: string
  shortSummary: string
  fullBody: string
  highlights: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  type: 'Independent Project' | "Founding Developer's Work"
  description: string
  tags: string[]
  stats?: string
  accentColor?: string
}
