// Clear the console to hide the execute command
process.stdout.write('\x1Bc');


// ###########################################
//              Input listener
// ###########################################
require('./input-listener.js');


// ###########################################
//              Draw Function
// ###########################################
const snake = require('./snake');

// Start the game
snake.mainLoop();

