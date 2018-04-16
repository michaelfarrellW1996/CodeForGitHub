# Manipulating the pixel array to create a static effect.

We will now introduce a new varibale we will call bright. as we can see bright is a random number between 0 and 255. If every pixel is set to this then the result will be some form of grey. This is constantly refreshed and creates the effect of static that we are familier with on telivisions. 

```js
var bright = random(255);
  function draw() {
    loadPixels();
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var bright = random(255);
            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
}```
