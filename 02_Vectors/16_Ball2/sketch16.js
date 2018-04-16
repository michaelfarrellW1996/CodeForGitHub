var x = 100;
var y = 100;
var xSpeed = 2.5;
var ySpeed = 2;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //Add the current speed to the position
    x = x + xSpeed;
    y = y + ySpeed;

    //Check to see if the position is off the canvas
    if ((x + 24 > width || x - 24 < 0)) {
        xSpeed = xSpeed * -1;
    }
    if ((y + 24 > height || y - 24 < 0)) {
        ySpeed = ySpeed * -1;
    }

    //Display a circle at the x and y position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, y, 48, 48);
}
