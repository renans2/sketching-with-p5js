// import p5 from "p5";
// import { getCanvasSize } from "../utils/get-canvas-size";

// export const microphoneVisualizer = (p: p5) => {
//   const bands = 256;
//   let mic, fft: number, offset: number;
//   let started = false;

//   p.setup = () => {
//     const canvasSize = getCanvasSize();
//     p.createCanvas(canvasSize, canvasSize);
//     p.noStroke();
//     p.colorMode(p.HSL);
//     // p.stroke(255,0,0);
//     fft = new p5.FFT(0.75, bands);
//     offset = p.width / bands;
//   };

//   p.draw = () => {
//     if (started) {
//       p.background(0, 0, 0, 0.5);
//       p.translate(p.width / 2, p.height * 0.66);

//       const spectrum = fft.analyze();

//       const angleOffset = p.PI / bands;
//       // p.rotate(PI/2);
//       for (let i = 0; i < bands; i++) {
//         const val = p.map(spectrum[i], 0, 255, 0, p.height * 0.66);
//         p.fill(p.map(spectrum[i], 0, 255, 90, 450), 100, 50, 1);
//         // p.rect(i * offset, p.height / 2 - val / 2, offset, val);

//         p.push();
//         p.rotate(-angleOffset * i);
//         p.rect(0, -100 - val, offset, val);
//         p.pop();

//         p.push();
//         p.rotate(angleOffset * i);
//         p.rect(0, -100 - val, offset, val);
//         p.pop();
//       }
//     }
//   };

//   p.windowResized = () => {
//     const newCanvasSize = getCanvasSize();
//     p.resizeCanvas(newCanvasSize, newCanvasSize);
//   };

//   function startAudio() {
//     userStartAudio().then(() => {
//       mic = new p5.AudioIn();
//       mic.connect(fft);
//       mic.start();
//       started = true;
//     });
//   }

//   function mousePressed() {
//     if (!started) {
//       document.getElementById("click").remove();
//       startAudio();
//     }
//   }
// };
