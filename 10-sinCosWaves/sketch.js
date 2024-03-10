let amount = 100;
let offset = 0;
let startingY = 0;
let diameter = 20;
let angle = 0;
let index = 0;
let color = 0;
let colorVar = 0;
let amplitude = 0;
let frequency = 0;

function setup(){
    createCanvas(windowWidth-10, windowHeight-10);
    colorMode(HSL);
    noStroke();

    angleMode(DEGREES);
    startingY = height / 2;
}

function draw(){
    background(0);
    calculateOffset();
    amplitude = map(mouseY, height, 0, 0, 500);
    frequency = map(mouseX, 0, width, 100, 5000);
    generateCircles(amplitude, frequency);
}

function mouseReleased(){
    amount++;
}

function generateCircles(amplitude, frequency){
    index = (index + 3) % 360;
    colorVar = (colorVar + 3) % 360; 
    for (let i = 0; i < amount; i++) {
        color = ((offset * i) + colorVar) % 360;
        angle = map(i, 0 , amount, 0, frequency);
        fill(color, 100, 50, 1);
        circle(offset * i + offset / 2, startingY + (sin(angle + index) * amplitude), diameter);
    }
}

function calculateOffset(){
    offset = width / amount;
}
