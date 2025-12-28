export type TechType =
  | "python"
  | "java"
  | "html"
  | "css"
  | "tailwind"
  | "github"
  | "vercel"
  | "vite"
  | "nextjs"
  | "mysql"
  | "tensorflow"
  | "react"
  | "node";

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
    iconOpacity: number;
  depthOffset: number; // visual stacking illusion
  hideOnMobile?: boolean;
  fillColor: string;
  rimColor: string;
  shadowColor: string;
  lift: number;
  shadowBlur: number;
  shadowOffset: number;
}


export interface OrbitSystemConfig {
  centerClearRadius: number;
  backgroundRadius: number;
  enableAnimation: boolean;
  mobileMaxOrbits: number;
  orbits: OrbitVisualConfig[];
  techOrder: TechType[];
}
