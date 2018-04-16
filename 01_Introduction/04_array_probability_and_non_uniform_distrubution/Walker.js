function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }

    this.step = function () {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[3] = 3;


        var index = floor(random(probArray.length));
        var r = probArray[index];


        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
