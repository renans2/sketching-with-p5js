let earthDaysToAYear   = [88, 225, 365, 687, (12 * 365), (29.5 * 365), (84 * 365), (165 * 365)];
let distanceFromCenter = [70, 100, 150, 200,  300,        350,          370,        390];
let diameters          = [20, 20,  20,  20,   20,         20,           20,         20]; 
let planets = new Array(8);
let yearInDays = 0;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
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
            distance: distanceFromCenter[i],
        };
        planets[i] = planet;
    }
}

function drawPlanets(){
    for (let i = 0; i < planets.length; i++) {;
        let planet = planets[i];
        let angle = map(yearInDays, 0, earthDaysToAYear[i], 0, 360);
        circle(cos(angle) * planet.distance, 
               sin(angle) * planet.distance,
               planet.diameter);
    }
}
