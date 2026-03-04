export type RotatingSquaresProps = {
  n: number;
  speed: number;
  insideFaster: boolean;
  clear: () => void;
};

export type SpirographProps = {
  speed: number;
  radius1: number;
  radius2: number;
  colorSpeed: number;
  leadAngleInc: number;
  angleInc: number;
  clear: () => void;
};

export type SpiralRgbProps = {
  n: number;
  insideFaster: boolean;
  speed: number;
  radius: number;
  colorSpeed: number;
  backgroundOpacity: number;
  noFill: boolean;
  clear: () => void;
};

export type RotateAndAlignProps = {
  globalSpeed: number;
  n: number;
  insideFaster: boolean;
};

export type PerlinNoiseWavesProps = {
  n: number;
  noiseMultiplier: number;
  speed: number;
  widthMultiplier: number;
  heightMultiplier: number;
  opacity: number;
  backgroundOpacity: number;
  clear: () => void;
};

export type PendulumWavesProps = {
  speed: number;
  colorSpeed: number;
  insideFaster: boolean;
};

export type OpticalIllusionCirclesProps = {
  n: number;
  speed: number;
};

export type MirrorDrawProps = {
  divisions: number;
  strokeWeight: number;
  colored: boolean;
  opacity: number;
  colorSpeed: number;
  mirror: boolean;
  clear: () => void;
};

export type KaleidoscopeProps = {
  n: number;
  speed: number;
  colorSpeed: number;
  strokeWeight: number;
  opacity: number;
  clear: () => void;
};

export type CowEffectProps = {
  n: number;
  noiseMultiplier: number;
  speed: number;
};

export type CirclesAroundCirclesProps = {
  radius: number;
  n: number;
  depth: number;
  rotationSpeed: number;
  colorVar: number;
};

export type CircleLoopProps = {
  n: number;
  speed: number;
  colorSpeed: number;
  radius: number;
  clear: () => void;
};

export type BoundingLinesProps = {
  n: number;
  colorSpeed: number;
  backgroundOpacity: number;
  strokeWeight: number;
};

export type BouncingCirclesProps = {
  radius: number;
  n: number;
};

export type AnimatedTopographicMapsProps = {
  n: number;
  noiseMultiplier: number;
  gap: number;
  step: number;
  speed: number;
};

export type AnimatedFlowFieldProps = {
  particlesPerFrame: number;
  noiseMultiplier: number;
  noiseSpeed: number;
  particleSpeed: number;
  strokeWidth: number;
  strokeOpacity: number;
  backgroundOpacity: number;
  clear: () => void;
};
