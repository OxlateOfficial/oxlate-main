export type TechType =
  | 'python'
  | 'java'
  | 'html'
  | 'github'
  | 'vercel'
//   | 'railway'
  | 'nextjs';

export interface FloatingLayerConfig {
  radius: number;
  speed: number;          // degrees per second
  direction: 1 | -1;
  elementCount: number;
  iconSize: number;
  iconOpacity: number;
}

export interface FloatingIconConfig {
  enableAnimation: boolean;
  techOrder: TechType[];
  layers: FloatingLayerConfig[];
}
