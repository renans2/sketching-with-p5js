import { getCanvasSize } from "../utils/canvas-parent";
import type { default as P5 } from "p5";
declare const p5: typeof import("p5");

export const sketch = (p: P5) => {
  // interactive
  let particlesPerFrame = 5;
  const particles: P5.Vector[] = [];
  let noiseMultiplier = 0.005;
  let noiseSpeed = 0.00005;
  let particleSpeed = 1;
  let strokeWidth = 1;
  let strokeOpacity = 0.1;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.strokeWeight(strokeWidth);
  };

  p.draw = () => {
    spawnParticles(particlesPerFrame);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      const x = particle.x;
      const y = particle.y;
      const n = p.noise(
        particle.x * noiseMultiplier,
        particle.y * noiseMultiplier,
        p.frameCount * noiseSpeed,
      );

      p.stroke(p.map(x, 0, p.width, 0, 360), 100, 50, strokeOpacity);
      p.point(x, y);

      const angle = p.map(n, 0, 1, 0, 2 * p.TWO_PI);

      if (!isInsideCanvas(x, y)) particles.splice(i, 1);
      else
        particles[i] = particle.add(p5.Vector.fromAngle(angle, particleSpeed));
    }

    if (p.frameCount % 100 === 0)
      console.log(particles.length + " " + p.frameRate());
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  function spawnParticles(n: number) {
    for (let i = 0; i < n; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  }

  function isInsideCanvas(x: number, y: number) {
    return x >= 0 && x <= p.width && y >= 0 && y <= p.height;
  }
};
