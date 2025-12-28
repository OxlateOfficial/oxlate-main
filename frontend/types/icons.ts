export type TechType =
  | 'python'
  | 'java'
  | 'html'
  | 'github'
  | 'vercel'
  | 'railway'
  | 'nextjs';

export interface OrbitVisualConfig {
  radius: number;
  speed: number;
  direction: 1 | -1;
  elementCount: number;
  iconSize: number;
  primaryColor: string;
  secondaryColor: string;
  iconOpacity: number;
  hideOnMobile?: boolean;
}

export interface OrbitSystemConfig {
  centerClearRadius: number;
  backgroundRadius: number;
  enableAnimation: boolean;
  mobileMaxOrbits: number;
  orbits: OrbitVisualConfig[];
  techOrder: TechType[];
}
