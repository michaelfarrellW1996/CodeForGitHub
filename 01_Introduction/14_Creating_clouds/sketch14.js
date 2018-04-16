var yoff = 1000.0;

function setup() {
    frameRate(10);
    createCanvas(400, 400);
    pixelDensity(1);
    noiseDetail(15);
}


function draw() {
    loadPixels();
    for (var y = 0; y < height; y++) {
        var xoff = 100.0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;

            xoff += 0.005;
        }
        yoff += 0.005;
    }

    updatePixels();
}
