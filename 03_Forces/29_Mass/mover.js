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
