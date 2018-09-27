

// Start our input listener
require ('./input-listener.js')

// Start our draw callback
const snake = require('./snake')
const FPS = 60;

setInterval(snake.drawFunction, FPS / 1000);