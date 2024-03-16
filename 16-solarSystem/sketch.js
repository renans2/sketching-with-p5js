let earthAngleInc   = (360 / 365) / 60;
let earthMultiplier = 100;
let earthDiameter = 20;
let earthDay = 0;
let earthAngle;

let mercuryAngleInc = (360 / 88) / 60;
let mercuryMultiplier = 70;
let mercuryDiameter = 20;
let mercuryAngle;

let venusAngleInc   = (360 / 225) / 60;
let venusMultiplier = 150;
let venusDiameter = 2;
let venusAngle;

let marsAngleInc    = (360 / 687) / 60;
let marsMultiplier = 200;
let marsDiameter = 2;
let marsAngle;

let jupiterAngleInc = (360 / (12 * 365)) / 60;
let jupiterMultiplier = 300;
let jupiterDiameter = 2;
let jupiterAngle;

let saturnAngleInc  = (360 / (29.5 * 365)) / 60;
let saturnMultiplier = 350;
let saturnDiameter = 2;
let saturnAngle;

let uranusAngleInc  = (360 / (84 * 365)) / 60;
let uranusMultiplier = 370;
let uranusDiameter = 2;
let uranusAngle;

let neptuneAngleInc = (360 / (165 * 365)) / 60;
let neptuneMultiplier = 390;
let neptuneDiameter = 2;
let neptuneAngle;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    translate(width / 2, height / 2);
    drawPlanets();
}

function drawPlanets(){
    drawEarth();
    drawMercury();
    drawVenus();
    drawMars();
    drawJupiter();
    drawSaturn();
    drawUranus();
    drawNeptune();
}

function drawEarth(){
    earthAngle = map(earthDay, 0, 365, 0, 360)
    circle(cos(earthAngle) * earthMultiplier, 
           sin(earthAngle) * earthMultiplier,
           earthDiameter);
    earthDay = (earthDay + 365/60);
    console.log(earthDay);
}

function drawMercury(){
    mercuryAngle = map(earthDay, 0, 88, 0, 360)
    circle(cos(mercuryAngle) * mercuryMultiplier, 
           sin(mercuryAngle) * mercuryMultiplier,
           mercuryDiameter);
}

function drawVenus(){
    venusAngle = map(earthDay, 0, 225, 0, 360)
    circle(cos(venusAngle) * venusMultiplier, 
           sin(venusAngle) * venusMultiplier,
           mercuryDiameter);
}

function drawMars(){
    marsAngle = map(earthDay, 0, 687, 0, 360)
    circle(cos(marsAngle) * marsMultiplier, 
           sin(marsAngle) * marsMultiplier,
           mercuryDiameter);
}

function drawJupiter(){
    jupiterAngle = map(earthDay, 0, 12*365, 0, 360)
    circle(cos(jupiterAngle) * jupiterMultiplier, 
           sin(jupiterAngle) * jupiterMultiplier,
           mercuryDiameter);
}

function drawSaturn(){
    saturnAngle = map(earthDay, 0, 29.5*365, 0, 360)
    circle(cos(saturnAngle) * saturnMultiplier, 
           sin(saturnAngle) * saturnMultiplier,
           mercuryDiameter);
}

function drawUranus(){
    uranusAngle = map(earthDay, 0, 84*365, 0, 360)
    circle(cos(uranusAngle) * uranusMultiplier, 
           sin(uranusAngle) * uranusMultiplier,
           mercuryDiameter);
}

function drawNeptune(){
    neptuneAngle = map(earthDay, 0, 165*365, 0, 360)
    circle(cos(neptuneAngle) * neptuneMultiplier, 
           sin(neptuneAngle) * neptuneMultiplier,
           mercuryDiameter);
}
