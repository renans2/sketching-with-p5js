import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const rotatingSquares = (p: p5) => {
  const OFFSET = 20;
  let nSquares: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.rectMode(p.CENTER);
    p.noFill();
    p.stroke(255, 130);
    //noStroke();
    nSquares = p.width / OFFSET;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.draw = () => {
    p.background(0, 50);
    //fill(255, 5);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < nSquares; i++) {
      const side = p.map(i, 0, nSquares, p.width, 0);
      const angle = p.frameCount * (i + 1) * 0.002;
      p.push();
      p.rotate(angle);
      p.rect(0, 0, side, side);
      p.pop();
    }
  };
};
