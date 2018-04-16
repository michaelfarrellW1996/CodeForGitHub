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
