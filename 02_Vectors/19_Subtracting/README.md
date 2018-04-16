# drawing a line on a canvas by subtracting vectors 

In this example we will be manipulating the position of a line by subtracting two vectors. We create the first vector based on the position of the mouse on the canvas. 
We then create a vector in the center of the canvas by setting it to half the width and half the height. 
This line of code creates a vector using the mouse's x and y location. We then subtract the centre vector from the mouse vector and call it the vector line. 

This creates a vector line from by subtracting the center vector from the mouse vector. We then translate this line to the center of the page and it draws the line from the center to the mouse pointer.

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

    //translate to the center
    translate(width / 2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);
}
```
