const speed = 0.025;
const nLines = 250;
let yOffset;
const nRotations = 10;
let rotationAngle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  noFill();
  colorMode(HSL);
  
  rotationAngle = TWO_PI/nRotations;
  yOffset = height/nLines;
}

function draw() {
  translate(width/2, height/2);
  rotate(-frameCount * 0.01);
  background(0,50);
  
  for(let i = 0; i < nRotations; i++){
    rotate(rotationAngle);
    for(let i = 0; i < nLines; i++){
      const y = i * yOffset;
      const angle = map(i, 0, nLines, 0, TWO_PI);
      const ySup = map(sin(angle - frameCount * speed), -1, 1, 0, height);
      stroke(map(angle, 0, TWO_PI, 0, 360),100,50,0.1);
      bezier(0, y, 0, ySup, width - mouseX*2, ySup, width/2, y);
    }
  }
}
