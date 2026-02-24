import { getCanvasSize } from "../utils/canvas-parent";
import type { default as P5 } from "p5";
declare const p5: typeof import("p5");

export const sketch = (p: P5) => {
  const SPARK_DIAMETER = 5;
  const MIN_TTL = 1000;
  const MAX_TTL = 4000;
  const fireworks: Firework[] = [];

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.1);

    for (let i = fireworks.length - 1; i >= 0; i--) {
      const firework = fireworks[i];
      firework.updateAndDisplay();

      if (firework.isOver()) fireworks.splice(i, 1);
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.mouseClicked = () => {
    fireworks.push(new Firework(p.mouseX, p.mouseY));
  };

  class Firework {
    timeToLive;
    timer;
    sparks;
    nSparks;
    constructor(x: number, y: number) {
      this.timeToLive = p.random(MIN_TTL, MAX_TTL);
      this.timer = 0;
      this.sparks = [];
      this.nSparks = p.random(70, 150);

      const hue = p.random(360);

      for (let i = 0; i < this.nSparks; i++) {
        const sparkVector = p5.Vector.random2D();
        sparkVector.mult(p.random(2, 2.3));
        this.sparks.push(new Spark(x, y, sparkVector, hue));
      }
    }

    updateAndDisplay() {
      const alpha = p.map(this.timer, 0, this.timeToLive, 1, 0);

      for (let i = 0; i < this.nSparks; i++) {
        const spark = this.sparks[i];
        spark.updateAndDisplay(alpha);
      }

      this.timer += p.deltaTime;
    }

    isOver() {
      return this.timer > this.timeToLive;
    }
  }

  class Spark {
    hue;
    x;
    y;
    vector;
    constructor(x: number, y: number, vector: any, hue: number) {
      this.hue = hue;
      this.x = x;
      this.y = y;
      this.vector = vector;
    }

    updateAndDisplay(alpha: number) {
      this.vector.add(0, 0.02);
      this.x += this.vector.x;
      this.y += this.vector.y;

      p.fill((this.hue + p.frameCount * 2) % 360, 100, 50, alpha);
      p.circle(this.x, this.y, SPARK_DIAMETER);
      p.fill(this.hue, 100, 100, alpha);
      p.circle(this.x, this.y, SPARK_DIAMETER / 2);
    }
  }
};
