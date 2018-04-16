# Using perlin noise with the pixel array

By changing the bright value to use perlin noise to pick a number this means it will always pick a number close to the previous one. This 
means the pixels will be much closer in color to each other. The result is a cloud like effect. 
```js
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
```
