import type { SketchInfo } from "../types/SketchInfo";
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
];
