# Proof of uniform distrubtion

This sketch does not use the walker class and is proving that the random function is conforming to a uniform distribution.
We start by declaring an array and a total. 
```js
var randomCounts = [];
var total = 20;
```

In the setup function we are setting up each index of the array to be 0.
```js
for (var i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
```
In the draw the background is redrawn everytime to make sure the old bars are gotten rid of. A variable for the index is created
with a random number. Each time through the draw function a new index is selected from the total and it is increased by one each time. 
A rectangle is then drawn each time. As seen when running the script all the rectangles move up the canvas at a pretty equal rate. One
doesn't get ahead of the rest by too much. This proves that the random function is using uniform distribution to pick the numbers. 
This ensures all the numbers are picked equally. 
```js
 var index = floor(random(total));
    randomCounts[index]++;


    stroke(0);
    strokeWeight(2);
    fill(145, 86, 45);

    var w = width / randomCounts.length;

    for (var x = 0; x < randomCounts.length; x++) {
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
```
