const DEPTH = 1000;
const offset = 50;
let amountX, amountY;
const minMultiplier = 0.001;
const maxMultiplier = 0.0025;
let bottomColor, topColor;
let m1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    amountX = width/offset;
    amountY = height/offset;
    strokeWeight(1);

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
            noFill();
            drawBubble(x, y, DEPTH);
        }
    }
}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

function drawBubble(x, y, depth){
    if(isInsideCanvas(x, y) && depth > 0){
        const n = noise(x * m1, y * m1);
        const angle = map(n, 0, 1, 0, 2 * TWO_PI);

        stroke(map(x, 0, width, bottomColor, topColor), 100, 50, 0.05);
        circle(x, y, offset);

        const newVec = p5.Vector.fromAngle(angle, offset/10);
        drawBubble(x + newVec.x, y + newVec.y, depth - 1);
    }
}

function mousePressed(){
    if(mouseButton === LEFT)
        drawAll();
}

function isInsideCanvas(x, y){
    return x > -offset && x < width + offset && y > -offset && y < height + offset;
}
