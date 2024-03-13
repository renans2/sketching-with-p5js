let racket1, racket2;
let ball;
let startingX, startingY;
let racketWidth = 30;
let racketHeight = 100;
let racketSpeed = 7;
let ballDiameter = 20;
let ballSpeed = 10;
let centerLineWidth = 5;

function setup(){
    createCanvas(500, 500);
    colorMode(HSL);
    strokeWeight(0);
    rectMode(CENTER);
    racket1 = new Racket(0,     height/2, racketWidth, racketHeight, racketSpeed);
    racket2 = new Racket(width, height/2, racketWidth, racketHeight, racketSpeed);
    ball = new Ball(width/2, height/2, ballDiameter, ballSpeed, racket1, racket2);
}

function draw(){
    background(0);
    drawCenterLine();
    ball.update();
    ball.show();
    updateRacketsPositions();
    racket1.show();
    racket2.show();
}

function updateRacketsPositions(){
    if(keyIsDown(UP_ARROW))
        racket2.moveUp();
    if(keyIsDown(DOWN_ARROW))
        racket2.moveDown();
    if(keyIsDown(87))
        racket1.moveUp();
    if(keyIsDown(83))
        racket1.moveDown();
}

function drawCenterLine(){
    rect(width/2, height/2, centerLineWidth, height);
}
