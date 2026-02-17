import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const randomTopographicMaps = (p: p5) => {
  let m1 = 0.0025;
  let gaps = 15;
  let gapInterval = 0.007;
  let gapOffset = 1 / gaps;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.pixelDensity(1);
    p.colorMode(p.HSL);
    p.noiseDetail(3, 1);

    drawMap();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.mouseClicked = () => {
    p.noiseSeed(p.random(100));
    drawMap();
  };

  function drawMap() {
    p.frameRate(1);
    p.background(0);
    p.loadPixels();
    // updateVariables();

    for (let i = 0; i < p.height; i++) {
      for (let j = 0; j < p.width; j++) {
        const v = (j + i * p.width) * 4;
        const nois = p.noise(j * m1, i * m1);

        for (let k = 0; k < gaps; k++) {
          if (
            k * gapOffset + gapOffset / 2 < nois &&
            nois <= k * gapOffset + gapOffset / 2 + gapInterval
          ) {
            const c = p.color(p.map(k, 0, gaps, 0, 270) - 95, 100, 50, 1);
            p.pixels[v] = p.red(c);
            p.pixels[v + 1] = p.green(c);
            p.pixels[v + 2] = p.blue(c);
            p.pixels[v + 3] = 255;
            break;
          }
        }
      }
    }
    p.updatePixels();
  }

  // function updateVariables() {
  //   gaps = p.map(p.mouseX, 0, p.width, 0, 40);
  //   gapInterval = p.map(p.mouseY, 0, p.height, 0.0015, 0.05);
  //   gapOffset = 1 / gaps;
  // }
};
