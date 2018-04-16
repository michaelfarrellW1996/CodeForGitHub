# drawing a line using vectors

This is once again very similar to previous exercises. However instead of changing the lenght of the line based on the mouse position we are normalising the lenght of the line.
This means that whatever distance the mouse may be the line never becomes longer or shorter. 

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

    
    vectorLine.normalize();
    vectorLine.mult(80);

    //translate to the center
    translate(width / 2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);
}
```
Below is the two lines we have added. The first one normalised the length of the line to 1 while the second one changes the lenght of the vector line through muliplication. 

```js
    vectorLine.normalize();
    vectorLine.mult(80);
}
```