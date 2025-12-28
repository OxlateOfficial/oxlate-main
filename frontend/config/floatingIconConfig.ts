// floatingIconConfig.ts
import { OrbitSystemConfig } from '@/types/icons';

export const DEFAULT_ORBIT_CONFIG: OrbitSystemConfig = {
  centerClearRadius: 240,
  backgroundRadius: 0,
  enableAnimation: true,
  mobileMaxOrbits: 6, // not used anymore for hiding

  techOrder: ['python', 'java', 'html', 'github', 'vercel', 'railway', 'nextjs'],

  orbits: [
    // INNER ORBIT (very dim)
    {
      radius: 480,
      speed: 0.016,
      direction: 1,
      elementCount: 6,
      iconSize: 36,
      primaryColor: '#3B82F6',
      secondaryColor: '#93C5FD',
      iconOpacity: 0.25,
    },

    // STAGE 2
    {
      radius: 500,
      speed: 0.014,
      direction: -1,
      elementCount: 10,
      iconSize: 38,
      primaryColor: '#10B981',
      secondaryColor: '#6EE7B7',
      iconOpacity: 0.45,
    },

    // STAGE 3
    {
      radius: 600,
      speed: 0.012,
      direction: 1,
      elementCount: 12,
      iconSize: 40,
      primaryColor: '#8B5CF6',
      secondaryColor: '#C4B5FD',
      iconOpacity: 0.6,
    },

    // STAGE 4
    {
      radius: 720,
      speed: 0.01,
      direction: -1,
      elementCount: 14,
      iconSize: 42,
      primaryColor: '#F59E0B',
      secondaryColor: '#FCD34D',
      iconOpacity: 0.75,
    },

    // STAGE 5
    {
      radius: 880,
      speed: 0.008,
      direction: 1,
      elementCount: 18,
      iconSize: 46,
      primaryColor: '#64748B',
      secondaryColor: '#CBD5E1',
      iconOpacity: 0.85,
    },

    // STAGE 6 (OUTER, strongest)
    {
      radius: 1080,
      speed: 0.006,
      direction: -1,
      elementCount: 24,
      iconSize: 50,
      primaryColor: '#94A3B8',
      secondaryColor: '#E2E8F0',
      iconOpacity: 0.9,
    },
  ],
};
