import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const particles = [];
  let m1 = 0.005;
  let m2 = 0.0025;
  let speed = 2;
  const particlesPerFrame = 5;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.stroke(255);
    p.strokeWeight(1);
  };

  p.draw = () => {
    spawnParticles(particlesPerFrame);

    p.background(0, 0, 0, 0);
    m1 = p.map(p.mouseX, 0, p.width, 0, 0.01);
    speed = p.map(p.mouseY, 0, p.height, 1, 5);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      const x = particle.x;
      const y = particle.y;
      const n = p.noise(particle.x * m1, particle.y * m1, p.frameCount * m2);

      p.stroke(p.map(x, 0, p.width, 0, 360), 100, 50, 0.3);
      p.point(x, y);

      const angle = p.map(n, 0, 1, 0, 2 * p.TWO_PI);

      if (!isInsideCanvas(x, y)) particles.splice(i, 1);
      else particles[i] = particle.add(p5.Vector.fromAngle(angle, speed));
    }

    if (p.frameCount % 100 === 0)
      console.log(particles.length + " " + p.frameRate());
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function spawnParticles(n) {
    for (let i = 0; i < n; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  }

  function isInsideCanvas(x, y) {
    return x >= 0 && x <= p.width && y >= 0 && y <= p.height;
  }
};
