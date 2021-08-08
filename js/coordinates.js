class Coordinates {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    /* Getters */
    get coords(){
        return [x, y];
    }

    /* Methods */
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

export default Coordinates
