// Clear the console to hide the execute command
process.stdout.write('\x1Bc');


// Cool logo
const chalkAnimation = require('chalk-animation');
// chalkAnimation.rainbow('Snake by not-matthias');


// ###########################################
//              Input listener
// ###########################################
require('./input-listener.js')


// ###########################################
//              Draw Function
// ###########################################
const snake = require('./snake')
const snakeSpeed = 3;

setInterval(snake.drawFunction, 1000 / snakeSpeed);