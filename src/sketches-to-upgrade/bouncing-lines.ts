// import type { BoundingLinesProps } from "../types/sketches-props";
// import type { ZustandStore } from "../types/ZustandStore";
// import { getCanvasSize } from "../utils/canvas-parent";
// import type p5 from "p5";
// import { initMethods } from "../utils/define-store-methods";

// export const sketch = (p: p5, store: ZustandStore<BoundingLinesProps>) => {
//   const { p5Remove, vars, unsubscribe } = initMethods<BoundingLinesProps>(
//     "bounding-lines",
//     p,
//     store,
//   );

//   const MIN_SPEED = 4;
//   const MAX_SPEED = 6;
//   const bouncingLines: BouncingLine[] = [];

//   p.setup = () => {
//     const canvasSize = getCanvasSize();
//     p.createCanvas(canvasSize, canvasSize);
//     p.background(0);
//     p.colorMode(p.HSL);
//     p.strokeWeight(vars.strokeWeight);
//     p.noFill();

//     for (let i = 0; i < vars.n; i++) {
//       bouncingLines.push(new BouncingLine());
//     }
//   };

//   p.draw = () => {
//     p.background(0, 0, 0, vars.backgroundOpacity);

//     if (vars.n < bouncingLines.length)
//       bouncingLines.splice(0, bouncingLines.length - vars.n);
//     else if (vars.n > bouncingLines.length) {
//       for (let i = 0; i < vars.n - bouncingLines.length; i++) {
//         bouncingLines.push(new BouncingLine());
//       }
//     }

//     const hue = p.frameCount * vars.colorSpeed;
//     p.stroke(hue, 100, 50, 0.5);

//     p.beginShape();
//     for (const line of bouncingLines) {
//       line.move();
//       p.vertex(line.x, line.y);
//     }
//     p.endShape(p.CLOSE);
//   };

//   p.remove = () => {
//     unsubscribe();
//     p5Remove();
//   };

//   p.windowResized = () => {
//     const newCanvasSize = getCanvasSize();
//     p.resizeCanvas(newCanvasSize, newCanvasSize);
//     p.background(0);
//   };

//   class BouncingLine {
//     x;
//     y;
//     xSpeed;
//     ySpeed;

//     constructor() {
//       this.x = p.random(p.width);
//       this.y = p.random(p.height);
//       this.xSpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
//       this.ySpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
//     }

//     move() {
//       this.x += this.xSpeed;
//       this.y += this.ySpeed;

//       if (this.hitBorderX()) this.reverseXSpeed();
//       if (this.hitBorderY()) this.reverseYSpeed();
//     }

//     hitBorderX() {
//       if (p.width < this.x || this.x < 0) {
//         this.x = this.x < p.width / 2 ? 0 : p.width;
//         return true;
//       }

//       return false;
//     }

//     hitBorderY() {
//       if (p.height < this.y || this.y < 0) {
//         this.y = this.y < p.height / 2 ? 0 : p.height;
//         return true;
//       }

//       return false;
//     }

//     reverseXSpeed() {
//       this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
//     }

//     reverseYSpeed() {
//       this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
//     }
//   }
// };
