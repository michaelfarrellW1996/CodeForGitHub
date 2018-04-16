# Using the pixel array

In this example we don't have any walkers. This example is to show how we can maniplulate pixels on the screen. This all takes place in the draw funtion of our code. We load all the pixels using the load pixel function. 

We then multiply the y value by the width and add the x value. 

The sum of this is then multiplied by 4 as in the RGBA system there are 4 values. What we are achieving here is a red pixel at the very top of the screen.



```js
function draw() {
    loadPixels();
    var index = (0 * 5 + 0) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;

    updatePixels();
}
```
