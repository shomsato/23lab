function setup(){
    let canvas = createCanvas(800, 500);
    canvas.parent("canvas");
}

function draw(){
    background(220);
    fill(200);
    rect(100, 50, 10, 100);
    stroke(150);
    line(50, 50, 300, 350);
    let fps = frameRate();
    fill(60, 80, 120);
    stroke(255);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
    circle(windowWidth / 4, height / 2, 200);
}

function flask() {

}