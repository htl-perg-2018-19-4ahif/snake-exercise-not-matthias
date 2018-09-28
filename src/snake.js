// Renderer instance
const renderer = require('./renderer')

// Sizes
const screenWidth = 40;
const screenHeight = 20;

const playWidth = screenWidth - 3;
const playHeight = screenHeight - 2;


// Game stuff
let snakeX = 2; // screenWidth / 2;
let snakeY = 2; // screenHeight / 2;

let appleX;
let appleY;


// Directions
module.exports.directionX = 1;
module.exports.directionY = 0;

renderer.hideCursor();


// Draw Borders
renderer.setCursorColor(5); // Blue
renderer.drawRect(0, 0, screenWidth, screenHeight);

// Draw filled rect inside
renderer.setCursorColor(2); // White
renderer.drawFilledRect(2, 2, screenWidth - 3, screenHeight - 2);



module.exports.mainLoop = () => {
    // drawApple();
    removeSnake();
    // drawSnake();
    moveSnake();

    checkBorders();
}


checkBorders = () => {
    // Check if the snake is outside the borders

    // Left and Right Vertical Border
    if (snakeX < 1 || snakeX >= playWidth) {
        console.log("outside left or right");
        renderer.setCursorColor(1);
        renderer.drawPoint(19, 10)
    }

    // Top and Bottom Horizontal Border
    if (snakeY < 1 || snakeY >= playHeight) {
        renderer.setCursorColor(4);
        renderer.drawPoint(20, 10)
        console.log("outside top or bottom");
    }

}

removeSnake = () => {
    renderer.setCursorColor(2); // White
    renderer.drawPoint(snakeX, snakeY);
}

moveSnake = () => {
    snakeX += this.directionX;
    snakeY += this.directionY;
}

drawSnake = () => {
    // renderer.setCursorColor(4); // Yellow
    renderer.resetBackground();
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