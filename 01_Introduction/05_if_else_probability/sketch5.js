function setup() {
    createCanvas(500, 500);
    background(255);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
