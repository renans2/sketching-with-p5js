// import type p5 from "p5";
// import { getCanvasSize } from "../utils/get-canvas-size";

// export const sketch = (p: p5) => {
//   const lines = 20;
//   let lineOffset;
//   const diameterPct = 0.000015;
//   const baseWidthPct = 0.6;
//   let baseWidth, diameter;
//   let timer = 0;
//   const wait = 100;
//   let line = 0;

//   p.setup = () => {
//     const canvasSize = getCanvasSize();
//     p.createCanvas(canvasSize, canvasSize);
//     p.noStroke();

//     baseWidth = baseWidthPct * p.width;
//     lineOffset = p.height / lines;
//     diameter = diameterPct * (p.width * p.height);
//   };

//   p.draw = () => {
//     if (timer >= wait) {
//       line = (line + 1) % lines;
//       timer = 0;
//     } else {
//       timer += p.deltaTime;
//     }

//     p.background(0);
//     p.translate(p.width / 2, 0);

//     p.fill(0, 150, 0);
//     p.triangle(0, 0, baseWidth / 2, p.height, -baseWidth / 2, p.height);

//     for (let i = 1; i < p.lines; i++) {
//       const nBalls = i + 1;
//       const lineHeight = i * p.lineOffset + diameter / 2;
//       const lineWidth = p.map(i, 0, lines, diameter, baseWidth);
//       const currCol = Math.floor(p.map(line, 0, 20, 0, nBalls));

//       for (let j = 0; j < nBalls; j++) {
//         if (
//           i === line ||
//           i === lines - line ||
//           j === currCol ||
//           j === nBalls - currCol - 1
//         )
//           p.fill(
//             p.map(p.cos(p.frameCount * 0.05), -1, 1, 200, 255),
//             p.map(p.cos(p.frameCount * 0.05), -1, 1, 200, 255),
//             0,
//           );
//         else p.fill(p.map(p.sin(p.frameCount * 0.05), -1, 1, 100, 255), 0, 0);

//         p.circle(
//           p.lerp(-lineWidth / 2, p.lineWidth / 2, j / (nBalls - 1)),
//           p.lineHeight,
//           diameter,
//         );
//       }
//     }
//   };

//   p.windowResized = () => {
//     const newCanvasSize = getCanvasSize();
//     p.resizeCanvas(newCanvasSize, newCanvasSize);
//   };
// };
