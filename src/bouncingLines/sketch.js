const leftBorder = 0;
const topBorder = 0;
let rightBorder, bottomBorder;
const minSpeed = 4;
const maxSpeed = 8;
const nLines = 5;
const bouncingLines = [];
let lineColor = 0;
const lineColorIncrementer = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    strokeWeight(3);
    noFill();

    rightBorder = width;
    bottomBorder = height;

    // create bouncing lines
    for (let i = 0; i < nLines; i++) {
        bouncingLines.push(new BouncingLine());
    }
}

function draw() {
    background(0, 0, 0, 0.05);

    // draw bouncing lines
    beginShape();
    for (const line of bouncingLines) {
        line.move();
        vertex(line.x, line.y);
    }
    stroke(lineColor, 100, 50, 0.5);
    endShape(CLOSE);

    lineColor = (lineColor + lineColorIncrementer) % 360;
}

class BouncingLine{
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.xSpeed = random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
        this.ySpeed = random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.hitBorderX())
            this.reverseXSpeed();

        if (this.hitBorderY())
            this.reverseYSpeed();
    }

    hitBorderX(){
        if(rightBorder < this.x || this.x < leftBorder){
            this.x = this.x < width/2 ? 0 : rightBorder;
            return true;
        }

        return false;
    }

    hitBorderY(){
        if(bottomBorder < this.y || this.y < topBorder){
            this.y = this.y < height/2 ? 0 : bottomBorder;
            return true;
        }

        return false;
    }

    reverseXSpeed(){
        this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * random(minSpeed, maxSpeed);
    }

    reverseYSpeed(){
        this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * random(minSpeed, maxSpeed);
    }
}