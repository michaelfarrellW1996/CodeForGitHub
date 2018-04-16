var position;
var velocity;

function setup() {
    createCanvas(640, 360);
    position = createVector(100, 100);
    velocity = createVector(2, 2);
}

function draw() {
    background(51);

    //Add the current velocity to the position
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;

    //Check to see if the position is off the canvas
    if ((position.x + 24 > width || position.x - 24 < 0)) {
        velocity.x = velocity.x * -1;
    }
    if ((position.y + 24 > height || position.y - 24 < 0)) {
        velocity.y = velocity.y * -1;
    }

    //Display a circle at the x and y position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
}
