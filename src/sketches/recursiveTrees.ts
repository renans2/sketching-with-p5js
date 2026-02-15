import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const recursiveTrees = (p: p5) => {
  const depth = 10;
  const lengthDecay = 0.9;
  const startingLength = 100;

  const maxStrokeWeight = 15;
  const minStrokeWeight = 1;

  const minAngle = 0.2;
  const maxAngle = 0.5;

  let leafHue;
  let leafSat;
  const leafLight = 85;
  const leafAlpha = 0.075;
  const maxBranches = 3;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(255);
    p.translate(p.width / 2, p.height);
    p.scale(1, -1);
    p.colorMode(p.HSL);
    p.cursor(p.HAND);

    p.stroke(0, 0, 0, 0.1);
    p.fill(15, 40, 50, 0.5);

    setColors();

    p.push();
    drawTree(depth, startingLength, lengthDecay);
    p.pop();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawTree(d, l, lenDecay) {
    if (d > 0) {
      const w = p.map(d, depth, 0, maxStrokeWeight, minStrokeWeight);
      const nextW = p.map(d - 1, depth, 0, maxStrokeWeight, minStrokeWeight);

      p.quad(-w / 2, 0, -nextW / 2, l, nextW / 2, l, w / 2, 0);

      const newLength = l * lenDecay;
      p.translate(0, l);

      const nBranches = p.ceil(p.random(maxBranches));

      for (let i = 0; i < nBranches; i++) {
        p.push();
        const angle =
          p.random(minAngle, maxAngle) *
          (p.ceil(p.random(2)) % 2 == 0 ? -1 : 1);
        p.rotate(angle);
        drawTree(d - 1, newLength, p.random(lenDecay - 0.05, lenDecay + 0.02));
        p.pop();
      }
    } else {
      drawLeaf();
    }
  }

  function drawLeaf() {
    p.push();
    p.fill(leafHue, leafSat, leafLight, leafAlpha);
    p.circle(0, 0, p.random(25, 125));
    p.pop();
  }

  function setColors() {
    leafHue = p.random(360);
    leafSat = p.random(50, 100);
  }

  function drawNewTree() {
    setColors();
    drawTree(depth, startingLength, lengthDecay);
  }

  function mousePressed() {
    p.background(255);
    p.push();
    drawNewTree();
    p.pop();
  }
};
