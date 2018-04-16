# Manupulating the pixel array to change colours. 

We can change the first and third values of the pixel array. These corrspond to the Red and Blue values. If we chage these to the x and y pixels position as we move along the sceen it creates a rainbow effect on the canvas. this is due to the red and blue pixels slowly being increased. 

```js
function draw() {
    loadPixels();
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = x;
            pixels[index + 1] = 0;
            pixels[index + 2] = y;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
}
```
