let amount = 10;
let diameter = 100;
let radius = diameter/2;
let startingX = 0;
let startingSpeed = 5;
let speedOffset = 2;
const bouncers = [];

function setup(){
    createCanvas(900, 900);
    fill(255);
    createCircles();
}

function draw(){
    background(0);
    bouncers.forEach(bouncer => {
        bouncer.move();
        bouncer.show();
    });
}

function createCircles(){
    let offset = height / amount
    for (let i = 0; i < amount; i++) {
        bouncers[i] = new Bouncer(radius + 1, i*offset + offset/2, diameter, startingSpeed + i * speedOffset, width);
    }
}

class Bouncer{
    constructor(x, y, diameter, speed, canvasWidth){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.diameter = diameter;
        this.canvasWidth = canvasWidth;

        this.radius = diameter / 2;
    }

    move(){
        this.x += this.speed;
        if(this.x + this.radius > this.canvasWidth){
            this.speed *= -1;
            this.x = this.canvasWidth - this.radius;
        } else if(this.x - this.radius < 0){
            this.speed *= -1;
            this.x = 0 + this.radius;
        }
    }

    show(){
        circle(this.x, this.y, this.diameter);
    }
}
