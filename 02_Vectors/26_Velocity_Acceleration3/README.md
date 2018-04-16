# Acceleration using the mouse pointers position 

For this example we are back to creating a vector for the mouse location. This time however we are using a static method so as not to change the value of mouse and change the value of accleration instead.

By doing this we are able to move the ball towards the mouse.

This example involves using the position of the mouse to create a vector and effect the rate of acceleration for the ball. 

The acceleration is then determined by subtrating the mouse vector from the location. 

This causes the ball to gravitate towards the mouse pointer.

```js
var Mover = function () {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    this.display = function () {
        stroke(150); //stroke color
        strokeWeight(2); //stroke thickness
        fill(255, 0, 0);

        //draw an ellipse at the new location
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    this.checkEdges = function () {
        if (this.location.x + 20 > width || this.location.x - 20 < 0) {
            this.velocity.x = this.velocity.x * -1;
        }

        if (this.location.y + 20 > height || this.location.y - 20 < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}
```
You can see we have set the mouse vector in the update funtion as the mouse pointer will continually be updating its position. 

Other than this line of code the rest of the file is the same as the previous example.