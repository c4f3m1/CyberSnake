import Coordinates from './coordinates.js';
import Board from './board.js';
import Snake from './snake.js';
import Gameboard from './gameboard.js';

var directions = ['l','u','r','d'];
var direction = directions[0];

const piece = {
    BASIC: {
        POS: 0,
        COLOR: "rgb(37, 150, 190)",
        I_VEL: 0,
        I_SIZ: 1,
    },
    ADVANCED: {
        POS: 0,
        COLOR: "rgb(226, 135, 67)",
        I_VEL: 20,
        I_SIZ: 2,
    },
    HARDCORE: {
        POS: 0,
        COLOR: "rgb(33, 19, 13)",
        I_VEL: 40,
        I_SIZ: 5,
    }
}

function genCoords(ctx, w, h){

    // Quantity elements
    let cantX = Math.round(w / 15);
    let cantY = Math.round((h * cantX) / w);
    let cantElements = cantX * cantY;

    // Incremental position
    let initx = w / cantX;
    let inity = h / cantY;

    // Elements distance
    let dist = 2;

    // Initial position
    let x = dist;
    let y = dist;

    // Elements Size
    let width = initx - dist;
    let height = inity - dist;

    let coords;
    let coordinates = [];

    for (let i = 0; i < cantY; i++){
        for (let j = 0; j < cantX; j++){

            x = Math.round(x * 100) / 100;
            y = Math.round(y * 100) / 100;

            coords = new Coordinates(x, y);
            coordinates.push(coords);

            x = x + initx;
        }
        y = y + inity;
        x = dist;
    }

    return coordinates;

}

function genCanvas(w, h) {

    let canvas = document.getElementById("canvas");

    canvas.width = w;
    canvas.height = h;

    return canvas.getContext("2d");
}

document.onkeydown = function(e) {

    // ['l','u','r','d']
    switch (e.keyCode) {
        case 37: // LEFT
            if (direction != directions[2]) direction = directions[0];
            break;
        case 38: // UP
            if (direction != directions[3]) direction = directions[1];
            break;
        case 39: // RIGHT
            if (direction != directions[0]) direction = directions[2];
            break;
        case 40: // DOWN
            if (direction != directions[1]) direction = directions[3];
            break;
    }
};

window.onscroll = function () {

    window.scrollTo(0, 0);
};

async function movement(gameboard){

    let actualPos = gameboard.snake.pos[gameboard.snake.pos.length - 1];
    let nextPos;

    switch (direction) {
        case directions[0]: // Izquierda

            if (actualPos > 0){
                if (gameboard.board.coordinates[actualPos - 1].y != gameboard.board.coordinates[actualPos].y){
                    nextPos = actualPos + gameboard.board.cantX - 1;
                }else{
                    nextPos = actualPos - 1;
                }
            }else{
                nextPos = gameboard.board.cantX - 1;
            }
            break;

        case directions[1]: // Arriba

            if (actualPos - gameboard.board.cantX < 0){
                nextPos = gameboard.board.cantXY - (gameboard.board.cantX - actualPos);
            }else{
                nextPos = actualPos - gameboard.board.cantX;
            }
            break;

        case directions[2]: // Derecha

            if(actualPos < gameboard.board.cantXY - 1){
                if (gameboard.board.coordinates[actualPos + 1].y != gameboard.board.coordinates[actualPos].y){
                    nextPos = actualPos - gameboard.board.cantX + 1;
                }else{
                    nextPos = actualPos + 1;
                }
            }else{
                nextPos = gameboard.board.cantXY - gameboard.board.cantX;
            }
            break;

        case directions[3]: // Abajo

            if (actualPos + gameboard.board.cantX > gameboard.board.cantXY - 1){
                nextPos = gameboard.board.cantX - (gameboard.board.cantXY - actualPos);
            }else{
                nextPos =  actualPos + gameboard.board.cantX;
            }
            break;
        }

        gameboard.snake.addPos(nextPos);
        gameboard.print();
        //gameboard.snake.delPos();

        for(let i = 0; i < gameboard.piece.length; i++){

            if (gameboard.piece[i].POS !=  nextPos){
                gameboard.snake.delPos();
                break;
            }
        }
}

function putPiece(gameboard){

    let pos = gameboard.board.randPos();

    gameboard.addPiece(pos, piece.BASIC);
}

function sleepPromise(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepSnake(gameboard){

    while(true){
        movement(gameboard);
        await sleepPromise(gameboard.snake.velocity);
    }
}

async function sleepPiece(gameboard){

    while(true){
        putPiece(gameboard);
        await sleepPromise(5000);
    }
}

window.onload = function () {

    let ctx;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let board;
    let snake;
    let gameboard;
    let coords;
    let coord;

    ctx = genCanvas(width, height);

    board = new Board(ctx, width, height, genCoords(ctx, width, height));
    board.printCoords();

    snake = new Snake(board.randPos());
    gameboard = new Gameboard(board, snake);

    console.log(gameboard);

    sleepSnake(gameboard);
    sleepPiece(gameboard);
}
