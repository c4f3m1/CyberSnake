import Coordinates from './coordinates.js';
import Board from './board.js';
import Snake from './snake.js';
import Gameboard from './gameboard.js';

var directions = ['l','u','r','d'];
var direction;

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

    let pos;

    switch (e.keyCode) {
        case 37:
            pos = 0;
            break;
        case 38:
            pos = 1;
            break;
        case 39:
            pos = 2;
            break;
        case 40:
            pos = 3;
            break;
    }

    direction = directions[pos];
};

window.onscroll = function () {

    window.scrollTo(0, 0);
};

window.onload = function () {

    let ctx;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let coordinates;
    let coordinatesSnake = [];
    let board;
    let snake;
    let gameboard;

    ctx = genCanvas(width, height);
    coordinates = genCoords(ctx, width, height);

    board = new Board(ctx, width, height, coordinates);
    board.printCoords();

    coordinatesSnake.push(board.randCoords());

    snake = new Snake(coordinatesSnake, 1000);

    gameboard = new Gameboard(board, snake);
    console.log("Gameboard -> ");
    console.log(gameboard);
    gameboard.start();

}
