import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const perlinNoiseTree = (p: p5) => {
  const DEPTH = 7;
  const LENGTH = 10;
  let m1 = 0.0099;
  const offset = 5;
  let i = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(255);
    p.strokeWeight(5);

    p.translate(p.width / 2, p.height / 2);
    p.scale(1, -1);
    drawBranch(LENGTH, DEPTH);
    p.noLoop();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawBranch(length, depth) {
    if (depth > 0) {
      if (length > 0) {
        p.strokeWeight(p.map(depth, DEPTH, 1, 10, 3));
        p.point(0, 0);
        const n = p.noise(i * m1);
        const angle = p.map(n, 0, 1, 0, p.TWO_PI);
        const vec = p5.Vector.fromAngle(angle, offset);
        p.translate(vec.x, vec.y);
        i++;
        drawBranch(length - 1, depth);
      } else {
        // i += p.random(10);
        p.push();
        p.rotate(p.random(0, p.PI / 4));
        drawBranch(LENGTH, depth - 1);
        p.pop();

        // i += p.random(10);
        p.push();
        p.rotate(-p.random(0, p.PI / 4));
        drawBranch(LENGTH, depth - 1);
        p.pop();
      }
    } else {
      i = 0;
    }
  }
};
