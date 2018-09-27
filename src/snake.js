// Renderer instance
const renderer = require('./renderer')

const screenHeight = 200;
const screenWidth = 80;

// Draw Borders
renderer.setCursorColor(1);
renderer.drawRect(0, 0, screenHeight, screenWidth);
renderer.resetBackground();


// Export the direction so other files can use it
// 0    =   Left
// 1    =   Up
// 2    =   Right
// 3    =   Down
module.exports.direction = 0;


module.exports.drawFunction = () => {
    // Draw the snake
    drawSnake();
}


drawSnake = () => {

}