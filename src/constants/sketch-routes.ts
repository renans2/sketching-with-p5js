import p5 from "p5";
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

interface SketchRoute {
  path: string;
  title: string;
  sketchScript: (p: p5) => void;
}

export const SKETCH_ROUTES: SketchRoute[] = [
  {
    path: "pine-tree",
    title: "Pine Tree",
    sketchScript: pineTree,
  },
  {
    path: "flow-field",
    title: "Flow Field",
    sketchScript: flowField,
  },
  {
    path: "rotating-squares",
    title: "Rotating Squares",
    sketchScript: rotatingSquares,
  },
  {
    path: "bouncing-lines",
    title: "Bouncing Lines",
    sketchScript: bouncingLines,
  },
  {
    path: "bouncing-circles",
    title: "Bouncing Circles",
    sketchScript: bouncingCircles,
  },
  {
    path: "circles-around-circles",
    title: "Circles Around Circles",
    sketchScript: circlesAroundCircles,
  },
  {
    path: "connected-dots",
    title: "Connected Dots",
    sketchScript: connectedDots,
  },
  {
    path: "cow-effect",
    title: "Cow Effect",
    sketchScript: cowEffect,
  },
  {
    path: "flow-field-simulation",
    title: "Flow Field Simulation",
    sketchScript: flowFieldSimulation,
  },
  {
    path: "insertion-sort",
    title: "Insertion Sort",
    sketchScript: insertionSort,
  },
  {
    path: "kaleidoscope",
    title: "Kaleidoscope",
    sketchScript: kaleidoscope,
  },
  {
    path: "manual-clock",
    title: "Manual Clock",
    sketchScript: manualClock,
  },
  {
    path: "matrix-digital-rain",
    title: "Matrix Digital Rain",
    sketchScript: matrixDigitalRain,
  },
];
