const dimension = 50;
const widthHeight = 900
const side = widthHeight / dimension;
let cells = [];
let isWaving = false;
const waveTime = 625;
let timer = 0;

function setup(){
    createCanvas(widthHeight, widthHeight);
    noStroke();
    colorMode(HSL);
    generateGrid();
}

function draw(){
    if(isWaving){
        increaseColorAndDisplay();
        timer += deltaTime;
        if(timer > waveTime)
            reset();
    } else
        setColorAndDisplay();
}

function mousePressed(){
    isWaving = true;
}

function generateGrid(){
    for (let i = 0; i < dimension; i++) {
        cells[i] = [];
        for (let j = 0; j < dimension; j++) {
            cells[i][j] = new Cell(i*side, j*side, side, 255);
        }   
    }
}

function increaseColorAndDisplay(){
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            cells[i][j].increaseColor();
            cells[i][j].show();
        }   
    }
}

function setColorAndDisplay(){
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            cells[i][j].calcDistAndSetColor();
            cells[i][j].show();
        }   
    }
}

function reset(){
    isWaving = false;
    timer = 0;
}
