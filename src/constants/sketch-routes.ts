import p5 from "p5";
import { pineTree } from "../sketches/pineTree";
import { flowField } from "../sketches/flowField";
import { rotatingSquares } from "../sketches/rotatingSquares";
import { bouncingLines } from "../sketches/bouncingLines";

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
];
