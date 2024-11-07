const particles = [];
let m1 = 0.005;
let m2 = 0.0025;
let speed = 5;
const particlesPerFrame = 5;
const particleSize = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    stroke(255);
    strokeWeight(10);
}

function draw(){
    spawnParticles(particlesPerFrame);

    background(0, 0, 0, 0.15);
    m1 = map(mouseX, 0, width, 0, 0.01);
    speed = map(mouseY, 0, height, 1, 5);

    for (let i = particles.length - 1; i >= 0 ; i--) {
        const particle = particles[i];
        const x = particle.x;
        const y = particle.y;
        const n = noise(particle.x * m1, particle.y * m1, frameCount * m2);

        stroke(map(x, 0, width, 0, 360), 100, 50, 0.3);
        point(x, y);

        const angle = map(n, 0, 1, 0, 2 * TWO_PI);

        if(!isInsideCanvas(x, y))
            particles.splice(i, 1);
        else
            particles[i] = particle.add(p5.Vector.fromAngle(angle, speed));

    }

    if(frameCount % 100 === 0)
        console.log(particles.length + " " + frameRate());
}

function spawnParticles(n){
    for (let i = 0; i < n; i++) {
        particles.push(createVector(random(width), random(height)));
    }
}

function isInsideCanvas(x, y){
    return x >= 0 && x <= width && y >= 0 && y <= height;
}
