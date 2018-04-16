# Mass

Objects with different mass will be affected by forces differently. A light object will move much more with wind than a heavy object.

When dealing with mass obviously different masses will be effected differently by different forces. For example a heavier object will not be effected by the wind as much as a lighter object. 

To do this we modify the Mover class to take a parameter that we will call mass or m for short. we then assign it to a variable that can be user with the following line of code.

```js
this.mass = m;
```

```js 
function Mover(m) {

  this.location = createVector(30, 30);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = m;


  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.render = function() {
    noStroke();
    fill(255, 0, 0, 50);
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
  }
```
We are going to assume for this example that bigger objects will be heavier. This is why we will set the diameter of the oject to the mass. It ensures bigger objects will automatically be heavier than smaller ones.

To show a heavier object we will set the diameter of the circle to be the mass. Therefore a heavier object will be bigger in appearance.
```js
  this.render = function() {
    noStroke();
    fill(255, 0, 0, 50);
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
  }

  this.checkEdges = function() {
    if (this.location.x + this.mass / 2 >= width || this.location.x - this.mass / 2 <= 0) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.location.y + this.mass / 2 >= height || this.location.y - this.mass / 2 <= 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
}
```
The force is then divided by the mass of the object and finally this is added to the acceleration. 
We set the initial mass in the sketch.js file. If you increase this mass you will see the ball moves along the screen slower. 

```js
function setup() {
  createCanvas(640,640);
  mover = new Mover(70);

}
```