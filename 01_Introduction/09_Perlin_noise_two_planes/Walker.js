function Walker() {
    this.position = createVector(width / 2, height / 2);
    this.noff = createVector(random(1000), random(1000));

    this.render = function () {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200),
            map(noise(this.noff.y), 0, 1, 20, 200));
    }

    this.step = function () {
        this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
        this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);
        this.noff.add(0.005, 0.005);
    }
}
