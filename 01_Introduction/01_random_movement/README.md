# Random Walker with 4 directions

In this file we are going ot introduce the concept of a walker class. Whne the step function gets called it selects a number at random and based on the result of this number sets a direction. 

The script has two main funtions. These being setop() and draw(). The difference between these two funtions is the setup funtion is only ruun once at the beginning while the draw funtion is contiually refreshed.
 
 ```js
 var walker;
 
 function setup() {
    createCanvas(500,500);
    background(127);
    walker = new Walker();
 }
 
 function draw() {
    walker.render();
    walker.step();
    }
 ```
There are to two variables set up within the walker class. these are x and y. They will be the starting coordinates of the walker and determin where on the screen it willl be placed. In this script we will set them to be directly center of the canvas which is half the height and half the width. Upon rendering the walker is drawn at these coordinates.
 
```js
 function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```
Within the sstep funtion a random number is selcted between 0 and 4. The floor function is there to remove any decimple points without ronding the number itself. 
Using if and else statements we can then decide whihc way the walker moves based on the random number that was selected. For example if the number is 3 then the y coordinate changes by minus one. 

The walkers position is also constrained within the canvas itslf.
  
```js
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
         } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
         
         this.x = constrain(this.x,0,width);
         this.y = constrain(this,y,o,height);
     }
 }
```      
         
         
