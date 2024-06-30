let circleX = 100;
let circleY = 100;
let speedX = 15;
let speedY = 10;
const diameter = 100;
const radius = diameter / 2;
const minSpeed = 7;
const maxSpeed = 15;
let color = 0;
const colorIncrementer = 1;
const alpha = 0.2;

function setup(){
    createCanvas(900, 900);
    noStroke();
    colorMode(HSL);
    background(0);
}

function draw(){
    circleX += speedX;
    circleY += speedY;
    color = (color + colorIncrementer) % 360

    fill(color, 100, 50, alpha)
    circle(circleX, circleY, diameter);

    checkCollision();
}

function checkCollision(){
    if (hitRightBorder())
        speedX = -random(minSpeed, maxSpeed);
    else if(hitLeftBorder())
        speedX = random(minSpeed, maxSpeed);

    if (hitBottomBorder())
        speedY = -random(minSpeed, maxSpeed);
    else if(hitTopBorder())
        speedY = random(minSpeed, maxSpeed);
}

function hitRightBorder(){
    return circleX + radius > width;
}

function hitLeftBorder(){
    return circleX - radius < 0;
}

function hitBottomBorder(){
    return circleY + radius > height;
}

function hitTopBorder(){
    return circleY - radius < 0;
}