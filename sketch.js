//js with p5 library
//p5: https://p5js.org/

const blockSize = 20;

const width = 800 - (800 % blockSize);
const height = 600 - (600 % blockSize);

var snake;


function setup() {
    createCanvas(width, height);
    let p1 = createVector(4,4);
    let p2 = createVector(5,4);

    console.log(p1);
    snake = [p1 , p2];
}

function draw() {
    background(0);
    // for (let i = 0; i < height / blockSize; i++) {
    //     for (let j = 0; j < width / blockSize; j++) {
    //         noStroke();
    //         fill(20, 200, 90);
    //         drawSquare(j,i);
    //     }
    // }
    noStroke();
    fill(20, 200, 90);
    for (const index in snake) {
        let vector = snake[index];
        drawSquare(vector.x, vector.y);
    }
}

function drawSquare(x, y) {
    square(x * blockSize, y * blockSize, blockSize - 2);
}