import type { Control } from "../types/controls";
import type {
  RotatingSquaresProps,
  SpirographProps,
  SpiralRgbProps,
  RotateAndAlignProps,
  PerlinNoiseWavesProps,
  PendulumWavesProps,
  OpticalIllusionCirclesProps,
  MirrorDrawProps,
  KaleidoscopeProps,
  CowEffectProps,
  CirclesAroundCirclesProps,
  CircleLoopProps,
  BouncingLinesProps,
  BouncingCirclesProps,
  AnimatedTopographicMapsProps,
  AnimatedFlowFieldProps,
  ConnectedDotsProps,
  RainbowFlowerProps,
  RotatingCirclesProps,
  SandEffectProps,
  SinCosWavesProps,
  SinVisualizationProps,
  TrippyEffectProps,
} from "../types/sketches-props";
import type { SketchFile } from "../types/SketchFile";

type DashboardProps = {
  initialValue: Record<string, number | boolean | Function>;
  controls: Control[];
};

export const VARIABLES_CONTROLS_MAPPER: Record<SketchFile, DashboardProps> = {
  "rotating-squares": {
    initialValue: {
      n: 40,
      speed: 0.00175,
      insideFaster: true,
    } as RotatingSquaresProps,
    controls: [
      {
        type: "clearButton",
      },
      {
        type: "slider",
        key: "n",
        label: "Number of Squares",
        min: 1,
        max: 100,
        step: 1,
      },
      {
        type: "slider",
        key: "speed",
        label: "Speed",
        min: 0,
        max: 0.01,
      },
      {
        type: "checkbox",
        key: "insideFaster",
        label: "Inside faster",
        default: true,
      },
    ],
  },
  spirograph: {
    initialValue: {
      speed: 10,
      radius1: 200,
      radius2: 200,
      colorSpeed: 0.5,
      leadAngleInc: 0.03,
      angleInc: 0.024131,
    } as SpirographProps,
    controls: [
      { type: "slider", key: "speed", label: "Speed", min: 1, max: 20 },
      { type: "slider", key: "radius1", label: "Radius 1", min: 10, max: 400 },
      { type: "slider", key: "radius2", label: "Radius 2", min: 10, max: 400 },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0,
        max: 5,
      },
      {
        type: "slider",
        key: "leadAngleInc",
        label: "Lead Angle Inc",
        min: 0,
        max: 0.1,
      },
      {
        type: "slider",
        key: "angleInc",
        label: "Angle Inc",
        min: 0,
        max: 0.1,
      },
      {
        type: "clearButton",
      },
    ],
  },

  "spiral-rgb": {
    initialValue: {
      n: 30,
      insideFaster: false,
      speed: 0.005,
      radius: 14,
      colorSpeed: 3,
      backgroundOpacity: 0.5,
      noFill: false,
    } as SpiralRgbProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 1, max: 100 },
      {
        type: "checkbox",
        key: "insideFaster",
        label: "Inside Faster",
        default: false,
      },
      {
        type: "slider",
        key: "speed",
        label: "Speed",
        min: 0.0001,
        max: 0.01,
      },
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 50 },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0,
        max: 10,
      },
      {
        type: "slider",
        key: "backgroundOpacity",
        label: "Background Opacity",
        min: 0,
        max: 1,
      },
      { type: "checkbox", key: "noFill", label: "No Fill", default: false },
      {
        type: "clearButton",
      },
    ],
  },

  "rotate-and-align": {
    initialValue: {
      globalSpeed: 0.002,
      n: 20,
      insideFaster: true,
    } as RotateAndAlignProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 3, max: 100, step: 1 },
      {
        type: "slider",
        key: "globalSpeed",
        label: "Global Speed",
        min: 0.0001,
        max: 0.01,
      },
      {
        type: "checkbox",
        key: "insideFaster",
        label: "Inside Faster",
        default: false,
      },
    ],
  },

  "perlin-noise-waves": {
    initialValue: {
      n: 50,
      noiseMultiplier: 0.002,
      speed: 0.005,
      widthMultiplier: 0.25,
      heightMultiplier: 2,
      opacity: 1,
      backgroundOpacity: 1,
    } as PerlinNoiseWavesProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 5, max: 200 },
      {
        type: "slider",
        key: "noiseMultiplier",
        label: "Noise Multiplier",
        min: 0,
        max: 0.01,
      },
      { type: "slider", key: "speed", label: "Speed", min: 0.001, max: 0.05 },
      {
        type: "slider",
        key: "widthMultiplier",
        label: "Width Multiplier",
        min: 0.025,
        max: 10,
      },
      {
        type: "slider",
        key: "heightMultiplier",
        label: "Height Multiplier",
        min: 0.02,
        max: 10,
      },
      { type: "slider", key: "opacity", label: "Opacity", min: 0, max: 1 },
      {
        type: "slider",
        key: "backgroundOpacity",
        label: "Background Opacity",
        min: 0.01,
        max: 1,
      },
      {
        type: "clearButton",
      },
    ],
  },

  "pendulum-waves": {
    initialValue: {
      speed: 0.003,
      colorSpeed: 1,
      insideFaster: true,
    } as PendulumWavesProps,
    controls: [
      {
        type: "slider",
        key: "speed",
        label: "Speed",
        min: 0,
        max: 0.01,
      },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      {
        type: "checkbox",
        key: "insideFaster",
        label: "Inside Faster",
        default: true,
      },
    ],
  },

  "optical-illusion-circles": {
    initialValue: {
      n: 5,
      speed: 3,
    } as OpticalIllusionCirclesProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 1, max: 100, step: 1 },
      { type: "slider", key: "speed", label: "Speed", min: 0.1, max: 10 },
    ],
  },

  "mirror-draw": {
    initialValue: {
      divisions: 30,
      strokeWeight: 1,
      colored: true,
      opacity: 1,
      colorSpeed: 1,
      mirror: true,
    } as MirrorDrawProps,
    controls: [
      {
        type: "slider",
        key: "divisions",
        label: "Divisions",
        min: 3,
        max: 100,
        step: 1,
      },
      {
        type: "slider",
        key: "strokeWeight",
        label: "Stroke Weight",
        min: 1,
        max: 100,
        step: 1,
      },
      { type: "checkbox", key: "colored", label: "Colored", default: true },
      {
        type: "slider",
        key: "opacity",
        label: "Opacity",
        min: 0.01,
        max: 1,
      },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0,
        max: 50,
      },
      { type: "checkbox", key: "mirror", label: "Mirror", default: false },
      {
        type: "clearButton",
      },
    ],
  },

  kaleidoscope: {
    initialValue: {
      n: 100,
      speed: 0.01,
      colorSpeed: 0.2,
      strokeWeight: 1,
      opacity: 0.3,
    } as KaleidoscopeProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 10, max: 200 },
      { type: "slider", key: "speed", label: "Speed", min: 0.001, max: 0.05 },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0,
        max: 10,
      },
      {
        type: "slider",
        key: "strokeWeight",
        label: "Stroke Weight",
        min: 1,
        max: 10,
      },
      {
        type: "slider",
        key: "opacity",
        label: "Opacity",
        min: 0.05,
        max: 1,
      },
      {
        type: "clearButton",
      },
    ],
  },

  "cow-effect": {
    initialValue: {
      n: 75,
      noiseMultiplier: 0.05,
      speed: 0.035,
    } as CowEffectProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 1, max: 200 },
      {
        type: "slider",
        key: "noiseMultiplier",
        label: "Noise Multiplier",
        min: 0,
        max: 0.1,
      },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.1 },
    ],
  },

  "circles-around-circles": {
    initialValue: {
      radius: 15,
      n: 6,
      depth: 3,
      rotationSpeed: 0.01,
    } as CirclesAroundCirclesProps,
    controls: [
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 250 },
      { type: "slider", key: "n", label: "N", min: 1, max: 10, step: 1 },
      { type: "slider", key: "depth", label: "Depth", min: 1, max: 5, step: 1 },
      {
        type: "slider",
        key: "rotationSpeed",
        label: "Rotation Speed",
        min: 0,
        max: 0.1,
      },
    ],
  },

  "circle-loop": {
    initialValue: {
      n: 250,
      speed: 0.01,
      colorSpeed: 1,
      radius: 5,
    } as CircleLoopProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 25, max: 1000, step: 1 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.05 },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0.01,
        max: 10,
      },
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 50 },
      {
        type: "clearButton",
      },
    ],
  },

  "bouncing-lines": {
    initialValue: {
      n: 7,
      colorSpeed: 3,
      backgroundOpacity: 0.1,
      strokeWeight: 3,
    } as BouncingLinesProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 1, max: 50, step: 1 },
      {
        type: "slider",
        key: "colorSpeed",
        label: "Color Speed",
        min: 0,
        max: 10,
      },
      {
        type: "slider",
        key: "backgroundOpacity",
        label: "Background Opacity",
        min: 0,
        max: 1,
      },
      {
        type: "slider",
        key: "strokeWeight",
        label: "Stroke Weight",
        min: 1,
        max: 10,
      },
    ],
  },

  "bouncing-circles": {
    initialValue: {
      radius: 20,
      n: 50,
    } as BouncingCirclesProps,
    controls: [
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 50 },
      { type: "slider", key: "n", label: "N", min: 1, max: 200, step: 1 },
    ],
  },

  "animated-topographic-maps": {
    initialValue: {
      n: 150,
      noiseMultiplier: 0.015,
      gap: 0.0075,
      step: 0.05,
      speed: 0.0035,
    } as AnimatedTopographicMapsProps,
    controls: [
      { type: "slider", key: "n", label: "N", min: 1, max: 300, step: 1 },
      {
        type: "slider",
        key: "noiseMultiplier",
        label: "Noise Multiplier",
        min: 0,
        max: 0.05,
      },
      { type: "slider", key: "gap", label: "Gap", min: 0, max: 0.05 },
      { type: "slider", key: "step", label: "Step", min: 0, max: 0.2 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.05 },
    ],
  },

  "animated-flow-field": {
    initialValue: {
      particlesPerFrame: 5,
      noiseMultiplier: 0.005,
      noiseSpeed: 0.00005,
      particleSpeed: 1,
      strokeWidth: 1,
      strokeOpacity: 0.15,
      backgroundOpacity: 0,
    } as AnimatedFlowFieldProps,
    controls: [
      {
        type: "slider",
        key: "particlesPerFrame",
        label: "Particles Per Frame",
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "slider",
        key: "noiseMultiplier",
        label: "Noise Multiplier",
        min: 0.0005,
        max: 0.05,
      },
      {
        type: "slider",
        key: "noiseSpeed",
        label: "Noise Speed",
        min: 0,
        max: 0.005,
      },
      {
        type: "slider",
        key: "particleSpeed",
        label: "Particle Speed",
        min: 0.4,
        max: 10,
      },
      {
        type: "slider",
        key: "strokeWidth",
        label: "Stroke Width",
        min: 1,
        max: 30,
      },
      {
        type: "slider",
        key: "strokeOpacity",
        label: "Stroke Opacity",
        min: 0.05,
        max: 1,
      },
      {
        type: "slider",
        key: "backgroundOpacity",
        label: "Background Opacity",
        min: 0,
        max: 1,
      },
      {
        type: "clearButton",
      },
    ],
  },

  "connected-dots": {
    initialValue: {
      radius: 5,
      n: 10,
      speed: 0.001,
    } as ConnectedDotsProps,
    controls: [
      { type: "slider", key: "n", label: "Dots", min: 1, max: 200, step: 1 },
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 20 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.01 },
    ],
  },

  "rainbow-flower": {
    initialValue: {
      n: 100,
      radius: 15,
      speed: 0.001,
    } as RainbowFlowerProps,
    controls: [
      { type: "slider", key: "n", label: "Petals", min: 1, max: 300, step: 1 },
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 50 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.01 },
    ],
  },

  "rotating-circles": {
    initialValue: {
      nRings: 30,
      nCirclesPerRing: 5,
      circleRadius: 7,
      speed: 0.003,
    } as RotatingCirclesProps,
    controls: [
      {
        type: "slider",
        key: "nRings",
        label: "Rings",
        min: 1,
        max: 100,
        step: 1,
      },
      {
        type: "slider",
        key: "nCirclesPerRing",
        label: "Circles per Ring",
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "slider",
        key: "circleRadius",
        label: "Circle Radius",
        min: 1,
        max: 20,
      },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.02 },
    ],
  },

  "sand-effect": {
    initialValue: {
      n: 100,
    } as SandEffectProps,
    controls: [
      {
        type: "slider",
        key: "n",
        label: "Particles",
        min: 1,
        max: 500,
        step: 1,
      },
    ],
  },

  "sin-cos-waves": {
    initialValue: {
      n: 100,
      radius: 10,
      amplitude: 250,
      frequency: 2500,
    } as SinCosWavesProps,
    controls: [
      { type: "slider", key: "n", label: "Points", min: 1, max: 300, step: 1 },
      { type: "slider", key: "radius", label: "Radius", min: 1, max: 50 },
      {
        type: "slider",
        key: "amplitude",
        label: "Amplitude",
        min: 0,
        max: 500,
      },
      {
        type: "slider",
        key: "frequency",
        label: "Frequency",
        min: 0,
        max: 5000,
      },
    ],
  },

  "sin-visualization": {
    initialValue: {
      n: 100,
      speed: 0.035,
      maxRotation: 1.5,
    } as SinVisualizationProps,
    controls: [
      { type: "slider", key: "n", label: "Points", min: 1, max: 300, step: 1 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.1 },
      {
        type: "slider",
        key: "maxRotation",
        label: "Max Rotation",
        min: 0,
        max: 3,
      },
    ],
  },

  "trippy-effect": {
    initialValue: {
      n: 100,
      speed: 0.025,
      rotations: 20,
    } as TrippyEffectProps,
    controls: [
      { type: "slider", key: "n", label: "Points", min: 1, max: 300, step: 1 },
      { type: "slider", key: "speed", label: "Speed", min: 0, max: 0.1 },
      {
        type: "slider",
        key: "rotations",
        label: "Rotations",
        min: 1,
        max: 100,
      },
    ],
  },
};
