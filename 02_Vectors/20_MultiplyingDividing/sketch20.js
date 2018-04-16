function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //create a vector from the mouse position
    var mouse = createVector(mouseX, mouseY);
    //create a vector at the center of the canvas
    var center = createVector(width / 2, height / 2);
    //create a vector line by subtracting the center vector from the mouse vector
    var vectorLine = mouse.sub(center);
    //multiply the vector line
    vectorLine.mult(0.5);

    //translate to the center
    translate(width / 2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);
}
