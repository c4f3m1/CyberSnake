class Snake {

    constructor(pos){
        this.pos = [pos];
        this.velocity = 40;
        this.color = "rgb(16, 133, 26)";
    }

    colisionSnake(){

        let count;
        for (let i = 0; i < this.pos.length; i++){
            count = 0;
            for (let j = 0; j < this.pos.length; j++){
                if (this.pos[i] == this.pos[j]){
                    count++;
                }
                if (count > 1){
                    alert("GAMEOVER PERRO");
                }
            }
        }
    }

    addPos(pos){
        this.pos.push(pos);
        this.colisionSnake();
    }

    delPos(){
        this.pos.shift();
    }
}

export default Snake
