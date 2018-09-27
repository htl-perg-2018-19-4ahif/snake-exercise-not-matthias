// Renderer instance
const renderer = require('./renderer')

const screenWidth = 200;
const screenHeight = 80;

const snakeX = screenWidth / 2;
const snakeY = screenHeight / 2;

module.exports.directionX = 0;
module.exports.directionY = 0;


// Draw Borders
renderer.setCursorColor(1);
renderer.drawRect(0, 0, screenWidth, screenHeight);
renderer.resetBackground();



module.exports.drawFunction = () => {
    // Draw the snake
    drawSnake();
}

drawSnake = () => {
    
}

moveSnake = () => {
    snakeX += directionX;
    snakeY += directionY;
}