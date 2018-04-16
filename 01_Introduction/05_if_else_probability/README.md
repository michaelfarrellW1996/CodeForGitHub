# Using probability

We are using probibility again to sway the direction of the walker inthis code. This is once again in the step funtio of the walker class. You can see here how the varibale is chosen at random between 0 and 1. Using if and else staements we can the probability that the number will be below 0.8 far outweighs that of any other outcome. this means the walker will more than likely move right across the screen instead of left or up or down.

```js
   this.step = function () {
        var choice = floor(random(4));
        var r = random(1);


        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```
