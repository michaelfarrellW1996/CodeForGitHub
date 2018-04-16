var randomCounts = [];
var total = 20;

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
}

function draw() {
    background(255);
    var index = floor(random(total));
    randomCounts[index]++;


    stroke(0);
    strokeWeight(2);
    fill(145, 86, 45);

    var w = width / randomCounts.length;

    for (var x = 0; x < randomCounts.length; x++) {
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
