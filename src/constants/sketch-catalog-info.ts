import type { SketchInfo, SketchModule } from "../types/SketchInfo";
import RotatingSquaresDashboard from "../components/controls/rotating-squares";
import { getSketchSourceUrl } from "../utils/get-sketch-source";

export const SKETCH_CATALOG_INFO: SketchInfo[] = [
  {
    path: "pine-tree",
    title: "Pine Tree",
    loadSketch: () => import("../sketches/pineTree") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("pineTree"),
  },
  {
    path: "flow-field",
    title: "Flow Field",
    loadSketch: () => import("../sketches/flowField") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("flowField"),
  },
  {
    path: "rotating-squares",
    title: "Rotating Squares",
    loadSketch: () =>
      import("../sketches/rotatingSquares") as Promise<SketchModule>,
    dashboard: RotatingSquaresDashboard,
    githubUrl: getSketchSourceUrl("rotatingSquares"),
  },
  {
    path: "bouncing-lines",
    title: "Bouncing Lines",
    loadSketch: () =>
      import("../sketches/bouncingLines") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("bouncingLines"),
  },
  {
    path: "bouncing-circles",
    title: "Bouncing Circles",
    loadSketch: () =>
      import("../sketches/bouncingCircles") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("bouncingCircles"),
  },
  {
    path: "circles-around-circles",
    title: "Circles Around Circles",
    loadSketch: () =>
      import("../sketches/circlesAroundCircles") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("circlesAroundCircles"),
  },
  {
    path: "connected-dots",
    title: "Connected Dots",
    loadSketch: () =>
      import("../sketches/connectedDots") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("connectedDots"),
  },
  {
    path: "cow-effect",
    title: "Cow Effect",
    loadSketch: () => import("../sketches/cowEffect") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("cowEffect"),
  },
  {
    path: "flow-field-simulation",
    title: "Flow Field Simulation",
    loadSketch: () =>
      import("../sketches/flowFieldSimulation") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("flowFieldSimulation"),
  },
  {
    path: "insertion-sort",
    title: "Insertion Sort",
    loadSketch: () =>
      import("../sketches/insertionSort") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("insertionSort"),
  },
  {
    path: "kaleidoscope",
    title: "Kaleidoscope",
    loadSketch: () =>
      import("../sketches/kaleidoscope") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("kaleidoscope"),
  },
  {
    path: "manual-clock",
    title: "Manual Clock",
    loadSketch: () =>
      import("../sketches/manualClock") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("manualClock"),
  },
  {
    path: "matrix-digital-rain",
    title: "Matrix Digital Rain",
    loadSketch: () =>
      import("../sketches/matrixDigitalRain") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("matrixDigitalRain"),
  },
  {
    path: "trippy-effect",
    title: "Trippy Effect",
    loadSketch: () =>
      import("../sketches/trippyEffect") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("trippyEffect"),
  },
  {
    path: "sync-by-sin",
    title: "Sync By Sin",
    loadSketch: () => import("../sketches/syncBySin") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("syncBySin"),
  },
  {
    path: "spirograph",
    title: "Spirograph",
    loadSketch: () => import("../sketches/spirograph") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("spirograph"),
  },
  {
    path: "spiral-rgb",
    title: "Spiral RGB",
    loadSketch: () => import("../sketches/spiralRGB") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("spiralRGB"),
  },
  {
    path: "sin-visualization",
    title: "Sin Visualization",
    loadSketch: () =>
      import("../sketches/sinVisualization") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("sinVisualization"),
  },
  {
    path: "sin-cos-waves",
    title: "Sin-Cos Waves",
    loadSketch: () =>
      import("../sketches/sinCosWaves") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("sinCosWaves"),
  },
  {
    path: "rotate-and-align",
    title: "Rotate And Align",
    loadSketch: () =>
      import("../sketches/rotateAndAlign") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("rotateAndAlign"),
  },
  {
    path: "recursive-trees",
    title: "Recursive Trees",
    loadSketch: () =>
      import("../sketches/recursiveTrees") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("recursiveTrees"),
  },
  {
    path: "random-tree",
    title: "Random Tree",
    loadSketch: () => import("../sketches/randomTree") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("randomTree"),
  },
  {
    path: "random-topographic-maps",
    title: "Random Topographic Maps",
    loadSketch: () =>
      import("../sketches/randomTopographicMaps") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("randomTopographicMaps"),
  },
  {
    path: "rainbow-flower",
    title: "Rainbow Flower",
    loadSketch: () =>
      import("../sketches/rainbowFlower") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("rainbowFlower"),
  },
  {
    path: "perlin-noise-waves",
    title: "Perlin Noise Waves",
    loadSketch: () =>
      import("../sketches/perlinNoiseWaves") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("perlinNoiseWaves"),
  },
  {
    path: "perlin-noise-tree",
    title: "Perlin Noise Tree",
    loadSketch: () =>
      import("../sketches/perlinNoiseTree") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("perlinNoiseTree"),
  },
  {
    path: "optical-illusion-circles",
    title: "Optical Illusion Circles",
    loadSketch: () =>
      import("../sketches/opticalIllusionCircles") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("opticalIllusionCircles"),
  },
  {
    path: "animated-topgraphic-maps",
    title: "Animated Topographic Maps",
    loadSketch: () =>
      import("../sketches/animatedTopographicMaps") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("animatedTopographicMaps"),
  },
  {
    path: "perlin-noise-rays",
    title: "Perlin Noise Rays",
    loadSketch: () =>
      import("../sketches/perlinNoiseRays") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("perlinNoiseRays"),
  },
  {
    path: "mirror-draw",
    title: "Mirror Draw",
    loadSketch: () => import("../sketches/mirrorDraw") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("mirrorDraw"),
  },
  {
    path: "pendulum-waves",
    title: "Pendulum Waves",
    loadSketch: () =>
      import("../sketches/pendulumWaves") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("pendulumWaves"),
  },
  {
    path: "fireworks",
    title: "Fireworks",
    loadSketch: () => import("../sketches/fireworks") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("fireworks"),
  },
  {
    path: "sand-effect",
    title: "Sand Effect",
    loadSketch: () => import("../sketches/sandEffect") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("sandEffect"),
  },
  {
    path: "rings-draw",
    title: "Rings Draw",
    loadSketch: () => import("../sketches/ringsDraw") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("ringsDraw"),
  },
  {
    path: "rotating-circles",
    title: "Rotating Circles",
    loadSketch: () =>
      import("../sketches/rotatingCircles") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("rotatingCircles"),
  },
  {
    path: "circle-loop",
    title: "Circle Loop",
    loadSketch: () => import("../sketches/circleLoop") as Promise<SketchModule>,
    githubUrl: getSketchSourceUrl("circleLoop"),
  },
];
