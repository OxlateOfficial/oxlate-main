'use client'

interface MotifProps {
  className?: string
  variant?: 'hero' | 'section' | 'subtle'
}

export function Motif({ className = '', variant = 'hero' }: MotifProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="oxlate-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--bronze)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="var(--foreground)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--bronze)" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main Valley / Converging Mountain Motif (Top-Left and Top-Right sloping down to Center) */}
      <path
        d="M0 40 L600 520 L1200 40"
        fill="none"
        stroke="url(#oxlate-line-grad)"
        strokeWidth="1.2"
        strokeDasharray={variant === 'subtle' ? '4 4' : undefined}
        opacity={variant === 'subtle' ? 0.2 : 0.45}
      />
      <path
        d="M0 100 L600 520 L1200 100"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="0.8"
        opacity={variant === 'subtle' ? 0.12 : 0.25}
      />
      <path
        d="M0 160 L600 520 L1200 160"
        fill="none"
        stroke="var(--bronze)"
        strokeWidth="0.8"
        opacity={variant === 'subtle' ? 0.1 : 0.2}
      />

      {/* Inner framing lines */}
      <path
        d="M180 0 L600 520 L1020 0"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="0.6"
        opacity={0.15}
      />

      {/* Low Center Apex Point Indicator */}
      <circle cx="600" cy="520" r="3" fill="var(--bronze)" opacity="0.7" />
    </svg>
  )
}
