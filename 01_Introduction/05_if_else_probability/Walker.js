function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }

    this.step = function () {
        var choice = floor(random(4));
        var r = random(1);


        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
