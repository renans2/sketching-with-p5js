const DEPTH = 1000;
const offset = 10;
let amountX, amountY;
const minMultiplier = 0.00035;
const maxMultiplier = 0.0025;
let bottomColor, topColor;
let m1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    amountX = width/offset;
    amountY = height/offset;
    strokeWeight(2);

    noLoop();
    drawAll();
}

function drawAll(){
    background(0);
    noiseSeed(random(1000000));
    m1 = random(minMultiplier, maxMultiplier);
    bottomColor = random(50);
    topColor = random(50, 360 - bottomColor) + bottomColor;

    fill(255, 100);
    for (let i = 0; i < amountY; i++) {
        for (let j = 0; j < amountX; j++) {
            const y = i * offset;
            const x = j * offset;
            beginShape();
            noFill();
            drawLine(x, y, DEPTH);
        }
    }
}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

function drawLine(x, y, depth){
    if(isInsideCanvas(x, y) && depth > 0){
        const n = noise(x * m1, y * m1);
        const angle = map(n, 0, 1, 0, 2 * TWO_PI);

        if(depth < DEPTH)
            vertex(x, y);
        else
            stroke(map(x, 0, width, bottomColor, topColor), 100, 50, 0.075);

        const newVec = p5.Vector.fromAngle(angle, 10);
        drawLine(x + newVec.x, y + newVec.y, depth - 1);
    }
    else{
        endShape();
    }
}

function mousePressed(){
    if(mouseButton === LEFT)
        drawAll();
}

function isInsideCanvas(x, y){
    return x > 0 && x < width && y > 0 && y < height;
}
