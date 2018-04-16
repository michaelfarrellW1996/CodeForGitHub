function setup() {
    createCanvas(400, 400);
    background(127);
}


function draw() {
    loadPixels();
    var index = (0 * 5 + 0) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;

    updatePixels();
}
