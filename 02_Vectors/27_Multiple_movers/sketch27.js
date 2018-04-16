var movers = [];

function setup() {
    createCanvas(1200, 600);
    for (var i = 0; i < 10; i++) {
        movers[i] = new Mover();
    }
}

function draw() {
    background(0, 50);
    for (var i = 0; i < movers.length; i++) {
        movers[i].display();
        movers[i].update();
        movers[i].checkEdges();
    }
}
