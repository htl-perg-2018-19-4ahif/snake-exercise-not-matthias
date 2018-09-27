// Renderer instance
const renderer = require('./renderer')

const screenWidth = 80;
const screenHeight = 50;

// TODO: snake as array
let snakeX = screenWidth / 2;
let snakeY = screenHeight / 2;

module.exports.directionX = -1;
module.exports.directionY = 0;


// Draw Borders
renderer.setCursorColor(5);
renderer.drawRect(0, 0, screenWidth, screenHeight);

renderer.setCursorColor(2);
renderer.drawFilledRect(2, 2, screenWidth - 3, screenHeight - 2);
renderer.resetBackground();


module.exports.drawFunction = () => {
    removeSnake();
    moveSnake();
    drawSnake();
}

removeSnake = () => {
    renderer.setCursorColor(2);
    renderer.drawPoint(snakeX, snakeY);
}

moveSnake = () => {
    snakeX += this.directionX;
    snakeY += this.directionY;
}

drawSnake = () => {
    renderer.setCursorColor(4);
    renderer.drawPoint(snakeX, snakeY);
}
