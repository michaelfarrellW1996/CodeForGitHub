# Drawing a line ona canvas by multiplyig vectors


This example is similar to the previous one. We are only adding one line of code. This line multiplies the vector line by 0.5.
This has the effect of halving the vectore so it doesnt reach all the way to the mouse pointer on the canvas.

```js
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
```
This is the one line we added 

```js
	vectorLine.mult(0.5);
```