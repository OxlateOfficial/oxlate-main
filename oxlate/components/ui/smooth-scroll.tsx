'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * Global Lenis Smooth Scroll Provider
 * Provides a fluid "sliding on ice" feel with momentum recoil across the site.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        // lerp controls linear interpolation for the "sliding on ice" momentum (0.08 = ultra smooth recoil glide)
        lerp: 0.08,
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.8,
        syncTouch: true,
        syncTouchLerp: 0.07,
        touchInertiaExponent: 1.7,
        autoRaf: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
