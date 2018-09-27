const keypress = require('keypress');
const snake = require('./snake')


// list for keyboard inputs
keypress(process.stdin);


// listen for keypresss
process.stdin.on('keypress', function (ch, key) {

    // Type         KeyCode     Name
    // ArrowLeft    = 37        = left
    // ArrowUp      = 38        = up   
    // ArrowRight   = 39        = right 
    // ArrowDown    = 40        = down

    switch (key.name) {
        case 'left':
            console.log('left');
            snake.direction = 0;
            break;

        case 'up':
            console.log('up');
            snake.direction = 1;
            break;

        case 'right':
            console.log('right');
            snake.direction = 2;
            break;

        case 'down':
            console.log('down');
            snake.direction = 3;
            break;

        case 'c':
            if (key.ctrl)
                process.exit(0);
            else
                break;

        default:
            // Do nothing...
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();