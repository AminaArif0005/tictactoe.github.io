import Game from "./Game.js"
import GameView from "./Gameview.js"

let game = new Game();
let gameView =  new GameView();


document.querySelector(".restart").addEventListener("click",()=>{
    onClickRestart();
})
let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click",()=> {
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(i){
    //make a move
    game.makeMove(i);
    //update board
    gameView.updateBoard(game);
    //hide board if game ends
    if(game.endOfGame()){
        gameView.hideBoard();
        gameView.displayWinner(game);
     }

}

function onClickRestart(){
 
    game = new Game();
    gameView.updateBoard(game);
    gameView.displayBoard();
    
}

gameView.updateBoard(game);



