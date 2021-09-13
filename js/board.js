import Coordinates from './coordinates.js';

class Board {

    constructor(ctx, width, height, coordinates){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.cantX = Math.round(width / 15);
        this.cantY = Math.round((height * this.cantX) / width);
        this.cantXY = this.cantX * this.cantY;
        this.initx = width / this.cantX;
        this.inity = height / this.cantY;
        this.dist = 2;
        this.elemWidth = this.initx - this.dist;
        this.elemHeight = this.inity - this.dist;
        this.coordinates = coordinates;
        this.color = "rgb(187, 23, 45)";

    }


    get board(){
        return this.coordinates;
    }

    posXCoord(pos){

        return this.coordinates[pos].x;
    }

    posYCoord(pos){

        return this.coordinates[pos].y;
    }

    randPos() {

        let min = 0;
        let max = this.coordinates.length;
        let posId = Math.floor((Math.random() * (max - min + 1)) + min);

        return posId;
    }

    printCoords(){

        this.ctx.fillStyle = this.color;

        // Initial position
        let x = this.dist;
        let y = this.dist;

        for (let i = 0; i < this.cantY; i++){
            for (let j = 0; j < this.cantX; j++){

                x = Math.round(x * 100) / 100;
                y = Math.round(y * 100) / 100;

                this.ctx.fillRect (x, y, this.elemWidth, this.elemHeight);
                x = x + this.initx;
            }
            y = y + this.inity;
            x = this.dist;
        }
    }

    addPos(coordinates){
        this.coordinates.push(coordinates);
    }
}

export default Board
