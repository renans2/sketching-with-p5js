let multiplier;
let diameter = 20;
let amount = 5;
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
    generateCircles(0, 0, multiplier, diameter, angleIncrementer, 3);
    colorVar = (colorVar + 1) % 360;
    fill(colorVar,100,50,1);
}

function generateCircles(centerX, centerY, multiplier, diameter, angleIncrementer, depth){
    if(depth > 0){
        for (let i = 0; i < amount; i++) {
            let angle = i * offset + angleIncrementer;
            let x = centerX + cos(angle) * multiplier;
            let y = centerY + sin(angle) * multiplier;
            circle(x, y, diameter);
            generateCircles(x, y, multiplier/2, diameter/1.2, -angleIncrementer, depth - 1);
        }
    }
}
