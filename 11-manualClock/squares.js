let angle = 0;
let length = 800;
let colorVar = 0;

function setup() {
  createCanvas(800, 800);
  background(255,02,255);
  colorMode(HSL);
  angleMode(DEGREES);
  rectMode(CENTER);
  fill(0,0,255);
  strokeWeight(5);
}

function draw() {
  push();
  translate(width/2, width/2)
  rotate(angle);
  drawSquare();
  angle += 5;
  pop();
  //background(0);
  //drawCircles();
  length -= 10;
  if(length < 0)
    length = 800;
}

function drawSquare(){
  fill(colorVar, 100, 50, 1);
  colorVar = (colorVar + 4) % 360;
  rect(0,0, length, length);
}

function drawCircles(){
  for(let i = 0; i < mouseX; i++) {
    circle(random(width), random(height), 10);
  }
}

function mousePressed(){
  background(255,02,255);
}
