import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const pineTree = (p: p5) => {
  const depth = 4;
  const startingLength = 80;
  const lengthDecay = 0.9;
  const angleDecay = 0.92;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.translate(p.width / 2, p.height);
    p.scale(1, -1);
    p.stroke(0, 255, 0);

    drawPineTree(0, startingLength, p.PI / 2.5, 25);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawPineTree(d: number, l: number, a: number, it: number) {
    if (d < depth) {
      let nextLen = l;
      let currAng = a;
      let mainTrunc = l;

      for (let i = 0; i < it; i++) {
        if (d === depth - 1) {
          p.strokeWeight(2);
          p.stroke(0, 255, 0, 50);
        } else {
          p.strokeWeight(1);
          p.stroke(166, 58, 0);
        }
        p.line(0, 0, 0, mainTrunc);
        p.translate(0, mainTrunc);

        p.push();
        p.rotate(a);
        drawPineTree(d + 1, mainTrunc / 3, a, it - i);
        p.pop();

        p.push();
        p.rotate(-a);
        drawPineTree(d + 1, mainTrunc / 3, a, it - i);
        p.pop();

        // nextLen *= lengthDecay;
        a *= angleDecay;
        mainTrunc *= 0.9;
      }
    }
  }
};
