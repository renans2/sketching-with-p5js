// import p5 from "p5";
// import { getCanvasSize } from "../utils/get-canvas-size";

// export const cameraEffects2 = (p: p5) => {
//   let webcam;
// const offset = 10;
// const p.pixelsPerBlock = offset * offset;
// let nHor, nVer;
// const greyLevels = 5;

// let constraints = {
//   video: {
//     mandatory: {
//       minWidth: 1920,
//       minHeight: 1080,
//     },
//   },
//   audio: false,
// };

// p.setup = () => {
//   webcam = createCapture(constraints, { flipped: true });
//   const canvasSize = getCanvasSize();
//     p.createCanvas(canvasSize, canvasSize);
//   webcam.hide();
//   p.pixelDensity(1);
//   p.noStroke();

//   nHor = p.width / offset;
//   nVer = p.height / offset;
// };

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// p.draw = () => {
//   p.frameRate(30);
//   image(webcam, 0, 0, p.width, p.height);
//   p.loadPixels();

//   for (let i = 0; i < nVer; i++)
//     for (let j = 0; j < nHor; j++) processBlock(j, i);
// };

//   p.windowResized = () => {
//     const newCanvasSize = getCanvasSize();
//     p.resizeCanvas(newCanvasSize, newCanvasSize);
//   };

// function processBlock(x, y) {
//   let totalRed = 0;
//   let totalGreen = 0;
//   let totalBlue = 0;
//   const xFixed = x * offset;
//   const yFixed = y * offset;

//   for (let i = yFixed; i < yFixed + offset; i++) {
//     for (let j = xFixed; j < xFixed + offset; j++) {
//       const index = (p.width * i + j) * 4;
//       totalRed += p.pixels[index];
//       totalGreen += p.pixels[index + 1];
//       totalBlue += p.pixels[index + 2];
//     }
//   }

//   const brightness = (totalRed + totalGreen + totalBlue) / 3 / p.pixelsPerBlock;
//   const greyIndex = Math.floor(p.map(brightness, 0, 255, 0, greyLevels));

//   p.fill(lerp(0, 255, greyIndex / (greyLevels - 1)));
//   p.rect(x * offset, y * offset, offset, offset);
// }

// }
