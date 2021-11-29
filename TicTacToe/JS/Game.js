export default class Game{

    constructor(){  // functionality that will be automatically initialized
 
        console.log('initgame');
        this.turn = "X";
        this.board = new Array(9).fill(null); // fill() ES6 function to initialize the empty array with null
        console.log(this.board);
    }

    nextTurn(){ // to change the turn of the player
        if(this.turn == "X"){
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(i){

        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn; // X or O
        let winningCombination = this.findWinningCombination();
        if(!winningCombination){
            this.nextTurn();
        }
    }

    findWinningCombination(){
        const winningCombination = [
            [0,1,2], // winning combinations
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        for(const combination of winningCombination){
            const [a,b,c] = combination;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[b] === this.board[c])){
                    return combination;
            }

        }
        return null;
    }

    endOfGame(){
        let winningCombination =  this.findWinningCombination();
        if(winningCombination){
            return true;
        } else{
            return false;
        }
    }
}