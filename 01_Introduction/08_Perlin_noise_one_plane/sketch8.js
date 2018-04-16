var walker;

function setup() {
    createCanvas(1200, 1200);
    background(255);
    walker = new Walker();
}

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);

    walker.step();
    walker.render();
}
