// Clear the console to hide the execute command
process.stdout.write('\x1Bc');

// Cool logo
// const chalkAnimation = require('chalk-animation');
// const renderer = require('./renderer')
// chalkAnimation.rainbow('\n\n\t\t\t\t\t\t\t\tSnake by not-matthias');


// ###########################################
//              Input listener
// ###########################################
require('./input-listener.js')


// ###########################################
//              Draw Function
// ###########################################
const snake = require('./snake')

setInterval(snake.mainLoop, 1000 / snake.snakeSpeed);