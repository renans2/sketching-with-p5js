let widthHeight = 900;
let xy, colorVar, sideLength;

function setup(){
    createCanvas(widthHeight, widthHeight);
    background(0);
    colorMode(HSL);
    rectMode(CENTER);
    colorVar = 0;
    sideLength = 900;
}

function draw(){
    fill(colorVar, 100 , 50, 1);
    colorVar = (colorVar + 3) % 360;

    sideLength -= 10;
    strokeWeight(map(sideLength, widthHeight, 0, 3, 0));
    
    if(sideLength > 0){
        xy = widthHeight/2;
        rect(xy, xy, sideLength, sideLength);
    }
}
