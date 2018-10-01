// Renderer instance
const renderer = require("./renderer");

// Sizes
const screenWidth = 40;
const screenHeight = 20;

const playWidth = screenWidth - 2;
const playHeight = screenHeight - 2;

// Game stuff
let snake = [{
    x: screenWidth / 2,
    y: screenHeight / 2
}];

let appleX;
let appleY;

let snakeSize = 1;

// Statistics
module.exports.snakeSpeed = 3;
let points = 0;
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

    // Only move and remove when in game
    if (!gameOver) {
        removeSnake();
        moveSnake();
        checkApple();
    }

    // Check if outside, if not draw
    if ((gameOver = checkBorders())) {
        renderer.setCursorColor(1); // Red

        let middleOffset = Math.floor("Game Over".length / 2);
        renderer.drawText(screenWidth / 2 - middleOffset, screenHeight / 2, "Game Over");
    } else {
        drawSnake();
    }

    // Print statistic
    let score = "Score: " + points;
    renderer.drawText(0, screenHeight + 2, score);

    let speed = "Speed: " + this.snakeSpeed;
    renderer.drawText(0, screenHeight + 3, speed);
};


checkBorders = () => {
    // Left and Right Vertical Border
    if (snake[0].x < 2 || snake[0].x >= screenWidth) {
        return true;
    }

    // Top and Bottom Horizontal Border
    if (snake[0].y < 2 || snake[0].y >= screenHeight) {
        return true;
    }
};

checkApple = () => {
    if (snake[0].x == appleX && snake[0].y == appleY) {
        this.snakeSpeed += 1;
        points += 1;
        snakeSize += 1;

        drawApple();
    }
}

removeSnake = () => {
    let tail;

    if (snake.length > snakeSize)
        tail = snake.pop();
    else
        tail = snake[0];

    renderer.setCursorColor(2); // White
    renderer.drawPoint(tail.x, tail.y);
};

moveSnake = () => {
    snake[0].x += this.directionX;
    snake[0].y += this.directionY;
};

drawSnake = () => {
    // renderer.setCursorColor(4); // Yellow
    renderer.resetBackground();
    renderer.drawPoint(snake[0].x, snake[0].y);
};

drawApple = () => {
    appleX = getRandomNumber(2, playWidth);
    appleY = getRandomNumber(2, playHeight);

    renderer.setCursorColor(3); // Green
    renderer.drawPoint(appleX, appleY);
};

getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


// Draw an apple
drawApple();