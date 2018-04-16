# Perlin noise on the x and y axis

In this example we create two variables at the start. walkers and noOfWalkers. These variables will be used to create an array of objects.
Using a for loop we can create the array and popluate it with walker objects. In the draw function we call the step function first instead to
ensure all the walkers start at different positions.
```js
var walkers;
var noOfWalkers;

function setup() {
    createCanvas(1200, 1200);
    background(255);
    noOfWalkers = 10;
    walkers = [];
    for (var i = 0; i < noOfWalkers; i++) {
        walkers[i] = new Walker();
    }
}

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    for (var i = 0; i < noOfWalkers; i++) {
        walkers[i].step();
        walkers[i].render();
    }
}
```

In the walker class we create a vector to store the information of each object. Then using the noise functions again we randomly move the walkers
with a smooth movement. The result is 20 walkers lazily floating around the screen. 
```js
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
```
