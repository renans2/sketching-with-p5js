import type p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const DIMENSION = 100;
  let matrix: boolean[][] = [];
  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.fill(255, 227, 133);

    for (let r = 0; r < DIMENSION; r++) {
      matrix[r] = [];
      for (let c = 0; c < DIMENSION; c++) {
        matrix[r][c] = false;
      }
    }
    offset = p.width / DIMENSION;
  };

  p.draw = () => {
    p.background(110, 170, 230);
    // frameRate(30);

    drawMatrix();

    if (p.mouseIsPressed) {
      const r = p.floor(p.mouseY / offset);
      const c = p.floor(p.mouseX / offset);

      if (r - 1 >= 0) matrix[r - 1][c] = true;
      if (r + 1 < DIMENSION) matrix[r + 1][c] = true;
      if (c - 1 >= 0) matrix[r][c - 1] = true;
      if (c + 1 < DIMENSION) matrix[r][c + 1] = true;
      if (c - 2 >= 0) matrix[r][c - 2] = true;
      if (c + 2 < DIMENSION) matrix[r][c + 2] = true;
    }

    // init new matrix
    let newMatrix: boolean[][] = [];
    for (let r = 0; r < DIMENSION; r++) {
      newMatrix[r] = [];

      for (let c = 0; c < DIMENSION; c++) {
        newMatrix[r][c] = false;
      }
    }

    for (let r = DIMENSION - 1; r >= 0; r--) {
      for (let c = 0; c < DIMENSION; c++) {
        const hasSandGrain = matrix[r][c];

        if (hasSandGrain) {
          if (r + 1 < DIMENSION) {
            if (!newMatrix[r + 1][c]) {
              newMatrix[r + 1][c] = true;
            } else if (c + 1 < DIMENSION || c - 1 >= 0) {
              if (c + 1 < DIMENSION && c - 1 >= 0) {
                const side = p.random(10) < 5 ? -1 : 1;
                if (!newMatrix[r + 1][c + side]) {
                  newMatrix[r + 1][c + side] = true;
                } else if (!newMatrix[r + 1][c + side * -1]) {
                  newMatrix[r + 1][c + side * -1] = true;
                } else {
                  newMatrix[r][c] = true;
                }
              } else if (c + 1 < DIMENSION && !newMatrix[r + 1][c + 1]) {
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

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawMatrix() {
    for (let r = 0; r < DIMENSION; r++)
      for (let c = 0; c < DIMENSION; c++)
        if (matrix[r][c]) p.rect(c * offset, r * offset, offset, offset);
  }
};
