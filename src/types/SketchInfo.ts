import type { JSX } from "react";

export interface SketchInfo {
  path: string;
  title: string;
  loadSketch: () => Promise<{ sketch: (p: any) => void }>;
  dashboard?: () => JSX.Element;
  githubUrl: string;
}
