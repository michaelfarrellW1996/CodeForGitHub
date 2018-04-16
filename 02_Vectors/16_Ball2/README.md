# Using vectors to move a ball in two directions

This example is very similar to the previous. We are just adding a secound variable to allow the ball to move in two directions rather than just left to right.
The ySpeed variable works in the exact same way as the xSeed variable. The only differece it bases its limits on height instead of width. This esures the ball never leaves the sides, top or bottom of the canvas. 

```js
var x = 100;
var y = 100;
var xSpeed = 2.5;
var ySpeed = 2.5;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //Add the current speed to the position
    x = x + xSpeed;
    y = y + ySpeed;

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
```
This shows the main difference between the xSpeed and ySpeed.

```js 
    if ((x + 24 > width || x - 24 < 0)) {
        xSpeed = xSpeed * -1;
    }
    if ((y + 24 > height || y - 24 < 0)) {
        ySpeed = ySpeed * -1;
    }
```