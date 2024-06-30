let earthDaysToAYear   = [88, 225, 365, 687, (12 * 365), (29.5 * 365), (84 * 365), (165 * 365)];
let distanceFromCenter = [70, 100, 150, 200,  300,        350,          370,        390];
let diameters          = [20, 20,  20,  20,   20,         20,           20,         20]; 
let planets = new Array(8);
let yearInDays = 0;
let lines = false;
let offset;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    background(0);
    stroke(255);
    strokeWeight(1);

    offset = ((width / 2)) / 8;

    buildPlanets();
}

function draw(){
    background(0);
    translate(width / 2, height / 2);

    drawPlanets();
    yearInDays = (yearInDays + 365/60);
}

function buildPlanets(){
    for (let i = 0; i < planets.length; i++) {
        let planet = {
            diameter: diameters[i],
            distance: (i * offset) + offset/2,
        };
        planets[i] = planet;
    }
}

function drawPlanets(){
    if(lines)
        noFill();
    else
        fill(255);

    beginShape();
    for (let i = 0; i < planets.length; i++) {;
        let planet = planets[i];
        let angle = map(yearInDays, 0, earthDaysToAYear[i], 0, 360);
        let x = cos(angle) * planet.distance;
        let y = sin(angle) * planet.distance
        let planetDiameter = planet.diameter; 
        circle(x, y, planetDiameter);
        if(lines)
            vertex(x, y);        
    }
    endShape();
}

function mousePressed(){
    lines = !lines;
}
