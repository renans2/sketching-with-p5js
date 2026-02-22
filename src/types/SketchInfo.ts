import type p5 from "p5";
import type { JSX } from "react";
import type { ZustandStore } from "./ZustandStore";
import type { DashboardType } from "./DashboardType";

export interface SketchInfo {
  path: string;
  title: string;
  githubUrl: string;
  store?: ZustandStore<any>;
  dashboard?: (props: DashboardType<any>) => JSX.Element;
  loadSketch: () => Promise<{
    sketch: (p: p5, store: ZustandStore<any>) => void;
  }>;
}
