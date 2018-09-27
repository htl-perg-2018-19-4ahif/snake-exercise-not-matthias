// Renderer instance
const renderer = require('./renderer')

const screenWidth = 40;
const screenHeight = 20;

// TODO: snake as array
let snakeX = screenWidth / 2;
let snakeY = screenHeight / 2;

let appleX;
let appleY;

module.exports.directionX = 1;
module.exports.directionY = 0;


// Draw Borders
renderer.setCursorColor(5); // Blue
renderer.drawRect(0, 0, screenWidth, screenHeight);

// Draw filled rect inside
renderer.setCursorColor(2); // White
renderer.drawFilledRect(2, 2, screenWidth - 3, screenHeight - 2);


module.exports.mainLoop = () => {
    drawApple();
    removeSnake();
    moveSnake();
    drawSnake();
}

removeSnake = () => {
    renderer.setCursorColor(2); // Black
    renderer.drawPoint(snakeX, snakeY);
}

moveSnake = () => {
    snakeX += this.directionX;
    snakeY += this.directionY;
}

drawSnake = () => {
    renderer.setCursorColor(4); // Yellow
    renderer.drawPoint(snakeX, snakeY);
}

drawApple = () => {
    appleX = getRandomNumber(2, screenWidth);
    appleY = getRandomNumber(2, screenHeight);

    renderer.setCursorColor(3); // Green
    renderer.drawPoint(appleX, appleY);
}

getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}