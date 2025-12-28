import { OrbitSystemConfig } from '@/types/orbit';

export const DEFAULT_ORBIT_CONFIG: OrbitSystemConfig = {
  centerClearRadius: 240,
  backgroundRadius: 0,
  enableAnimation: true,
  mobileMaxOrbits: 2,

  techOrder: [
    'python',
    'java',
    'html',
    'github',
    'vercel',
    'railway',
    'nextjs',
  ],

  orbits: [
    // ───────────────── INNER STAGE ─────────────────
    {
      radius: 420,
      speed: 0.016,
      direction: 1,
      strokeWidth: 1.6,
      strokeOpacity: 0.45,
      dashArray: '4 4',
      elementCount: 8,
      iconSize: 36,

      primaryColor: '#3B82F6',
      secondaryColor: '#93C5FD',

      fillColor: '#FFFFFF',
      fillOpacity: 0.95,
      rimColor: '#E5E7EB',
      shadowColor: '#000000',

      iconOpacity: 0.1,
      depthOffset: 0,
      lift: 0,
      shadowBlur: 20,
      shadowOffset: 14,
    },

    // ───────────────── STAGE 2 ─────────────────
    {
      radius: 500, // +80
      speed: 0.014,
      direction: -1,
      strokeWidth: 1.4,
      strokeOpacity: 0.4,
      dashArray: '6 6',
      elementCount: 10,
      iconSize: 38,

      primaryColor: '#10B981',
      secondaryColor: '#6EE7B7',

      fillColor: '#F9FAFB',
      fillOpacity: 0.85,
      rimColor: '#D1D5DB',
      shadowColor: '#000000',

      iconOpacity: 0.92,
      depthOffset: 10,
      lift: 12,
      shadowBlur: 24,
      shadowOffset: 18,
    },

    // ───────────────── STAGE 3 ─────────────────
    {
      radius: 600, // +100
      speed: 0.012,
      direction: 1,
      strokeWidth: 1.2,
      strokeOpacity: 0.32,
      dashArray: '4 10',
      elementCount: 12,
      iconSize: 40,

      primaryColor: '#8B5CF6',
      secondaryColor: '#C4B5FD',

      fillColor: '#F3F4F6',
      fillOpacity: 0.7,
      rimColor: '#E5E7EB',
      shadowColor: '#000000',

      iconOpacity: 0.84,
      depthOffset: 20,
      lift: 20,
      shadowBlur: 30,
      shadowOffset: 24,
    },

    // ───────────────── STAGE 4 ─────────────────
    {
      radius: 720, // +120
      speed: 0.01,
      direction: -1,
      strokeWidth: 1,
      strokeOpacity: 0.26,
      dashArray: '2 12',
      elementCount: 14,
      iconSize: 42,

      primaryColor: '#F59E0B',
      secondaryColor: '#FCD34D',

      fillColor: '#FFFAF0',
      fillOpacity: 0.55,
      rimColor: '#FDE68A',
      shadowColor: '#000000',

      iconOpacity: 0.75,
      depthOffset: 32,
      lift: 30,
      shadowBlur: 36,
      shadowOffset: 30,

      hideOnMobile: true,
    },

    // ───────────────── STAGE 5 ─────────────────
    {
      radius: 880, // +160
      speed: 0.008,
      direction: 1,
      strokeWidth: 0.9,
      strokeOpacity: 0.2,
      dashArray: '4 12',
      elementCount: 18,
      iconSize: 46,

      primaryColor: '#64748B',
      secondaryColor: '#CBD5E1',

      fillColor: '#FFFFFF',
      fillOpacity: 0.4,
      rimColor: '#E5E7EB',
      shadowColor: '#000000',

      iconOpacity: 4,
      depthOffset: 46,
      lift: 40,
      shadowBlur: 42,
      shadowOffset: 36,

      hideOnMobile: true,
    },

    // ───────────────── STAGE 6 (ATMOSPHERE) ─────────────────
    {
      radius: 1080, // +200
      speed: 0.006,
      direction: -1,
      strokeWidth: 0.8,
      strokeOpacity: 0.14,
      dashArray: '2 14',
      elementCount: 24,
      iconSize: 50,

      primaryColor: '#94A3B8',
      secondaryColor: '#E2E8F0',

      fillColor: '#FFFFFF',
      fillOpacity: 0.25,
      rimColor: '#E5E7EB',
      shadowColor: '#000000',

      iconOpacity: 1,
      depthOffset: 60,
      lift: 52,
      shadowBlur: 50,
      shadowOffset: 44,

      hideOnMobile: true,
    },
  ],
};
