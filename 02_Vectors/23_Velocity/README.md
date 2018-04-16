# Moving a ball using vectors
This example is similar to the first example in this chapter. Instead of moving the ball using x and y variables we are now using vectors instead.
A location and velocity vector is created.
```js
this.location = createVector(random(width), random(height));
this.velocity = createVector(10, 5);
```

An update function is created to update the balls position.
```js
this.update = function () {
    this.location.add(this.velocity);
}
```

We draw the ball using the display function.
```js
this.display = function () {
    stroke(150); //stroke color
    strokeWeight(2); //stroke thickness
    fill(255, 0, 0);

    //draw an ellipse at the new location
    ellipse(this.location.x, this.location.y, 40, 40);
}
```

Finally we use the checkedges function to see if the ball is within the edge of the canvas. By adding and subtracting the half the diameter we can make the ball bounce right on the edge of the ball instead of the center.
```js
this.checkEdges = function () {
    if (this.location.x + 20 > width || this.location.x - 20 < 0) {
        this.velocity.x = this.velocity.x * -1;
    }

    if (this.location.y + 20 > height || this.location.y - 20 < 0) {
        this.velocity.y = this.velocity.y * -1;
    }
}
```
