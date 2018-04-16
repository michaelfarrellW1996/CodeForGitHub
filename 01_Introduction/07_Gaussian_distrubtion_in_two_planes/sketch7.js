function setup() {
    createCanvas(500, 500);
    background(255);
}


function draw() {
    var xloc = randomGaussian();
    var yloc = randomGaussian();

    var xsd = 100;
    var ysd = 40;

    var xMean = width / 2;
    var yMean = height / 2;
    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;

    var rColor = 33;

    fill(rColor, 50);
    noStroke();
    ellipse(xloc, yloc, 16, 16);
}
