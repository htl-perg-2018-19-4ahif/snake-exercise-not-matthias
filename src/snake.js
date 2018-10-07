const renderer = require('./renderer');
const directions = require('./directions');
const colors = require('./colors');

// Sizes
const SCREEN_SIZE = {
    x: 0,
    y: 0,
    width: 40,
    height: 20
};

const PLAY_SIZE = {
    x: 2,
    y: 2,
    width: SCREEN_SIZE.width - 2,
    height: SCREEN_SIZE.height - 2
};

// Game stuff
let snake = [{
    x: Math.floor(SCREEN_SIZE.width / 2),
    y: Math.floor(SCREEN_SIZE.height / 2)
}];

let snakeSize = 1;

let applePosition = {
    x: 0,
    y: 0
};


// Settings
module.exports.snakeSpeed = 3;
module.exports.direction = directions.DIRECTION_RIGHT;

let points = 0;
let gameOver = false;


// Render stuff
renderer.hideCursor();

// Draw Borders
renderer.setCursorColor(colors.GREY);
renderer.drawRect(SCREEN_SIZE.x, SCREEN_SIZE.y, SCREEN_SIZE.width, SCREEN_SIZE.height);

// Draw filled rect inside
renderer.setCursorColor(colors.WHITE); // White
renderer.drawFilledRect(PLAY_SIZE.x, PLAY_SIZE.y, PLAY_SIZE.width - 1, PLAY_SIZE.height);


module.exports.mainLoop = () => {

    if (!gameOver && !checkApple()) {
        removeSnake();
        moveSnake();
    }

    // Check some stuff
    if ((gameOver = checkBorders()) || (gameOver = checkSnake())) {
        renderer.setCursorColor(colors.RED);

        let middleOffset = Math.floor('Game Over'.length / 2);
        renderer.drawText(SCREEN_SIZE.width / 2 - middleOffset, SCREEN_SIZE.height / 2, 'Game Over');
        renderer.resetBackground();
    } else {
        drawSnake();
    }

    renderer.resetBackground();

    let score = 'Score: ' + points;
    renderer.drawText(SCREEN_SIZE.x, SCREEN_SIZE.height + 2, score);

    let speed = 'Speed: ' + this.snakeSpeed;
    renderer.drawText(SCREEN_SIZE.x, SCREEN_SIZE.height + 3, speed);
};


const checkBorders = () => {
    // Left and Right Vertical Border
    if (snake[0].x < 2 || snake[0].x >= SCREEN_SIZE.width) {
        return true;
    }

    // Top and Bottom Horizontal Border
    if (snake[0].y < 2 || snake[0].y >= SCREEN_SIZE.height) {
        return true;
    }
};

const checkApple = () => {
    if (snake[0].x == applePosition.x && snake[0].y == applePosition.y) {
        this.snakeSpeed += 1;
        points += 1;
        this.snakeSize += 1;

        // add new head
        snake.unshift({
            x: snake[0].x + this.direction.x,
            y: snake[0].y + this.direction.y
        });

        drawApple();
        return true;
    }
    return false;
};

const checkSnake = () => {
    for (let i = 1; i < snake.length; i++) {
        const position = snake[i];

        // Collided?
        if (snake[0].x == position.x && snake[0].y == position.y)
            return true;
    }

    return false;
};

const removeSnake = () => {
    let tail = snake[snake.length - 1];

    renderer.setCursorColor(colors.WHITE);
    renderer.drawPoint(tail.x, tail.y);
};

const moveSnake = () => {
    // add new head
    snake.unshift({
        x: snake[0].x + this.direction.x,
        y: snake[0].y + this.direction.y
    });

    // remove the tail
    if (snake.length > 1)
        snake.pop();
};

const drawSnake = () => {
    renderer.setCursorColor(colors.YELLOW);
    renderer.drawPoint(snake[0].x, snake[0].y);
};

const drawApple = () => {
    let validPoint = false;

    do {
        applePosition.x = getRandomNumber(2, PLAY_SIZE.width);
        applePosition.y = getRandomNumber(2, PLAY_SIZE.height);

        // check apple collision
        for (const position of snake) {
            if (position.x != applePosition.x && position.y != applePosition.y)
                validPoint = true;
        }
    } while (!validPoint);

    renderer.setCursorColor(colors.GREEN); // Green
    renderer.drawPoint(applePosition.x, applePosition.y);
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


// Draw an apple
drawApple();