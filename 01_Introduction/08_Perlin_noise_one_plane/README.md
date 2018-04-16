# Movement along the x axis using perlin noise function

Perlin noise is a smooth and natural way to move the walker around the canvas. It retuns a number that is close but not the same as the previous number. The xOff variable chooses a number at random and is placed on the screen. Every step the walker thakes the xOff variable is increased and this ensures the walker moves smoothly. 

```js
function Walker() {
    this.x = width / 2;
    this.xOff = random(1000);

    this.render = function () {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40);
    }

    this.step = function () {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }
}
```
