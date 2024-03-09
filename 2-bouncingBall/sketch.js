let circleX = 100;
let circleY = 100;
let speedX = 15;
let speedY = 10;
let diameter = 100;
let radius = diameter / 2;
let min = 7;
let max = 15;
let colorVar = 0;

function setup(){
    createCanvas(900, 900);
    noStroke();
    colorMode(HSL);
    background(0);
}

function draw(){
    circleX += speedX;
    circleY += speedY;
    colorVar = (colorVar + 1) % 360
    fill(colorVar, 100, 50, 0.2)
    circle(circleX, circleY, diameter);

    if (circleX + radius > width)
        speedX = -random(min, max);
    else if(circleX - radius < 0)
        speedX = random(min, max);
    
    if (circleY + radius > height)
        speedY = -random(min, max);
    else if(circleY - radius < 0)
        speedY = random(min, max);
}
