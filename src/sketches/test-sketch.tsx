import p5 from "p5";

export interface SketchControls {
  color: string;
  size: number;
}

export const createSketch = (controls: SketchControls) => {
  return (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(30);
      p.fill(controls.color);
      p.circle(p.width / 2, p.height / 2, controls.size);
    };
  };
};
