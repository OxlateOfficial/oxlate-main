'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Laptop, Smartphone, CheckCircle2, ShieldCheck, Zap, Code2, Sparkles, Layers, BookOpen, Trash2, Edit2, Pencil, Command } from 'lucide-react'
import { Capability } from '@/lib/types/home'

interface DeviceMockupProps {
  capabilities: Capability[]
  targetRef?: React.RefObject<HTMLDivElement | null>
}

// Precise Drafting Pen Cursor (Hotspot aligned at top-left tip)
const PEN_CURSOR_URL = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23A87445' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/><circle cx='3' cy='21' r='1.5' fill='%23A87445'/></svg>") 3 21, crosshair`

export function DeviceMockup({ capabilities, targetRef }: DeviceMockupProps) {
  const [deviceType, setDeviceType] = useState<'phone' | 'laptop'>('laptop')
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef || containerRef,
    offset: ["start start", "end end"]
  })

  // ELEGANT 3D LAPTOP OPENING & HINGE PIVOT ON SCROLL
  // Screen Lid: stays full scale, hinges backward (-22deg) as user scrolls down
  const screenRotateX = useTransform(scrollYProgress, [0, 0.7], [0, -22])
  const screenTranslateZ = useTransform(scrollYProgress, [0, 0.7], [0, -12])
  const screenScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.98])

  const hingeRotateX = useTransform(scrollYProgress, [0, 0.7], [0, 16])
  const hingeTranslateZ = useTransform(scrollYProgress, [0, 0.7], [0, -6])

  // Keyboard Deck: starts hidden (-50px translateY, 0 scaleY, 0 opacity) and unfolds smoothly into 3D perspective
  const keyboardRotateX = useTransform(scrollYProgress, [0, 0.7], [32, 14])
  const keyboardTranslateY = useTransform(scrollYProgress, [0, 0.7], [-50, 0])
  const keyboardScaleY = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  const keyboardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 0.8, 1])

  // Orbiting Badges fade in as laptop unfolds
  const badgeOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const badgeScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1])

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-5xl px-4 py-2 overflow-visible">
      {/* Device Mode Switcher Pill */}
      <div className="mb-4 flex justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-card/90 p-1.5 shadow-sm backdrop-blur-md">
          <button
            onClick={() => setDeviceType('phone')}
            className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              deviceType === 'phone'
                ? 'bg-foreground text-background shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Smartphone size={14} />
            Phone View
          </button>
          <button
            onClick={() => setDeviceType('laptop')}
            className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              deviceType === 'laptop'
                ? 'bg-foreground text-background shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Laptop size={14} />
            3D Unfolding Laptop
          </button>
        </div>
      </div>

      {/* Main Container with Flanking Declining Lines */}
      <div className="relative flex items-center justify-center overflow-visible">
        {/* Left Declining Structural Line */}
        <div className="pointer-events-none absolute -left-4 top-1/2 hidden h-px w-24 -translate-y-1/2 rotate-[-15deg] bg-gradient-to-r from-bronze to-transparent md:block lg:w-40" />
        
        {/* Right Declining Structural Line */}
        <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-24 -translate-y-1/2 rotate-[15deg] bg-gradient-to-l from-bronze to-transparent md:block lg:w-40" />

        {/* Floating Capability Badge Orbit - Top Left */}
        <motion.div
          style={{ opacity: badgeOpacity, scale: badgeScale }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-4 top-8 z-30 hidden md:block lg:-left-12"
        >
          <FloatingBadge
            icon={<Zap size={14} className="text-bronze" />}
            title="Client Fast & Quick"
            subtitle="Sub-50ms Latency"
          />
        </motion.div>

        {/* Floating Capability Badge Orbit - Top Right */}
        <motion.div
          style={{ opacity: badgeOpacity, scale: badgeScale }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -right-4 top-12 z-30 hidden md:block lg:-right-12"
        >
          <FloatingBadge
            icon={<Code2 size={14} className="text-bronze" />}
            title="TypeScript Native"
            subtitle="100% Type-Safe"
          />
        </motion.div>

        {/* Floating Capability Badge Orbit - Bottom Left */}
        <motion.div
          style={{ opacity: badgeOpacity, scale: badgeScale }}
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-4 bottom-16 z-30 hidden md:block lg:-left-12"
        >
          <FloatingBadge
            icon={<ShieldCheck size={14} className="text-bronze" />}
            title="Zero Tech Debt"
            subtitle="Clean Architecture"
          />
        </motion.div>

        {/* Floating Capability Badge Orbit - Bottom Right */}
        <motion.div
          style={{ opacity: badgeOpacity, scale: badgeScale }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute -right-4 bottom-12 z-30 hidden md:block lg:-right-12"
        >
          <FloatingBadge
            icon={<CheckCircle2 size={14} className="text-bronze" />}
            title="Transparent Delivery"
            subtitle="Direct Founders Access"
          />
        </motion.div>

        {/* Center Device Frame Container */}
        <div className="relative z-10 w-full overflow-visible">
          {deviceType === 'phone' ? (
            /* Modern Smartphone Frame */
            <motion.div
              key="phone"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mx-auto w-[290px] rounded-[42px] border-[8px] border-foreground/90 bg-foreground p-3 shadow-oxlate md:w-[320px]"
            >
              <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-background/90" />
              <div className="aspect-[9/18] overflow-hidden rounded-[30px] border border-background/20 bg-background p-4">
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
                  <span className="font-mono text-[10px] font-bold tracking-tight text-bronze">
                    OX <span className="text-foreground">/</span> LATE
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
                    <span className="font-mono text-[8px] text-muted-foreground">ONLINE</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="rounded-xl border border-border bg-card/50 p-3">
                    <p className="eyebrow text-bronze">Web & Mobile</p>
                    <h4 className="mt-1 text-sm font-medium tracking-tight">Thoughtful products built to scale.</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-border bg-card p-2.5">
                      <Layers size={14} className="text-bronze" />
                      <p className="mt-2 font-mono text-[9px] font-semibold text-foreground">Clean UI</p>
                      <p className="font-mono text-[8px] text-muted-foreground">Pixel perfect</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-2.5">
                      <Sparkles size={14} className="text-bronze" />
                      <p className="mt-2 font-mono text-[9px] font-semibold text-foreground">Fast FPS</p>
                      <p className="font-mono text-[8px] text-muted-foreground">Sub-100ms</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-bronze/30 bg-bronze/5 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold text-bronze">ACTIVE PROJECT</span>
                      <span className="rounded bg-bronze/20 px-1.5 py-0.5 font-mono text-[8px] text-bronze">PROD</span>
                    </div>
                    <p className="mt-2 text-xs font-semibold text-foreground">Oxlate Core Engine v2</p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                      <div className="h-full w-4/5 rounded-full bg-bronze" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-background/50" />
            </motion.div>
          ) : (
            /* STRAIGHT FRONT DISPLAY SCREEN + ELEGANT NATURAL 3D KEYBOARD CHASSIS */
            <div className="relative mx-auto w-full max-w-2xl py-1 overflow-visible [perspective:1200px]">
              <div className="relative flex flex-col items-center overflow-visible">
                {/* 1. DISPLAY SCREEN LID - 3D PIVOTING BACKWARD ON HINGE ON SCROLL */}
                <motion.div
                  style={{
                    rotateX: screenRotateX,
                    translateZ: screenTranslateZ,
                    scale: screenScale,
                    transformOrigin: 'bottom center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative z-20 w-full rounded-2xl border-[5px] border-neutral-800 bg-neutral-950 p-2 shadow-2xl transition-shadow duration-300"
                >
                  {/* Webcam Sensor Notch */}
                  <div className="absolute top-1 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-800 border border-neutral-700" />
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Glass Browser Frame */}
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                    {/* Browser Window Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/90 px-3 py-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-3 py-0.5 font-mono text-[10px] text-neutral-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                        https://oxlate.dev/blueprint
                      </div>
                      <span className="font-mono text-[9px] text-neutral-500">v2.4</span>
                    </div>

                    {/* Display Screen Content */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 p-4 text-white">
                      <div className="grid h-full grid-cols-3 gap-3">
                        {/* Sidebar Panel */}
                        <div className="col-span-1 flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <div>
                            <p className="font-mono text-[8px] uppercase tracking-widest text-bronze">Oxlate Core</p>
                            <h5 className="mt-0.5 text-xs font-bold text-neutral-100">System Spec</h5>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between font-mono text-[8px] text-neutral-400">
                              <span>Engine</span>
                              <span className="text-bronze">Active</span>
                            </div>
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                              <div className="h-full w-4/5 rounded-full bg-bronze" />
                            </div>
                            <div className="flex justify-between font-mono text-[8px] text-neutral-400">
                              <span>Safety</span>
                              <span className="text-emerald-400">100%</span>
                            </div>
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                              <div className="h-full w-full rounded-full bg-emerald-400" />
                            </div>
                          </div>
                        </div>

                        {/* Dashboard Metrics */}
                        <div className="col-span-2 flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                              <span className="font-mono text-[10px] font-bold text-neutral-100">Realtime Specs</span>
                              <span className="rounded bg-bronze/20 px-1.5 py-0.5 font-mono text-[8px] text-bronze">99.9% Uptime</span>
                            </div>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                              <div className="rounded-md border border-white/10 bg-black/50 p-2">
                                <p className="font-mono text-[7px] text-neutral-400">LATENCY</p>
                                <p className="text-xs font-bold text-bronze">18ms</p>
                              </div>
                              <div className="rounded-md border border-white/10 bg-black/50 p-2">
                                <p className="font-mono text-[7px] text-neutral-400">FPS</p>
                                <p className="text-xs font-bold text-emerald-400">60 FPS</p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-md border border-bronze/30 bg-bronze/10 p-2">
                            <p className="font-mono text-[8px] font-semibold text-bronze">3D SYNCHRONIZED SCROLL MOTION</p>
                            <p className="mt-0.5 text-[9px] text-neutral-300">
                              Screen lid pivots smoothly backward on hinge while lower keyboard deck unfolds in 3D perspective on scroll.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. LAPTOP HINGE BAR (3D PIVOTING BACKWARD ON SCROLL) */}
                <motion.div
                  style={{
                    rotateX: hingeRotateX,
                    translateZ: hingeTranslateZ,
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d'
                  }}
                  className="relative z-30 h-2.5 w-full border-t border-neutral-700 bg-neutral-900 shadow-sm"
                >
                  <div className="mx-auto h-0.5 w-20 rounded-full bg-bronze/70" />
                </motion.div>

                {/* 3. LOWER KEYBOARD CHASSIS DECK (ELEGANT NATURAL UNFOLDING MOTION) */}
                <div className="relative w-full overflow-visible [perspective:1000px]">
                  <motion.div
                    style={{
                      rotateX: keyboardRotateX,
                      translateY: keyboardTranslateY,
                      scaleY: keyboardScaleY,
                      opacity: keyboardOpacity,
                      transformOrigin: 'top center',
                      transformStyle: 'preserve-3d'
                    }}
                    className="relative z-10 w-full min-h-[240px] md:min-h-[280px] rounded-b-2xl border-[5px] border-t-0 border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black p-4 pt-3 shadow-2xl overflow-visible"
                  >
                    {/* Metallic Accent Border */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />

                    {/* Keyboard Tray Layout */}
                    <div className="relative flex gap-3">
                      {/* Left Speaker Grill */}
                      <div className="flex w-3 flex-col justify-center gap-1.5 opacity-40">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={`spk-l-${i}`} className="h-0.5 w-full rounded-full bg-neutral-600" />
                        ))}
                      </div>

                      {/* Recessed Keyboard Well */}
                      <div className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950/90 p-3 shadow-inner">
                        {/* Function Keys Row */}
                        <div className="mb-1.5 flex justify-between gap-1">
                          {['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '⚡'].map((k, i) => (
                            <div
                              key={`fn-${i}`}
                              className="flex h-4 flex-1 items-center justify-center rounded-[2px] border border-white/5 bg-neutral-900 font-mono text-[7px] text-neutral-500 shadow-sm"
                            >
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Number Row */}
                        <div className="mb-1.5 flex justify-between gap-1">
                          {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'].map((k, i) => (
                            <div
                              key={`num-${i}`}
                              className="flex h-4.5 flex-1 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[8px] text-neutral-400 shadow-sm"
                            >
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* QWERTY Row 1 */}
                        <div className="mb-1.5 flex justify-between gap-1">
                          {['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                            <div
                              key={`qw1-${i}`}
                              className="flex h-4.5 flex-1 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[8px] text-neutral-400 shadow-sm"
                            >
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* QWERTY Row 2 */}
                        <div className="mb-1.5 flex justify-between gap-1">
                          {['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'return'].map((k, i) => (
                            <div
                              key={`qw2-${i}`}
                              className="flex h-4.5 flex-1 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[8px] text-neutral-400 shadow-sm"
                            >
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* QWERTY Row 3 */}
                        <div className="mb-1.5 flex justify-between gap-1">
                          {['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shift'].map((k, i) => (
                            <div
                              key={`qw3-${i}`}
                              className="flex h-4.5 flex-1 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[8px] text-neutral-400 shadow-sm"
                            >
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Spacebar & Modifier Keys Row */}
                        <div className="flex gap-1">
                          <div className="flex h-5 w-8 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400">fn</div>
                          <div className="flex h-5 w-8 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400">ctrl</div>
                          <div className="flex h-5 w-9 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400">opt</div>
                          <div className="flex h-5 w-10 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400"><Command size={9} /></div>
                          <div className="h-5 flex-1 rounded-[3px] border border-bronze/40 bg-neutral-900 shadow-[0_0_6px_rgba(168,116,69,0.25)]" />
                          <div className="flex h-5 w-10 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400"><Command size={9} /></div>
                          <div className="flex h-5 w-9 items-center justify-center rounded-[3px] border border-white/10 bg-neutral-900 font-mono text-[7px] text-neutral-400">opt</div>
                        </div>
                      </div>

                      {/* Right Speaker Grill */}
                      <div className="flex w-3 flex-col justify-center gap-1.5 opacity-40">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={`spk-r-${i}`} className="h-0.5 w-full rounded-full bg-neutral-600" />
                        ))}
                      </div>
                    </div>

                    {/* Generous Trackpad Area */}
                    <div className="mx-auto mt-3 h-16 w-52 rounded-xl border border-white/15 bg-neutral-900/60 shadow-inner" />

                    {/* Front Finger Notch */}
                    <div className="mx-auto mt-1.5 h-1 w-16 rounded-b-md bg-neutral-800 border-t border-white/10" />

                    {/* 4. ARCHITECTURAL BLUEPRINT DRAWING PAD */}
                    <ArchitecturalBlueprintNotepad />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Capabilities Grid (shown on small screens) */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-card p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-bronze" />
              <p className="font-mono text-xs font-semibold text-foreground">{cap.label}</p>
            </div>
            {cap.subtext && <p className="mt-1 text-[10px] text-muted-foreground">{cap.subtext}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ARCHITECTURAL BLUEPRINT DRAWING PAD SUB-COMPONENT */
function ArchitecturalBlueprintNotepad() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDrawingRef = useRef<boolean>(false)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)
  const [hasDrawn, setHasDrawn] = useState(false)

  // Draw clean architectural blueprint layout
  const drawPreSketchedBlueprint = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save()
    ctx.strokeStyle = '#A87445'
    ctx.lineWidth = 1.2
    ctx.globalAlpha = 0.5

    // Outer blueprint border
    ctx.strokeRect(15, 15, width - 30, height - 30)

    // Architectural System Columns
    ctx.strokeRect(25, 25, 100, 65)
    ctx.strokeRect(140, 25, 120, 65)
    ctx.strokeRect(275, 25, 100, 65)

    // Structural Lines & Elevation hatch
    ctx.beginPath()
    ctx.moveTo(25, 25)
    ctx.lineTo(125, 90)
    ctx.moveTo(275, 25)
    ctx.lineTo(375, 90)
    ctx.stroke()

    // Title Block
    ctx.fillStyle = '#A87445'
    ctx.font = '10px monospace'
    ctx.fillText('OX / LATE BLUEPRINT DRAFTING PAD', 25, height - 20)
    ctx.fillText('SCALE 1:1 | FREEHAND DRAWING SURFACE', 25, height - 8)

    ctx.restore()
  }

  // Set up high-DPI canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = (rect.width || 420) * dpr
      canvas.height = (rect.height || 180) * dpr

      ctx.scale(dpr, dpr)
      ctx.strokeStyle = '#171717' // Crisp dark blueprint ink
      ctx.lineWidth = 2.2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Pre-sketch initial blueprint grid
      drawPreSketchedBlueprint(ctx, rect.width || 420, rect.height || 180)
    }

    setupCanvas()
    window.addEventListener('resize', setupCanvas)
    return () => window.removeEventListener('resize', setupCanvas)
  }, [])

  // Dynamic Scale-Corrected 1:1 Coordinate Mapping
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    
    const dpr = window.devicePixelRatio || 1
    const displayWidth = rect.width || 1
    const displayHeight = rect.height || 1

    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top

    const x = (clientX / displayWidth) * (canvas.width / dpr)
    const y = (clientY / displayHeight) * (canvas.height / dpr)

    return { x, y }
  }

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.setPointerCapture(e.pointerId)
    const pos = getCoordinates(e)

    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
    lastPosRef.current = pos
    isDrawingRef.current = true
    setHasDrawn(true)
  }

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const pos = getCoordinates(e)
    if (lastPosRef.current) {
      ctx.beginPath()
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y)
      ctx.lineTo(pos.x, pos.y)
      ctx.stroke()
    }
    lastPosRef.current = pos
  }

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return
    const canvas = canvasRef.current
    if (canvas) {
      try {
        canvas.releasePointerCapture(e.pointerId)
      } catch {
        // Pointer capture release fallback
      }
    }
    isDrawingRef.current = false
    lastPosRef.current = null
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPreSketchedBlueprint(ctx, rect.width, rect.height)
    setHasDrawn(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="absolute right-4 -top-8 z-50 w-full max-w-md [transform:none]"
    >
      <div
        style={{ cursor: PEN_CURSOR_URL }}
        className="relative rounded-2xl border-2 border-bronze/50 bg-[#F6F3EB] p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-bronze"
      >
        {/* Binder Rings on Top */}
        <div className="absolute -top-3 left-6 flex gap-2.5">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={`ring-${idx}`}
              className="h-4.5 w-1.5 rounded-full border border-neutral-700 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-400 shadow-sm"
            />
          ))}
        </div>

        {/* Blueprint Header */}
        <div className="mb-2 flex items-center justify-between border-b border-bronze/30 pb-2">
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-bronze" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800">
              Oxlate Architectural Blueprint Pad
            </span>
          </div>
          <div className="flex items-center gap-2">
            {hasDrawn && (
              <button
                onClick={clearCanvas}
                className="flex items-center gap-1 rounded bg-neutral-200 px-2 py-0.5 font-mono text-[8px] font-semibold text-neutral-800 hover:bg-neutral-300"
              >
                <Trash2 size={9} />
                Reset Blueprint
              </button>
            )}
            <span className="flex items-center gap-1 rounded-full bg-bronze/15 px-2 py-0.5 font-mono text-[8px] font-bold text-bronze">
              <Pencil size={9} />
              PEN DRAWING ACTIVE
            </span>
          </div>
        </div>

        {/* Grid Blueprint Background Pattern */}
        <div className="pointer-events-none absolute inset-x-3 top-12 bottom-3 bg-[linear-gradient(to_right,#A8744522_1px,transparent_1px),linear-gradient(to_bottom,#A8744522_1px,transparent_1px)] bg-[size:14px_14px]" />

        {/* DEDICATED FLAT FREEHAND BLUEPRINT CANVAS OVERLAY */}
        <div className="relative h-44 w-full touch-none overflow-hidden rounded-xl border border-bronze/30 bg-transparent">
          <canvas
            ref={canvasRef}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerCancel={stopDrawing}
            style={{ cursor: PEN_CURSOR_URL, touchAction: 'none' }}
            className="absolute inset-0 z-30 h-full w-full"
          />
        </div>

        <p className="mt-2 text-center font-mono text-[8px] font-medium text-neutral-600">
          ✏️ Click & drag anywhere on the blueprint pad to draw 1:1 architectural sketches!
        </p>
      </div>
    </motion.div>
  )
}

function FloatingBadge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze hover:shadow-lg">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-bronze/10">
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs font-bold tracking-tight text-foreground group-hover:text-bronze">
          {title}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}
