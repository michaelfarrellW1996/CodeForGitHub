var x = 320;
var y = 180;
var xSpeed = 2;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //Add the current speed to the position
    x = x + xSpeed;

    //Check to see if the position is off the canvas
    if ((x + 24 > width || x - 24 < 0)) {
        xSpeed = xSpeed * -1;
    }

    //Display a circle at the x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, 180, 48, 48);
}
