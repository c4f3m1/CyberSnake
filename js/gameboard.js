import Board from './board.js';
import Snake from './snake.js';

class Gameboard {

    constructor(board, snake){
        this.board = board;
        this.snake = snake;
    }

    start(){

        let x = this.snake.coordinates[0].x;
        let y = this.snake.coordinates[0].y;
        let elemWidth = this.board.elemWidth;
        let elemHeight = this.board.elemHeight;

        this.board.ctx.fillStyle = this.snake.colour;
        this.board.ctx.fillRect (x, y, elemWidth, elemHeight);

        var myVar = setInterval(
            function(){


                //ctx.fillRect (board.positions[pos++].x, board.positions[pos+2].y, width, height);
                //ctx.fillRect (board.positions[pos].x, y, width, height);
            }, this.snake.velocity);

    }

}

export default Gameboard
