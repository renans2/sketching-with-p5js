const lines = 20;
let lineOffset;
const diameterPct = 0.000015;
const baseWidthPct = 0.6;
let baseWidth, diameter;
let timer = 0;
const wait = 100;
let line = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    baseWidth = baseWidthPct * width;
    lineOffset = height/lines;
    diameter = diameterPct * (width * height);
}

function draw() {
    if(timer >= wait){
        line = (line + 1) % lines;
        timer = 0
    } else {
        timer += deltaTime;
    }

    background(0);
    translate(width/2, 0);

    fill(0, 150, 0);
    triangle(0,0,baseWidth/2,height,-baseWidth/2, height);

    for (let i = 1; i < lines; i++) {
        const nBalls = i + 1;
        const lineHeight = i * lineOffset + diameter/2;
        const lineWidth = map(i, 0, lines, diameter, baseWidth);
        const currCol = Math.floor(map(line, 0, 20, 0, nBalls));

        for (let j = 0; j < nBalls; j++) {
            if(i === line || i === lines - line || j === currCol || j === nBalls - currCol - 1)
                fill(map(cos(frameCount * 0.05), -1, 1, 200, 255),map(cos(frameCount * 0.05), -1, 1, 200, 255),0);
            else
                fill(map(sin(frameCount * 0.05), -1, 1, 100, 255),0,0);

            circle(lerp(-lineWidth/2, lineWidth/2, j/(nBalls-1)), lineHeight, diameter);
        }
    }
}
