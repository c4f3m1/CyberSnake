import Coordinates from './coordinates.js';

class Snake {

    constructor(coordinates, velocity){
        this.coordinates = coordinates;
        this.velocity = velocity;
        this.colour = "rgb(16, 133, 26)";
    }
    
    addPos(coordinates){
        this.coordinates.push(coordinates);
    }

}

export default Snake
