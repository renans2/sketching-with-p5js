let seconds = 0, angleSec  = 0;
let minutes = 0, angleMin  = 0;
let hours   = 0, angleHour = 0;
let colorVar = 0;

let outCircDiameter = 600;
let secPointerMult  = outCircDiameter / 2;
let minPointerMult  = outCircDiameter / 3;
let hourPointerMult = outCircDiameter / 5;

function setup() {
  createCanvas(700, 700);
  colorMode(HSL);
  background(0, 0, 0, 1);
  angleMode(DEGREES);
  fill(0);
  strokeWeight(10);
}

function draw() {
  background(0, 0, 0, 0.3);
  translate(width/2, height/2);
  frameRate(1);
  drawOutCircle();
  increment();
  setAngles();
  drawPointers();
}

function drawOutCircle(){
  stroke(255)
  fill(0, 0, 0 , 0);
  circle(0, 0, outCircDiameter);
}

function increment(){
  seconds = (seconds + 1) % 60;

  if(seconds == 0){
    minutes = (minutes + 1) % 60;
    if(minutes == 0){
      hours++;
    }
  }
  console.log(seconds);
}

function setAngles(){
  angleSec  = map(seconds, 0, 60, 0, 360) - 90;
  angleMin  = map(minutes, 0, 60, 0, 360) - 90;
  angleHour = map(hours, 0, 12, 0, 360) - 90;
}

function drawPointers(){
  colorVar = angleSec + 90;
  stroke(colorVar, 100, 50, 1);
  line(0, 0, cos(angleSec) * secPointerMult, 
             sin(angleSec) * secPointerMult);

  stroke(120, 100, 50, 1);
  line(0, 0, cos(angleMin) * minPointerMult, 
             sin(angleMin) * minPointerMult);             

  stroke(240, 100, 50, 1);
  line(0, 0, cos(angleHour) * hourPointerMult, 
             sin(angleHour) * hourPointerMult);             
}
