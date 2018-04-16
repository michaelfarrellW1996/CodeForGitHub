# Using two vectors to move a ball by addition

This is almost identicle to the previous example. The only diffrerence is instead of adding velocity to the position like this 

```js
    //Add the current velocity to the position
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;
```
We add the velocity as shown below.

```js
function draw() {
    background(51);

    //Add the current velocity to the position
    position.add(velocity);

    //Check to see if the position is off the canvas
    if ((position.x + 24 > width || position.x - 24 < 0)) {
        velocity.x = velocity.x * -1;
    }
    if ((position.y + 24 > height || position.y - 24 < 0)) {
        velocity.y = velocity.y * -1;
    }

    //Display a circle at the x and y position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
}
```
