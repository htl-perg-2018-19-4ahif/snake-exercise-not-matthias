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

let oldSpeed = snake.snakeSpeed;
let mainInterval = setInterval(snake.mainLoop, 1000 / snake.snakeSpeed);


// check if the speed has changed
setInterval(() => {
    if (oldSpeed !== snake.snakeSpeed) {
        clearInterval(mainInterval);
        mainInterval = setInterval(snake.mainLoop, 1000 / snake.snakeSpeed);
    }
}, 1000);
