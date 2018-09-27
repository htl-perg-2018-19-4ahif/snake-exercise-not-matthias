// Renderer instance
const renderer = require('./renderer')

const screenWidth = 200;
const screenHeight = 80;

// TODO: snake as array
let snakeX = screenWidth / 2;
let snakeY = screenHeight / 2;

module.exports.directionX = -1;
module.exports.directionY = 0;


// Draw Borders
renderer.setCursorColor(1);
renderer.drawRect(0, 0, screenWidth, screenHeight);
renderer.resetBackground();



module.exports.drawFunction = () => {
    // Draw the snake
    drawSnake();
    moveSnake();
}

drawSnake = () => {
    renderer.drawPoint(snakeX, snakeY);
}

moveSnake = () => {
    snakeX += this.directionX;
    snakeY += this.directionY;
}