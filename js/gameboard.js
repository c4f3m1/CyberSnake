import Board from './board.js';
import Snake from './snake.js';


class Gameboard {

    constructor(board, snake){
        this.board = board;
        this.snake = snake;
        this.piece = [];
    }


    print(){

        let elemWidth = this.board.elemWidth;
        let elemHeight = this.board.elemHeight;

        for (let i = 0; i < this.snake.pos.length; i++){

            let pos = this.snake.pos[i];
            let x = this.board.coordinates[pos].x;
            let y = this.board.coordinates[pos].y;

            if(i == 0){
                this.board.ctx.fillStyle = this.board.color;
            }else{
                this.board.ctx.fillStyle = this.snake.color;
            }

            this.board.ctx.fillRect (x, y, elemWidth, elemHeight);

        }
    }

    addPiece(pos, piece){

        piece.POS = pos;

        this.piece.push(piece);

        let elemWidth = this.board.elemWidth;
        let elemHeight = this.board.elemHeight;

        let x = this.board.coordinates[pos].x;
        let y = this.board.coordinates[pos].y;

        this.board.ctx.fillStyle = piece.COLOR;
        this.board.ctx.fillRect (x, y, elemWidth, elemHeight);

    }
}

export default Gameboard
