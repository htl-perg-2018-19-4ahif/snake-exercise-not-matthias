// Wrapper class for rendering stuff on the screen

const ansi = require('ansi');
const cursor = ansi(process.stdout);

module.exports.hideCursor = () => {
    cursor.write('\x1B[?25l');
}

// Colors: 
// 0    =   Black
// 1    =   Red
// 2    =   White
// 3    =   Green
// 4    =   Yellow
// 5    =   Blue
module.exports.setCursorColor = (color) => {
    switch (color) {
        case 0:
            cursor.bg.black();
            break;

        case 1:
            cursor.bg.red();
            break;

        case 2:
            cursor.bg.white();
            break;

        case 3:
            cursor.bg.green();
            break;

        case 4:
            cursor.bg.yellow();
            break;

        case 5:
            cursor.bg.blue();
            break;

        case 6:
            cursor.bg.grey();
            break;
    }
}

module.exports.resetBackground = () => {
    cursor.bg.reset();
}

module.exports.drawPoint = (x, y) => {
    cursor.goto(x, y).write(' ');
}


// NOTE: see "{WorkingDirectory}/resources/DrawRect_Graphical.png" for graphical explanation
module.exports.drawRect = (x, y, lengthX, lengthY) => {

    // Top Left -> Top Right                                    =   Horizontal
    // (x | y) -> (x + lengthX | y)
    this.drawHorizontalLine(x, y, lengthX);

    // Top Left -> Bottom Left                                  =   Vertical
    // (x | y) -> (x | y + lengthY)
    this.drawVerticalLine(x, y, lengthY);

    // Bottom Left -> Bottom Right                              =   Horizontal
    // (x | y + lengthY) -> (x + lengthX | y + lengthY)
    this.drawHorizontalLine(x, y + lengthY, lengthX);

    // Top Right -> Bottom Right                                =   Vertical
    // (x + lengthX | y) -> (x + lengthX | y + lengthY)
    this.drawVerticalLine(x + lengthX, y, lengthY);
}

module.exports.drawFilledRect = (x, y, lengthX, lengthY) => {
    for (let i = 0; i < lengthY; i++) {
        this.drawHorizontalLine(x, y + i, lengthX);
    }
}


module.exports.drawLine = (x1, y1, length) => {

    // Vertical line
    if (x1 == x2)
        this.drawVerticalLine(x1, x2, length);

    // Horizontal line
    if (y1 == y2)
        drawHorizontalLine(x1, y1, length)

    // TODO: Diagonal Line - not needed right now, maybe coming soon
}


module.exports.drawVerticalLine = (x, y, length) => {
    for (let i = 0; i <= length; i++) {
        this.drawPoint(x, y + i);
    }
}


module.exports.drawHorizontalLine = (x, y, length) => {
    for (let i = 0; i <= length; i++) {
        this.drawPoint(x + i, y);
    }
}

module.exports.drawText = (x, y, text) => {
    cursor.goto(x, y).write(text);
}