import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const insertionSort = (p: p5) => {
  let amount = 50;
let hs: number[] = [];

let doSort = true;
let isShuffled = false;
let barrier = 1;
let index = barrier;

let offset;

p.setup = () => {
  const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
  p.rectMode(p.CENTER);
  p.strokeWeight(2);
  p.background(0);
  p.fillArray();
  offset = p.width / amount;
};

p.draw = () => {
  // p.frameRate(p.map(p.mouseX, 0, p.width, 1, 60));
  p.translate(0, p.height);
  p.background(0);

  if (doSort) {
    if (!isShuffled) {
      shuffle(hs, true);
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

function doCicle() {
  drawRectangles();

  if (index > 0 && hs[index - 1] > hs[index]) {
    let temp = hs[index - 1];
    hs[index - 1] = hs[index];
    hs[index] = temp;
    index--;
  } else {
    if (barrier + 1 < amount) {
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

function mousePressed() {
  doSort = true;
}

function fillArray() {
  hs = [];
  for (let i = 0; i < amount; i++) {
    let p.rectHeight = (i + 1) * (p.height / amount);
    hs.push(rectHeight);
  }
}

function drawRectangles() {
  for (let i = 0; i < amount; i++) {
    if (i == index && doSort) p.fill(0, 255, 0);
    else if (i == barrier && doSort) p.fill(255, 0, 0);
    else p.fill(255, 255, 255);

    let x = i * offset + offset / 2;
    let rectHeight = hs[i];
    let y = -rectHeight / 2;

    p.rect(x, y, p.width / amount, p.rectHeight);
  }
}

}
