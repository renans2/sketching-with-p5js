// import { getCanvasSize } from "../utils/canvas-parent";
// import type p5 from "p5";

// export const sketch = (p: p5) => {
//   let webcam;
//   let saved = [];
//   let ii = 0;
//   let timer = 0;
//   const wait = 650;
//   let ready = false;
//   let speed = 4;
//   let aspectRatio;

//   p.setup = () => {
//     webcam = createCapture("video", { flipped: true });
//     const canvasSize = getCanvasSize();
//     p.createCanvas(canvasSize, canvasSize);
//     webcam.hide();
//     p.pixelDensity(1);
//     p.stroke(255, 0, 0);
//     p.strokeWeight(5);
//   };

//   p.draw = () => {
//     if (!ready) {
//       timer += p.deltaTime;
//       if (timer > wait) ready = true;
//     } else {
//       p.background(0);
//       p.frameRate(30);
//       aspectRatio = webcam.width / webcam.height;
//       image(
//         webcam,
//         (p.width - p.height * aspectRatio) / 2,
//         0,
//         p.height * aspectRatio,
//         p.height,
//       );

//       p.loadPixels();
//       for (let i = 0; i < speed; i++) {
//         for (let j = 0; j < p.width; j++) {
//           const x = (ii * p.width + j) * 4;
//           saved.push(pixels[x]);
//           saved.push(pixels[x + 1]);
//           saved.push(pixels[x + 2]);
//           saved.push(pixels[x + 3]);
//         }
//         ii++;
//       }

//       let index = 0;
//       for (let i = 0; i < ii; i++) {
//         for (let j = 0; j < p.width; j++) {
//           const x = (i * p.width + j) * 4;
//           p.pixels[x] = saved[index];
//           index++;
//           p.pixels[x + 1] = saved[index];
//           index++;
//           p.pixels[x + 2] = saved[index];
//           index++;
//           p.pixels[x + 3] = saved[index];
//           index++;
//         }
//       }
//       p.updatePixels();

//       p.line(0, ii, p.width, ii);
//     }
//   };

//   p.windowResized = () => {
//     const newCanvasSize = getCanvasSize();
//     p.resizeCanvas(newCanvasSize, newCanvasSize);
//   };

//   function keyPressed() {
//     if (key === "r") {
//       ii = 0;
//       saved = [];
//     }
//   }
// };
