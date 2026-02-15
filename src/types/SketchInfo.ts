import p5 from "p5";

export interface SketchInfo {
  path: string;
  title: string;
  script: (p: p5) => void;
  githubUrl: string;
}
