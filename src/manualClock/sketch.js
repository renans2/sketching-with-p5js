let seconds = 0, angleSec  = 0;
let minutes = 0, angleMin  = 0;
let hours   = 0, angleHour = 0;

let outCircDiameter = 700;
let hourIconDiameter = 25;
let smallIconsDiameter = 8;
let iconDistance = outCircDiameter / 2 - hourIconDiameter;
let offsetBigIcons = 360 / 12;
let offsetSmallIcons = 360 / 60;
let secPointerMult  = outCircDiameter / 2.5;
let minPointerMult  = outCircDiameter / 3;
let hourPointerMult = outCircDiameter / 5;

function setup() {
  createCanvas(700, 700);
  colorMode(HSL);
  background(0, 0, 0, 1);
  angleMode(DEGREES);
  fill(255);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  frameRate(1);
  drawHoursIcons();
  drawHoursSmallIcons();
  increment();
  setAngles();
  drawPointers();
  drawMiddleScrew();
}

function increment(){
  seconds = (seconds + 1) % 60;
  hours = (hours + 1) % 43200;

  if(seconds == 0){
    minutes = (minutes + 1) % 60;
  }
}

function setAngles(){
  angleSec  = map(seconds, 0, 60, 0, 360) - 90;
  angleMin  = map(minutes, 0, 60, 0, 360) - 90;
  angleHour = map(hours, 0, 43200, 0, 360) - 90;
}

function drawHoursIcons(){
  strokeWeight();
  for (let i = 0; i < 12; i++) {
    stroke(255);
    circle(cos(i * offsetBigIcons) * iconDistance, 
           sin(i * offsetBigIcons) * iconDistance, hourIconDiameter);
  }
}

function drawHoursSmallIcons(){
  strokeWeight();
  for (let i = 0; i < 60; i++) {
    stroke(255);
    circle(cos(i * offsetSmallIcons) * iconDistance, 
           sin(i * offsetSmallIcons) * iconDistance, smallIconsDiameter);
  }
}

function drawPointers(){
  strokeWeight(20);

  stroke(0, 100, 50, 1);
  line(0, 0, cos(angleSec) * secPointerMult, 
             sin(angleSec) * secPointerMult);

  stroke(120, 100, 50, 1);
  line(0, 0, cos(angleMin) * minPointerMult, 
             sin(angleMin) * minPointerMult);             

  stroke(240, 100, 50, 1);
  line(0, 0, cos(angleHour) * hourPointerMult, 
             sin(angleHour) * hourPointerMult);             
}

function drawMiddleScrew(){
  strokeWeight();
  fill(255);
  circle(0, 0, 10);
}
