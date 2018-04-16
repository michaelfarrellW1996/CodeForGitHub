function Walker() {
    this.x = width / 2;
    this.xOff = random(1000);

    this.render = function () {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40);
    }

    this.step = function () {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }
}
