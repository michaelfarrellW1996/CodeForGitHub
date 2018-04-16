# Tracking a vector based on its magnitude.

In this example we start it off in the exact same way as the previous two examples. Wether of not you want to muliply the vectorLine is up to you but for this example I have left the vector line as it is so it reachs the mouse pointer. 

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
We then add in this block of code inbetween these two blocks of code. We are adding in the code which places and draws the rectangle. variable m which is the magnitude of the vector changes everytime the mouse is moved and as a result the rectangle changes size in accordance to this.

```js
    var m = vectorLine.mag();
    fill(255);
    stroke(0);
    rect(0, 0, m, 20);
  ```
I have placed my recangle at the top of my canvas but if you wanted to you could move it to the bottom by simple chaning the coordinates. 