# Creating Multiple Movers with an array

For this final chapter in movers we will be crating an array so muliple movers can be added to the canvas.

We start off by creating this array in the sketch.js file like so.

```js 
var movers = [];

function setup() {
    createCanvas(1200, 600);
    for (var i = 0; i < 100; i++) {
        movers[i] = new Mover();
    }
}

function draw() {
    background(0, 50);
    for (var i = 0; i < movers.length; i++) {
        movers[i].display();
        movers[i].update();
        movers[i].checkEdges();
    }
}
```

```js

In the draw funtion we crate a for loop which draws all these movers to the canvas. We display and update each mover created in this for loop.

Over in the Mover class nothing really has changed except we declare the magnitude in a variable now and create a color array with random values.

In the mover class however not much has changed. We add a random array for colour so all our movers will appear different. We than set a magnitude on the movers. 
In the display we assign each mover a random colour.

```js 
var Mover = function () {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();
    this.color = [random(255), random(255), random(255)];
    this.mag = 0.09;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(this.mag);

        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);

    }

    this.display = function () {

        
        fill(this.color[0], this.color[1], this.color[2]);

        //draw an ellipse at the new location
        ellipse(this.location.x, this.location.y, 10, 10);
    }

    this.checkEdges = function () {
        if (this.location.x + 5 > width || this.location.x - 5 < 0) {
            this.velocity.x = this.velocity.x * -1;
        }

        if (this.location.y + 5 > height || this.location.y - 5 < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}
```
As you can see we have continued on with our previous example where our movers all move towards the position of the mouse on the canvas. 

The lines of code we have changed appear under the Mover function and the display funtion where we have added the following lines. 

```js 
    this.color = [random(255), random(255), random(255)];
    this.mag = 0.09;
```
and 

```js 
	fill(this.color[0], this.color[1], this.color[2]);
```