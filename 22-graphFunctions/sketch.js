let coords = [];
let funcExp = [];
let unitByXPixels = 50;

let x2 = {
    coef: 1,
    exp: 2
};

funcExp.push(x2);

function setup(){
    createCanvas(1500, 900);
    stroke(0);

    saveCoords();
}

function draw(){
    background(0);
    translate(width / 2, height / 2);
    scale(1, -1);
    
    drawAxis();
    drawFunction();
}

function drawAxis(){
    strokeWeight(3);
    stroke(255);
    line(0, -height/2, 0, height/2);
    line(-width/2, 0, width/2, 0);
}

function saveCoords(){
    for (let pixel = -width/2; pixel < width/2; pixel++) {
        let expr = funcExp[0];
        let x = pixel;
        let y = expr.coef * pow(x/unitByXPixels, expr.exp);
        y *= unitByXPixels;
        coords.push(createVector(x, y));
    }
}

function drawFunction(){
    strokeWeight(5);
    stroke(255, 0, 0);
    for (let i = 0; i < coords.length - 1; i++) {
        let xFrom = coords[i].x;
        let yFrom = coords[i].y;
        let xTo = coords[i + 1].x;
        let yTo = coords[i + 1].y;
        line(xFrom, yFrom, xTo, yTo);
    }
}

// function drawFunctionOLD(){
//     for (let pixel = -width/2; pixel < width/2; pixel++) {
//         let expr = funcExp[0];
//         let x = pixel;
//         let y = expr.coef * pow(x/unitByXPixels, expr.exp);
//         y *= unitByXPixels;
//         point(x, y);
//     }
// }
