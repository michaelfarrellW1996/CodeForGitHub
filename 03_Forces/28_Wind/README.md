# Applying Wind to a Mover

In this example we will be applying a real world force like wind to a mover and effect its trajectory.

We start off by creating a vector that we call the force we want to imitate, in this case we will use wind. 

```js
var wind = createVector(0.03, 0.06);
```
 We then use the applyForce funtion to apply this to the mover we will create. This is all done in the sketch.js file. 

```js
var mover;

function setup() {
  createCanvas(640,640);
  mover = new Mover();

}

function draw() {

  var wind = createVector(0.03, 0.06);

  background(255);

  mover.applyForce(wind);

  mover.checkEdges();
  mover.update();
  mover.render();

}
```

In the mover class we allow the acceleration to equal this force as shown in the line of code below. 

```js
this.applyForce = function(force) {
  this.acceleration = force;
}
```
In the end the new mover file looks like the code we have below.

```js 
function Mover() {

  this.location = createVector(30, 30);
  this.velocity = createVector(3, 0);
  this.acceleration = createVector(0, 0);


  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
  }

  this.render = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 50);
    ellipse(this.location.x, this.location.y, 30, 30);
  }

  this.checkEdges = function() {
    if (this.location.x + 30 / 2 >= width || this.location.x - 30 / 2 <= 0) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.location.y + 30 / 2 >= height || this.location.y - 30 / 2 <= 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }


  this.applyForce = function(force) {
    this.acceleration = force;
  }
}
```