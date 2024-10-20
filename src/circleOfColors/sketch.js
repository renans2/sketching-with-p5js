let amount = 500;
let r;
let offset;
let angleIncrementer = 0;
let speed = 0;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    strokeWeight(3);

    r = width/2;
    offset = 360 / amount;
}

function draw(){
    if(mouseInsideCanvas()){
        amount = ceil(map(mouseX, 0, width, 1, 1000));
        speed = map(mouseY, height, 0, 0, 120);
        offset = 360 / amount;
        
        angleIncrementer = (angleIncrementer + speed) % 360;
    }
    translate(width/2, height/2);
    background(0);
    drawLines();
}

function mouseInsideCanvas(){
    return (0 < mouseX && mouseX < width) && (0 < mouseY && mouseX < height);
}

function drawLines(){
    for (let i = 0; i < amount; i++) {
        let angle = i * offset + angleIncrementer;
        let xTo = cos(angle - 90) * r;
        let yTo = sin(angle - 90) * r;
        stroke(angle - angleIncrementer, 100, 50, 1); 
        line(0, 0, xTo, yTo);
    }
}
