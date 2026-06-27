const branches = [];

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  background(220);
  branches.push(new Branch(createVector(0, 0), createVector(0, 7), 10));
}

function draw() {
  translate(width/2, height);
  scale(1, -1);
  
  for (let i = branches.length - 1; i >= 0; i--) {
    const branch = branches[i];
    branch.update();
  }
}

class Branch {
  constructor(position, direction, thickness) {
    this.position = position;
    this.direction = direction;
    this.thickness = thickness;
  }
  
  update() {
    const newPosition = this.position.copy(); 
    newPosition.add(this.direction);
    strokeWeight(this.thickness);
    line(this.position.x, this.position.y, newPosition.x, newPosition.y);
    this.position = newPosition.copy();
    this.direction.rotate(random(-0.2, 0.2));
    this.direction.setMag(this.direction.mag() * 0.98);
    this.thickness *= 0.97;
    
    if (Math.random() < 0.3 && branches.length < 100) 
      branches.push(new Branch(this.position.copy(), this.direction.copy(), this.thickness));
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}