import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { SandEffectProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<SandEffectProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<SandEffectProps>(
    "sand-effect",
    p,
    store,
  );

  // sand-effect
  // let n = 100;

  let matrix: boolean[][] = [];
  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.fill(255, 227, 133);

    for (let r = 0; r < vars.n; r++) {
      matrix[r] = [];
      for (let c = 0; c < vars.n; c++) {
        matrix[r][c] = false;
      }
    }
    offset = p.width / vars.n;
  };

  p.draw = () => {
    p.background(110, 170, 230);
    // frameRate(30);

    drawMatrix();

    if (p.mouseIsPressed) {
      const r = p.floor(p.mouseY / offset);
      const c = p.floor(p.mouseX / offset);

      if (r - 1 >= 0) matrix[r - 1][c] = true;
      if (r + 1 < vars.n) matrix[r + 1][c] = true;
      if (c - 1 >= 0) matrix[r][c - 1] = true;
      if (c + 1 < vars.n) matrix[r][c + 1] = true;
      if (c - 2 >= 0) matrix[r][c - 2] = true;
      if (c + 2 < vars.n) matrix[r][c + 2] = true;
    }

    // init new matrix
    let newMatrix: boolean[][] = [];
    for (let r = 0; r < vars.n; r++) {
      newMatrix[r] = [];

      for (let c = 0; c < vars.n; c++) {
        newMatrix[r][c] = false;
      }
    }

    for (let r = vars.n - 1; r >= 0; r--) {
      for (let c = 0; c < vars.n; c++) {
        const hasSandGrain = matrix[r][c];

        if (hasSandGrain) {
          if (r + 1 < vars.n) {
            if (!newMatrix[r + 1][c]) {
              newMatrix[r + 1][c] = true;
            } else if (c + 1 < vars.n || c - 1 >= 0) {
              if (c + 1 < vars.n && c - 1 >= 0) {
                const side = p.random(10) < 5 ? -1 : 1;
                if (!newMatrix[r + 1][c + side]) {
                  newMatrix[r + 1][c + side] = true;
                } else if (!newMatrix[r + 1][c + side * -1]) {
                  newMatrix[r + 1][c + side * -1] = true;
                } else {
                  newMatrix[r][c] = true;
                }
              } else if (c + 1 < vars.n && !newMatrix[r + 1][c + 1]) {
                newMatrix[r + 1][c + 1] = true;
              } else if (c - 1 >= 0 && !newMatrix[r + 1][c - 1]) {
                newMatrix[r + 1][c - 1] = true;
              } else {
                newMatrix[r][c] = true;
              }
            } else {
              newMatrix[r][c] = true;
            }
          } else {
            newMatrix[r][c] = true;
          }
        }
      }
    }

    matrix = newMatrix;
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

  function drawMatrix() {
    for (let r = 0; r < vars.n; r++)
      for (let c = 0; c < vars.n; c++)
        if (matrix[r][c]) p.rect(c * offset, r * offset, offset, offset);
  }
};
