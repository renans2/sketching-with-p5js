import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  const N = 40;
  let array: number[] = [];
  let doSort = true;
  let isShuffled = false;
  let barrier = 1;
  let index = barrier;

  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.rectMode(p.CENTER);
    p.strokeWeight(2);
    p.background(0);
    fillArray();
    offset = p.width / N;
  };

  p.draw = () => {
    // p.frameRate(p.map(p.mouseX, 0, p.width, 1, 60));
    p.translate(0, p.height);
    p.background(0);

    if (doSort) {
      if (!isShuffled) {
        p.shuffle(array, true);
        isShuffled = true;
      } else {
        doCicle();
      }
    } else {
      drawRectangles();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.mousePressed = () => {
    doSort = true;
  };

  function doCicle() {
    drawRectangles();

    if (index > 0 && array[index - 1] > array[index]) {
      let temp = array[index - 1];
      array[index - 1] = array[index];
      array[index] = temp;
      index--;
    } else {
      if (barrier + 1 < N) {
        barrier++;
        index = barrier;
      } else {
        doSort = false;
        resetVariables();
        console.log("done");
      }
    }
  }

  function resetVariables() {
    barrier = 1;
    index = barrier;
    isShuffled = false;
  }

  function fillArray() {
    array = [];
    for (let i = 0; i < N; i++) {
      let rectHeight = (i + 1) * (p.height / N);
      array.push(rectHeight);
    }
  }

  function drawRectangles() {
    for (let i = 0; i < N; i++) {
      if (i == index && doSort) p.fill(0, 255, 0);
      else if (i == barrier && doSort) p.fill(255, 0, 0);
      else p.fill(255, 255, 255);

      let x = i * offset + offset / 2;
      let rectHeight = array[i];
      let y = -rectHeight / 2;

      p.rect(x, y, p.width / N, rectHeight);
    }
  }
};
