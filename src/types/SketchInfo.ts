import type p5 from "p5";
import type { ZustandStore } from "./ZustandStore";
import type { Control } from "./controls";

export interface SketchInfo {
  path: string;
  title: string;
  githubUrl: string;
  store: ZustandStore<any>;
  controls: Control[];
  loadSketch: () => Promise<{
    sketch: (p: p5, store: ZustandStore<any>) => void;
  }>;
}
