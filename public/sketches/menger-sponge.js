const xs = [-1,0,1,1,1,0,-1,-1];
const zs = [-1,-1,-1,0,1,1,1,0];
const size = 500;
const depth = 2;
let counter = 0;
let eyeX, eyeY, eyeZ;
let cam;

function setup() {
  const canvas = createCanvas(600, 600, WEBGL);
  canvas.parent("canvas-container");
  specularMaterial(255,255,255);
  colorMode(HSL);
  shininess(10);
  cam = createCamera();
}

function draw() {
  background(255);
  stroke(255)
  strokeWeight(map(sin(frameCount * 0.05),-1,1,0,3));
  const distance = createVector(cam.eyeX,cam.eyeY,cam.eyeZ).mag();
  perspective(map(distance,1,10000,1.5,1),width/height,1,10000);
  orbitControl(2,2,2);
  pointLight(frameCount * 1 % 360,100,50,cam.eyeX,cam.eyeY,cam.eyeZ);
  pointLight(frameCount * 1 % 360,100,50,cam.eyeX,cam.eyeY,cam.eyeZ);
  
  if(eyeX === cam.eyeX && eyeY === cam.eyeY && eyeZ === cam.eyeZ){
    counter++;
  }
  
  rotateX(0.005 * counter);
  rotateY(0.007 * counter);
  rotateZ(0.009 * counter);
  
  eyeX = cam.eyeX;
  eyeY = cam.eyeY;
  eyeZ = cam.eyeZ;
  
  drawSponge(depth, size);
}

function drawSponge(depth, size){
  if(depth > 0) {
    const shift = size/3;
    
    for(let i = 0; i < 8; i++){
      const x = xs[i] * shift;
      const z = zs[i] * shift;
      
      push();
        translate(x, -shift, z);
        drawSponge(depth-1, size/3);
      
        translate(0, 2 * shift, 0);
        drawSponge(depth-1, size/3);

        if(i % 2 === 0){
          translate(0, -shift, 0);
          drawSponge(depth-1, size/3)
        }
      pop();
    }
  } else {
     box(size); 
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}
