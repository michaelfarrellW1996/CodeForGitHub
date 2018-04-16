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
        ellipse(this.location.x, this.location.y, 10);
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
