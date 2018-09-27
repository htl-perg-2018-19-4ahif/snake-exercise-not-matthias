const keypress = require('keypress');
const snake = require('./snake')


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
            snake.directionX = -1;
            snake.directionY = 0;
            break;

        case 'up':
            snake.directionX = 0;
            snake.directionY = -1;
            break;

        case 'right':
            snake.directionX = 1;
            snake.directionY = 0;
            break;

        case 'down':
            snake.directionX = 0;
            snake.directionY = 1;
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