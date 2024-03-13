let multiplier;
let diameter = 40;
let amount = 10;
let offset;
let angleIncrementer;
let colorVar = 0;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    fill(0, 100, 50, 1)
    offset = 360 / amount;
    background(0);
    strokeWeight(0);
}

function draw(){
    background(0,0,0,0.05);
    multiplier = map(mouseY, height, 0, 1, 1000)
    angleIncrementer = map(mouseX, 0, width, 0, 360);
    translate(width/2, height/2);
    generateCircles(0);
    colorVar = (colorVar + 1) % 360;
    fill(colorVar,100,50,1);
}

function generateCircles(){
    for (let i = 0; i < amount; i++) {
        let angle = i * offset + angleIncrementer;
        let x = cos(angle) * multiplier;
        let y = sin(angle) * multiplier;
        generateChildCircles(x, y, multiplier/4, diameter/2);
        circle(x, y, diameter);
    }
}

function generateChildCircles(centerX, centerY, multiplier, diameter){
    for (let i = 0; i < amount; i++) {
        let angle = i * offset - angleIncrementer;
        let x = centerX + cos(angle) * multiplier;
        let y = centerY + sin(angle) * multiplier;
        circle(x, y, diameter);
    }
}
