# Random walker with 9 outcomes

To accomplish this we continue on with the previous file. All we change is the step function. While the previous example used if and else statments in this code we give two variables stepx and stepy a random nuber between -1 and 2. Once selected stepx effects the x coordinate while stepy will effect the y coordinate.

```js
this.step = function () {
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```
