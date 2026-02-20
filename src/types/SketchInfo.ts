import type p5 from "p5";
import type { JSX, RefObject } from "react";

export interface SketchInfo {
  path: string;
  title: string;
  loadSketch: () => Promise<{
    sketch: (p: p5, controlsRef: RefObject<any>) => void;
  }>;
  dashboard?: (props: { controlsRef: RefObject<any> }) => JSX.Element;
  githubUrl: string;
  initialProps?: any;
}
