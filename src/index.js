// Clear the console to hide the execute command
console.clear();

// Cool logo
const chalkAnimation = require('chalk-animation');
chalkAnimation.rainbow('Snake by not-matthias');


// Start our input listener
require('./input-listener.js')

// Run our draw function with x fps
const snake = require('./snake')
const FPS = 60;

setInterval(snake.drawFunction, FPS / 1000);