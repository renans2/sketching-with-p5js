let amount = 9;
let diameterMultiplier = 50;
let angleIncrementer = 1;
let diameter = 0;
let offset;
let colorVar = 0;

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
  strokeWeight(0);
  colorMode(HSL);
  background(0, 0, 0, 1);
  offset = width / amount;
}

function draw() {
  background(0, 0, 0, 1);
  angleIncrementer = (angleIncrementer + 5) % 360;
  frequency = map (mouseX, 0, width, 0, 2000);
  drawCircles(frequency);
}

function drawCircles(frequency){
  for(let i = 0; i < amount; i++){
    for(let j = 0; j < amount; j++){
      angle = map(j, 0, amount, 0, frequency);
      diameter = (sin(angle + angleIncrementer) + 1) * diameterMultiplier;
      colorVar = map(sin(angle + angleIncrementer) + 1, 0, 1, 200, 250)
      fill(colorVar, 100, 50, 1);
      circle(j * offset + offset/2, i * offset + offset/2, diameter);
    }
  }
}
