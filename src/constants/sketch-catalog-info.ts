import type { SketchInfo } from "../types/SketchInfo";
import RotatingSquaresDashboard from "../components/controls/rotating-squares";
import { pineTree } from "../sketches/pineTree";
import { flowField } from "../sketches/flowField";
import { rotatingSquares } from "../sketches/rotatingSquares";
import { bouncingLines } from "../sketches/bouncingLines";
import { bouncingCircles } from "../sketches/bouncingCircles";
import { circlesAroundCircles } from "../sketches/circlesAroundCircles";
import { connectedDots } from "../sketches/connectedDots";
import { cowEffect } from "../sketches/cowEffect";
import { flowFieldSimulation } from "../sketches/flowFieldSimulation";
import { insertionSort } from "../sketches/insertionSort";
import { kaleidoscope } from "../sketches/kaleidoscope";
import { manualClock } from "../sketches/manualClock";
import { matrixDigitalRain } from "../sketches/matrixDigitalRain";
import { getSketchSourceUrl } from "../utils/get-sketch-source";
import { trippyEffect } from "../sketches/trippyEffect";
import { syncBySin } from "../sketches/syncBySin";
import { spirograph } from "../sketches/spirograph";
import { spiralRGB } from "../sketches/spiralRGB";
import { sinVisualization } from "../sketches/sinVisualization";
import { sinCosWaves } from "../sketches/sinCosWaves";
import { rotateAndAlign } from "../sketches/rotateAndAlign";
import { recursiveTrees } from "../sketches/recursiveTrees";
import { randomTree } from "../sketches/randomTree";
import { randomTopographicMaps } from "../sketches/randomTopographicMaps";
import { rainbowFlower } from "../sketches/rainbowFlower";
import { perlinNoiseWaves } from "../sketches/perlinNoiseWaves";
import { perlinNoiseTree } from "../sketches/perlinNoiseTree";
import { opticalIllusionCircles } from "../sketches/opticalIllusionCircles";
import { animatedTopographicMaps } from "../sketches/animatedTopographicMaps";
import { perlinNoiseRays } from "../sketches/perlinNoiseRays";
import { mirrorDraw } from "../sketches/mirrorDraw";
import { pendulumWaves } from "../sketches/pendulumWaves";
import { fireworks } from "../sketches/fireworks";
import { sandEffect } from "../sketches/sandEffect";
import { ringsDraw } from "../sketches/ringsDraw";
import { rotatingCircles } from "../sketches/rotatingCircles";
import { circleLoop } from "../sketches/circleLoop";

export const SKETCH_CATALOG_INFO: SketchInfo[] = [
  {
    path: "pine-tree",
    title: "Pine Tree",
    script: pineTree,
    githubUrl: getSketchSourceUrl(pineTree.name),
  },
  {
    path: "flow-field",
    title: "Flow Field",
    script: flowField,
    githubUrl: getSketchSourceUrl(flowField.name),
  },
  {
    path: "rotating-squares",
    title: "Rotating Squares",
    script: rotatingSquares,
    dashboard: RotatingSquaresDashboard,
    githubUrl: getSketchSourceUrl(rotatingSquares.name),
  },
  {
    path: "bouncing-lines",
    title: "Bouncing Lines",
    script: bouncingLines,
    githubUrl: getSketchSourceUrl(bouncingLines.name),
  },
  {
    path: "bouncing-circles",
    title: "Bouncing Circles",
    script: bouncingCircles,
    githubUrl: getSketchSourceUrl(bouncingCircles.name),
  },
  {
    path: "circles-around-circles",
    title: "Circles Around Circles",
    script: circlesAroundCircles,
    githubUrl: getSketchSourceUrl(circlesAroundCircles.name),
  },
  {
    path: "connected-dots",
    title: "Connected Dots",
    script: connectedDots,
    githubUrl: getSketchSourceUrl(connectedDots.name),
  },
  {
    path: "cow-effect",
    title: "Cow Effect",
    script: cowEffect,
    githubUrl: getSketchSourceUrl(cowEffect.name),
  },
  {
    path: "flow-field-simulation",
    title: "Flow Field Simulation",
    script: flowFieldSimulation,
    githubUrl: getSketchSourceUrl(flowFieldSimulation.name),
  },
  {
    path: "insertion-sort",
    title: "Insertion Sort",
    script: insertionSort,
    githubUrl: getSketchSourceUrl(insertionSort.name),
  },
  {
    path: "kaleidoscope",
    title: "Kaleidoscope",
    script: kaleidoscope,
    githubUrl: getSketchSourceUrl(kaleidoscope.name),
  },
  {
    path: "manual-clock",
    title: "Manual Clock",
    script: manualClock,
    githubUrl: getSketchSourceUrl(manualClock.name),
  },
  {
    path: "matrix-digital-rain",
    title: "Matrix Digital Rain",
    script: matrixDigitalRain,
    githubUrl: getSketchSourceUrl(matrixDigitalRain.name),
  },
  {
    path: "trippy-effect",
    title: "Trippy Effect",
    script: trippyEffect,
    githubUrl: getSketchSourceUrl(trippyEffect.name),
  },
  {
    path: "sync-by-sin",
    title: "Sync By Sin",
    script: syncBySin,
    githubUrl: getSketchSourceUrl(syncBySin.name),
  },
  {
    path: "spirograph",
    title: "Spirograph",
    script: spirograph,
    githubUrl: getSketchSourceUrl(spirograph.name),
  },
  {
    path: "spiral-rgb",
    title: "Spiral RGB",
    script: spiralRGB,
    githubUrl: getSketchSourceUrl(spiralRGB.name),
  },
  {
    path: "sin-visualization",
    title: "Sin Visualization",
    script: sinVisualization,
    githubUrl: getSketchSourceUrl(sinVisualization.name),
  },
  {
    path: "sin-cos-waves",
    title: "Sin-Cos Waves",
    script: sinCosWaves,
    githubUrl: getSketchSourceUrl(sinCosWaves.name),
  },
  {
    path: "rotate-and-align",
    title: "Rotate And Align",
    script: rotateAndAlign,
    githubUrl: getSketchSourceUrl(rotateAndAlign.name),
  },
  {
    path: "recursive-trees",
    title: "Recursive Trees",
    script: recursiveTrees,
    githubUrl: getSketchSourceUrl(recursiveTrees.name),
  },
  {
    path: "random-tree",
    title: "Random Tree",
    script: randomTree,
    githubUrl: getSketchSourceUrl(randomTree.name),
  },
  {
    path: "random-topographic-maps",
    title: "Random Topographic Maps",
    script: randomTopographicMaps,
    githubUrl: getSketchSourceUrl(randomTopographicMaps.name),
  },
  {
    path: "rainbow-flower",
    title: "Rainbow Flower",
    script: rainbowFlower,
    githubUrl: getSketchSourceUrl(rainbowFlower.name),
  },
  {
    path: "perlin-noise-waves",
    title: "Perlin Noise Waves",
    script: perlinNoiseWaves,
    githubUrl: getSketchSourceUrl(perlinNoiseWaves.name),
  },
  {
    path: "perlin-noise-tree",
    title: "Perlin Noise Tree",
    script: perlinNoiseTree,
    githubUrl: getSketchSourceUrl(perlinNoiseTree.name),
  },
  {
    path: "optical-illusion-circles",
    title: "Optical Illusion Circles",
    script: opticalIllusionCircles,
    githubUrl: getSketchSourceUrl(opticalIllusionCircles.name),
  },
  {
    path: "animated-topgraphic-maps",
    title: "Animated Topographic Maps",
    script: animatedTopographicMaps,
    githubUrl: getSketchSourceUrl(animatedTopographicMaps.name),
  },
  {
    path: "perlin-noise-rays",
    title: "Perlin Noise Rays",
    script: perlinNoiseRays,
    githubUrl: getSketchSourceUrl(perlinNoiseRays.name),
  },
  {
    path: "mirror-draw",
    title: "Mirror Draw",
    script: mirrorDraw,
    githubUrl: getSketchSourceUrl(mirrorDraw.name),
  },
  {
    path: "pendulum-waves",
    title: "Pendulum Waves",
    script: pendulumWaves,
    githubUrl: getSketchSourceUrl(pendulumWaves.name),
  },
  {
    path: "fireworks",
    title: "Fireworks",
    script: fireworks,
    githubUrl: getSketchSourceUrl(fireworks.name),
  },
  {
    path: "sand-effect",
    title: "Sand Effect",
    script: sandEffect,
    githubUrl: getSketchSourceUrl(sandEffect.name),
  },
  {
    path: "rings-draw",
    title: "Rings Draw",
    script: ringsDraw,
    githubUrl: getSketchSourceUrl(ringsDraw.name),
  },
  {
    path: "rotating-circles",
    title: "Rotating Circles",
    script: rotatingCircles,
    githubUrl: getSketchSourceUrl(rotatingCircles.name),
  },
  {
    path: "circle-loop",
    title: "Circle Loop",
    script: circleLoop,
    githubUrl: getSketchSourceUrl(circleLoop.name),
  },
];
