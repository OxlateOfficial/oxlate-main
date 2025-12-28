export type TechType =
  | 'python'
  | 'java'
  | 'html'
  | 'github'
  | 'vercel'
  | 'railway';

export interface OrbitVisualConfig {
  radius: number;
  speed: number;
  direction: 1 | -1;

  strokeWidth: number;
  strokeOpacity: number;
  dashArray?: string;

  elementCount: number;
  iconSize: number;

  primaryColor: string;
  secondaryColor: string;

  /** NEW */
  fillOpacity: number;
  depthOffset: number; // visual stacking illusion
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
