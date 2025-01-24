const depth = 10;
const lengthDecay = 0.9;
const startingLength = 100;

const maxStrokeWeight = 15;
const minStrokeWeight = 1;

const minAngle = 0.2;
const maxAngle = 0.5;

let leafHue;
let leafSat;
const leafLight = 85;
const leafAlpha = 0.075;
const maxBranches = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(width/2, height);
  scale(1,-1);
  colorMode(HSL);
  cursor(HAND);
  
  stroke(0,0,0,0.1);
  fill(15,40,50,0.5);
  
  setColors();
  
  push();
  drawTree(depth, startingLength, lengthDecay);
  pop();
}

function drawTree(d, l, lenDecay){
  if(d > 0){
    const w = map(d, depth, 0, maxStrokeWeight, minStrokeWeight);
    const nextW = map(d-1, depth, 0, maxStrokeWeight, minStrokeWeight);
    
    quad(-w/2, 0, -nextW/2, l, nextW/2, l, w/2, 0);
    
    const newLength = l * lenDecay;
    translate(0, l);
    
    const nBranches = ceil(random(maxBranches));
    
    for(let i = 0; i < nBranches; i++){
      push();
      const angle = random(minAngle, maxAngle) * (ceil(random(2)) % 2 == 0 ? -1 : 1);
      rotate(angle);
      drawTree(d - 1, newLength, random(lenDecay - 0.05, lenDecay + 0.02));
      pop(); 
    } 
    
  } else {
    drawLeaf();
  }
}

function drawLeaf(){
  push();
  fill(leafHue, leafSat, leafLight, leafAlpha);
  circle(0, 0, random(25, 125));
  pop();
}

function setColors(){
  leafHue = random(360);
  leafSat = random(50, 100);
}

function drawNewTree(){
  setColors();
  drawTree(depth, startingLength, lengthDecay);
}

function mousePressed(){
  background(255);
  push();
  drawNewTree();
  pop();
}
