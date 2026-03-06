import type { MirrorDrawProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<MirrorDrawProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<MirrorDrawProps>(
    "mirror-draw",
    p,
    store,
  );

  let x: number | null = 0;
  let y: number | null = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.background(0);
  };

  p.draw = () => {
    const angleOffset = p.TWO_PI / vars.divisions;
    const realDivisions = vars.mirror
      ? vars.divisions % 2 === 0
        ? vars.divisions
        : vars.divisions + 1
      : vars.divisions;
    p.strokeWeight(vars.strokeWeight);
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseIsPressed) {
      const newX = p.mouseX - p.width / 2;
      const newY = p.mouseY - p.height / 2;

      if (!x && !y) {
        x = newX;
        y = newY;
      }

      p.rotate(-angleOffset);
      for (
        let i = 0;
        i < (vars.mirror ? realDivisions * 2 : realDivisions);
        i++
      ) {
        p.push();
        p.rotate(i * angleOffset);
        if (i % 2 === 0 && vars.mirror) p.scale(1, -1);

        if (vars.colored) {
          const hue =
            (p.map(i, 0, realDivisions, 0, 360) +
              p.frameCount * vars.colorSpeed) %
            360;
          p.stroke(hue, 100, 50, vars.opacity);
        } else {
          p.stroke(255, vars.opacity);
        }

        if (x && y) {
          p.line(x, y, newX, newY);
        }
        p.pop();
      }
      x = newX;
      y = newY;
    } else if (x && y) {
      x = null;
      y = null;
    }
  };

  p.remove = () => {
    unsubscribe();
    p5Remove();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.doubleClicked = () => {
    p.background(0);
  };
};
