# Gaussian distribution ont he x and y axis

In this example we do the same again but add in a yloc as well. This means the balls will appear in different places instead of just the
x axis. 

This example is very similar to that of te last example. The only difference is that istead of setting the y axis we create a yloc too. This means the balls can appear all over the canvas. Its done the same way as the xloc. The only difference is that we have set the mean to be half the height of the canvas instead of the width. We then set a standard devation for the y coordinates and proceed the same way we did the last time with the xloc. 


```js
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
```
