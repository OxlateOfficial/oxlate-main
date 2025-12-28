import { FloatingIconConfig } from '@/types/icons';

export const DEFAULT_ORBIT_CONFIG: FloatingIconConfig = {
  enableAnimation: true,

  techOrder: [
    'python',
    'java',
    'html',
    'github',
    'vercel',
    // 'railway',
    'nextjs',
  ],

  layers: [
    {
      radius: 480,
      speed: 6,
      direction: 1,
      elementCount: 8,
      iconSize: 34,
      iconOpacity: 0.3,
    },
    {
      radius: 600,
      speed: 5,
      direction: -1,
      elementCount: 12,
      iconSize: 38,
      iconOpacity: 0.45,
    },
    {
      radius: 740,
      speed: 4,
      direction: 1,
      elementCount: 16,
      iconSize: 42,
      iconOpacity: 0.6,
    },
    {
      radius: 900,
      speed: 3,
      direction: -1,
      elementCount: 22,
      iconSize: 46,
      iconOpacity: 0.75,
    },
  ],
};
