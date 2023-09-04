let angle = 0;
let nagasa = 0;

function setup(){
    let canvas = createCanvas(min(windowWidth, 760), 500);
    canvas.parent("canvas");
}

function draw(){
  background(220);
  
  fill(200);
  rect(10, 10, 50, 100);
  stroke(150);
  line(50, 50, 300, 350);
  circle(windowWidth / 4 + 10, height / 2, 200);
  ellipse(width / 2, height / 2, 350, 150);
  
  translate(width / 2, height / 2);
  angle += 0.02;
  rotate(angle);
  
  beginShape();
  fill(60, 80, 120);
  stroke(255);
  vertex(5*2, 0*2);
  vertex(5*2, 30*2);
  vertex(25*2, 70*2);
  vertex(-25*2, 70*2);
  vertex(-5*2, 30*2);
  vertex(-5*2, 0*2);
  endShape(CLOSE);

  rotate(-angle);
  translate(-width / 2, -height / 2);
  beginShape();
  fill(60, 80, 120);
  stroke(255);
  vertex(50*2, 20*2);
  vertex(50*2, 50*2);
  vertex(70*2, 90*2);
  vertex(20*2, 90*2);
  vertex(40*2, 50*2);
  vertex(40*2, 20*2);
  endShape(CLOSE);
  
  let fps = frameRate()
  fill(60, 80, 120);
  stroke(255);
  text("FPS: " + fps.toFixed(2), 10,  20);
  
  nagasa += 0.1;
 
  rect(200, 10, (nagasa *5) % 200, 100);
  rect(200, 120, sin(nagasa) * 100, 100);
  rect(200, 240, abs(sin(nagasa)) * 100, 100);

  fill(60, 80, abs(cos(nagasa*0.5))*255, abs(sin(nagasa)*255));
  square(20, 400, 50, 50);
  text("あああ", 10, height -200);
  
  if (mouseIsPressed) {
    fill(250,10,10);
    square(mouseX-8, mouseY-8, 16, 16);
  }
  
}
