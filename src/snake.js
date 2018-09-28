// Renderer instance
const renderer = require("./renderer");

// Sizes
const screenWidth = 40;
const screenHeight = 20;

const playWidth = screenWidth - 2;
const playHeight = screenHeight - 2;

// Game stuff
let snakeX = 2; // screenWidth / 2;
let snakeY = 2; // screenHeight / 2;

let appleX;
let appleY;

let gameOver = false;

// Directions
module.exports.directionX = 1;
module.exports.directionY = 0;

renderer.hideCursor();

// Draw Borders
renderer.setCursorColor(5); // Blue
renderer.drawRect(0, 0, screenWidth, screenHeight);

// Draw filled rect inside
renderer.setCursorColor(2); // White
renderer.drawFilledRect(2, 2, playWidth - 1, playHeight);

module.exports.mainLoop = () => {
    // drawApple();

    // Only move and remove when in game
    if (!gameOver) {
        removeSnake();
        moveSnake();
    }

    // Check if outside, if not draw
    if ((gameOver = checkBorders())) {
        renderer.setCursorColor(1); // Red
        let middleOffset = Math.floor(9 / 2); // draw the text in the middle
        renderer.drawText(screenWidth / 2 - middleOffset, screenHeight / 2, "Game Over");
    } else {
        drawSnake();
    }
};

checkBorders = () => {
    // Left and Right Vertical Border
    if (snakeX < 2 || snakeX >= screenWidth) {
        return true;
    }

    // Top and Bottom Horizontal Border
    if (snakeY < 2 || snakeY >= screenHeight) {
        return true;
    }
};

removeSnake = () => {
    renderer.setCursorColor(2); // White
    renderer.drawPoint(snakeX, snakeY);
};

moveSnake = () => {
    snakeX += this.directionX;
    snakeY += this.directionY;
};

drawSnake = () => {
    // renderer.setCursorColor(4); // Yellow
    renderer.resetBackground();
    renderer.drawPoint(snakeX, snakeY);
};

drawApple = () => {
    appleX = getRandomNumber(2, screenWidth);
    appleY = getRandomNumber(2, screenHeight);

    renderer.setCursorColor(3); // Green
    renderer.drawPoint(appleX, appleY);
};

getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};