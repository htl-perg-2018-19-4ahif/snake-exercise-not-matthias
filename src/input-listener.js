const keypress = require('keypress');
const snake = require('./snake');
const directions = require('./directions');


// List for keyboard inputs
keypress(process.stdin);


// Listen for keypresss
process.stdin.on('keypress', function (ch, key) {

    // Type         KeyCode     Name
    // ArrowLeft    = 37        = left
    // ArrowUp      = 38        = up   
    // ArrowRight   = 39        = right 
    // ArrowDown    = 40        = down

    switch (key.name) {
        case 'left':
            snake.direction = directions.DIRECTION_LEFT;
            break;

        case 'up':
            snake.direction = directions.DIRECTION_UP;
            break;

        case 'right':
            snake.direction = directions.DIRECTION_RIGHT;
            break;

        case 'down':
            snake.direction = directions.DIRECTION_DOWN;
            break;

        case 'c':
            if (key.ctrl)
                process.exit(0);
            else
                break;
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();