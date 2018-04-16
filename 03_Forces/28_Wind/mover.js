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
