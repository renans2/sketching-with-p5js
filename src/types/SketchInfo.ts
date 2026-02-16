import p5 from "p5";
import type { JSX } from "react";

export interface SketchInfo {
  path: string;
  title: string;
  script: (p: p5) => void;
  dashboard?: () => JSX.Element;
  githubUrl: string;
}
