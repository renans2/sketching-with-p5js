const now = new Date();
let hours = now.getHours() % 12;
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(hours);

let angleHours;
let angleMinutes;
let angleSeconds;

let outCircDiameter;
let hourIconDiameter = 25;
let smallIconsDiameter = 8;
let iconDistance;
let offsetBigIcons = 360 / 12;
let offsetSmallIcons = 360 / 60;
let secPointerMult;
let minPointerMult;
let hourPointerMult;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  background(0, 0, 0, 1);
  angleMode(DEGREES);
  fill(255);

  outCircDiameter = height;
  iconDistance = outCircDiameter / 2 - hourIconDiameter;
  secPointerMult  = outCircDiameter / 2.5;
  minPointerMult  = outCircDiameter / 3;
  hourPointerMult = outCircDiameter / 5;

  angleHours   = map(hours,   0, 12, 0, 360);
  angleMinutes = map(minutes, 0, 60, 0, 360);
  angleSeconds = map(seconds, 0, 60, 0, 360);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  frameRate(1);

  drawHoursIcons();
  drawHoursSmallIcons();
  increment();
  drawPointers();
  drawMiddleScrew();
}

function increment(){
  seconds = (seconds + 1) % 60;

  if(seconds === 0){
    minutes = (minutes + 1) % 60;
    if(minutes === 0){
      hours = (hours + 1) % 12;
    }
  }

  angleSeconds = map(seconds, 0, 60, 0, 360) - 90;
  angleMinutes = map(minutes, 0, 60, 0, 360) - 90;
  angleHours   = map(hours, 0, 12, 0, 360) - 90;
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
  line(0, 0, cos(angleSeconds) * secPointerMult,
             sin(angleSeconds) * secPointerMult);

  stroke(120, 100, 50, 1);
  line(0, 0, cos(angleMinutes) * minPointerMult,
             sin(angleMinutes) * minPointerMult);

  stroke(240, 100, 50, 1);
  line(0, 0, cos(angleHours) * hourPointerMult,
             sin(angleHours) * hourPointerMult);
}

function drawMiddleScrew(){
  strokeWeight();
  fill(255);
  circle(0, 0, 10);
}
