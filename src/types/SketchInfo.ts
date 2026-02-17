import type { JSX } from "react";
import type p5 from "p5";

export interface SketchInfo {
  path: string;
  title: string;
  script: (p: p5) => void;
  dashboard?: () => JSX.Element;
  githubUrl: string;
}
