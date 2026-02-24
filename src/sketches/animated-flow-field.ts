import type { AnimatedFlowFieldProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type { default as P5 } from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";
declare const p5: typeof import("p5");

export const sketch = (p: P5, store: ZustandStore<AnimatedFlowFieldProps>) => {
  const vars = getInitialVars("animated-flow-field") as AnimatedFlowFieldProps;
  const unsubscribe = subscribeToStore(vars, store);
  // let particlesPerFrame = 5;
  // let noiseMultiplier = 0.005;
  // let noiseSpeed = 0.00005;
  // let particleSpeed = 1;
  // let strokeWidth = 1;
  // let strokeOpacity = 0.1;

  const particles: P5.Vector[] = [];

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.strokeWeight(vars.strokeWidth);
  };

  p.draw = () => {
    spawnParticles(vars.particlesPerFrame);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      const x = particle.x;
      const y = particle.y;
      const n = p.noise(
        particle.x * vars.noiseMultiplier,
        particle.y * vars.noiseMultiplier,
        p.frameCount * vars.noiseSpeed,
      );

      p.stroke(p.map(x, 0, p.width, 0, 360), 100, 50, vars.strokeOpacity);
      p.point(x, y);

      const angle = p.map(n, 0, 1, 0, 2 * p.TWO_PI);

      if (!isInsideCanvas(x, y)) particles.splice(i, 1);
      else
        particles[i] = particle.add(
          p5.Vector.fromAngle(angle, vars.particleSpeed),
        );
    }

    if (p.frameCount % 100 === 0)
      console.log(particles.length + " " + p.frameRate());
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.remove = () => {
    unsubscribe();
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
