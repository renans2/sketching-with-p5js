import type { JSX } from "react";
import p5 from "p5";

export interface SketchModule {
  sketch: (p: p5) => void;
}

export interface SketchInfo {
  path: string;
  title: string;
  loadSketch: () => Promise<SketchModule>;
  dashboard?: () => JSX.Element;
  githubUrl: string;
}
