# Creating a simple vector to move a ball

We will now show how simple vectors can move a ball along a canvas. Three variables are needed to start this process. These are the x, y and xSpeed variables. X and y dictate where the ball starts on the canvas as per usual. xSpeed is the variable that determins how far along the ball moves each time. This is done by adding the SPeed to the x variable and starts the ball moving. 

We do have to chck to see if the ball is staying in the canavs however. We do this with an if statement. this statment checks to see if the ball is at the edge of the canvas. Once the ball reaches one of the sides the speed is multiplied by minus one. This cause the ball to change direction. We have the difference to be + and - 24. This is because the diameter of the ball is 48 pixels so we want to create a bouncing effect. 

```js
var x = 320;
var y = 180;
var xSpeed = 2;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //Add the current speed to the position
    x = x + xSpeed;

    //Check to see if the position is off the canvas
    if ((x + 24 > width || x - 24 < 0)) {
        xSpeed = xSpeed * -1;
    }

    //Display a circle at the x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, 180, 48, 48);
}
````

