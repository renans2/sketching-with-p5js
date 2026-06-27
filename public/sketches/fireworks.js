const N_SPARKS = 30;
const SPARK_DIAMETER = 5;
const fireworks = [];
const MIN_TTL = 1000;
const MAX_TTL = 4000;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  colorMode(HSL);
  noStroke();
}

function draw() {
  background(0, 0, 0, 0.1);
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const firework = fireworks[i];
    firework.updateAndDisplay();
    
    if(firework.isOver())
      fireworks.splice(i, 1);
  }
}

class Firework {
  constructor(x, y) {
    this.timeToLive = random(MIN_TTL, MAX_TTL);
    this.timer = 0;
    this.sparks = [];
    this.nSparks = random(70, 150);
    
    const hue = random(360);
    
    for (let i = 0; i < this.nSparks; i++) {
      const sparkVector = p5.Vector.random2D();
      sparkVector.mult(random(2, 2.3))
      this.sparks.push(new Spark(x, y, sparkVector, hue));
    }
  }
  
  updateAndDisplay() {
    const alpha = map(this.timer, 0, this.timeToLive, 1, 0);
    
    for (let i = 0; i < this.nSparks; i++) {
      const spark = this.sparks[i];
      spark.updateAndDisplay(alpha);
    }
    
    this.timer += deltaTime;
  }
  
  isOver() {
    return this.timer > this.timeToLive;
  }
}

class Spark {
  constructor(x, y, vector, hue) {
    this.hue = hue;
    this.x = x;
    this.y = y;
    this.vector = vector;
  }
  
  updateAndDisplay(alpha) {
    this.vector.add(0, 0.02);
    this.x += this.vector.x;
    this.y += this.vector.y;
    
    fill((this.hue + frameCount * 2)%360, 100, 50, alpha)
    circle(this.x, this.y, SPARK_DIAMETER);
    fill(this.hue, 100, 100, alpha)
    circle(this.x, this.y, SPARK_DIAMETER/2);
  }
}

function mouseClicked() {
  fireworks.push(new Firework(mouseX, mouseY));
}
