# Acceleration using vectors 

In this example we will show how you can add simple exceleration of a vector. Its similar to the last example except two new lines of code are added. 

The first line creates a new vector that we are calling acceleration. 


```js
this.acceleration = createVector(0.03, 0.04);
```
The next line adds this acceleration to the velocity. This means that afer every update the velocity increases. You can add a limit to the velocity if you want to cap it at a certain ammount. In this example I have set my limit to cap at 10.

```js
this.velocity.add(this.acceleration);
this.velocity.limit(10);
```
In the end our mover class looks like this. 

```js 
var Mover = function () {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.03, 0.04);

    this.update = function () {
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