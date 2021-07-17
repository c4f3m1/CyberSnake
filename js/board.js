import Position from './position.js';

class Board {

    constructor(){
        this.positions = [];
    }

    get board(){
        return this.positions;
    }

    addPos(position){
        this.positions.push(position);
    }
}

export default Board
