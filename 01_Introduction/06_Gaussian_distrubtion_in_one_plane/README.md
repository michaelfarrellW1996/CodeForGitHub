# Gaussian distribution on the X axis

This is an example of a randomgaussian funtion. This funtion deals with numbers that fit into standard deviations and takes two parameters. These paraenters are the mean and the standard deviation or sd for short. The mean is the average outcome and for this example we will place set the meam to be the width of the canavas divided by two. When the ball is drawn it is positioned at xloc multiplied by the standard deviation and adds on the mean. We add the mean as it means whatever the outcome of the xloc being muliplied by the sd it will always be either side of the mean. It results with the majority of the balls being drawn appearing within the first diviation or between 190 and 210 x coordinates in our case as our canvas is 500px wide.

```js

function draw() {
    var xloc = randomGaussian();
    console.log(xloc);

    var sd = 60;
    var mean = width / 2;
    xloc = (xloc * sd) + mean;

    fill(0, 10);
    noStroke();
    ellipse(xloc, height / 2, 16, 16);
}
```
