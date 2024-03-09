let amount = 2;
let colorVar = 0;

function setup(){
    createCanvas(700, 700);
    background(0);
    colorMode(HSL);
    strokeWeight(1);
}

function draw(){
    if(keyIsPressed)
        amount = 1
    if(!mouseIsPressed)
        background(0);

    stroke(colorVar, 100, 50, 1);
    colorVar = (colorVar + 3) % 360

    drawTopLines();
    drawBottomLines();
    drawLeftLines();
    drawRightLines();
}

function mouseClicked(){
    amount += 1;
}

function drawTopLines(){
    let offset = width/amount;
    for (let i = 0; i < amount; i++)
        line(i*offset, 0, mouseX, mouseY);
}

function drawBottomLines(){
    let offset = width/amount;
    for (let i = 0; i <= amount; i++)
        line(i*offset, height, mouseX, mouseY);
}

function drawLeftLines(){
    let offset = height/amount;
    for (let i = 0; i < amount; i++)
        line(0, i*offset, mouseX, mouseY);
}

function drawRightLines(){
    let offset = height/amount;
    for (let i = 0; i < amount; i++)
        line(width, i*offset, mouseX, mouseY);
}
