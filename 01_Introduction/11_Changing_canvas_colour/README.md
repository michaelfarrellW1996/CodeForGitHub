# Manipulating the pixel array to change the colour of the canavs. 

In this example we are creating a nested loop which goes through all the pixels and changes them to red. We have the for loop that ensures all the pixels along the y axis get changed. We then also have a for loop for the x axis ensuring all these pixels are changed too. It works as a line. The y loop starts at the top left corner of the screen. After this the x loop goes through every pixel changing it to red untill it reachs the width. once it reachs the width of the canvas the y for loop runs again only with the y variable increaded. This means all the pixels are changed to red. 

```js
loadPixels();
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = 255;
            pixels[index + 1] = 0;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
```
