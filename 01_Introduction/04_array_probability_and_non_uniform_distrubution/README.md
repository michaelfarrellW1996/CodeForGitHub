# Using an array to create non uniform distibution and a probability factor.

This introduces the walker class again to show how probability can be swayed. In the step function of the walker class an array is created. This consists of a simple array of numbers. We can see that out of all the numbers in the array the number 2 only appears once. This makes it far more likely that either the number 1 or 3 will be chosen then the random number of the arrray is chosen. 

```js
    this.step = function () {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;


        var index = floor(random(probArray.length));
        var r = probArray[index];


        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
```
