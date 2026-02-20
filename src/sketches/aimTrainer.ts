import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  let diameter = 40;
  let progressBarHeight = 20;
  let x: number, y: number;
  let score = 0;
  let timer = 0;
  let over = false;
  let timeLimit = 10;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.textAlign(p.CENTER);
    p.noStroke();
    setNewLocation();
  };

  p.draw = () => {
    p.background(0);

    if (!over) {
      printProgressBar();
      drawCircle();
      timer += p.deltaTime;
      if (timer > timeLimit * 1000) {
        over = true;
        x = -100;
        y = -100;
      }
    } else {
      printScore();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  function drawCircle() {
    let colorVar = p.map(timer, 0, timeLimit * 1000, 0, 360);
    p.fill(colorVar, 100, 50, 1);
    p.circle(x, y, diameter);
  }

  p.mouseClicked = () => {
    if (mouseOverCircle()) {
      setNewLocation();
      score++;
    }
  };

  p.keyPressed = () => {
    if (p.keyCode === 82) reset();
  };

  function setNewLocation() {
    x = p.random(diameter / 2, p.width - diameter / 2);
    y = p.random(progressBarHeight + diameter / 2, p.height - diameter / 2);
  }

  function printProgressBar() {
    let length = p.map(timer, 0, timeLimit * 1000, 0, p.width);
    p.rect(0, 0, length, progressBarHeight);
  }

  function printScore() {
    p.fill(0, 0, 100, 1);
    p.textSize(100);
    p.text("score: " + score, p.width / 2, p.height / 2);
    p.textSize(50);
    p.text('press "R" to play again', p.width / 2, p.height / 2 + 100);
  }

  function reset() {
    setNewLocation();
    over = false;
    timer = 0;
    score = 0;
  }

  function mouseOverCircle() {
    return (
      p.mouseX > x - diameter / 2 &&
      p.mouseX < x + diameter / 2 &&
      p.mouseY > y - diameter / 2 &&
      p.mouseY < y + diameter / 2
    );
  }
};
