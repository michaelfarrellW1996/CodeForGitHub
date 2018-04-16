var Mover = function () {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(0.02);

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
