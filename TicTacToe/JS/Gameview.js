export default  class GameView{

    constructor(){
        console.log('init game view');
        let rightContext = '';
    }

    updateBoard(game){
        this.updateTurn(game);

        const winningCombination  = game.findWinningCombination();
       for(let i = 0 ; i < game.board.length ; i++){

          const tile = document.querySelector(`.board-tile[data-index = "${i}"]`);

          tile.classList.remove("tile-winner");
          
         tile.textContent = game.board[i];

         let tileType = game.board[i] === 'X' ? 'tile-x' : 'tile-o';
          
         tile.innerHTML = `<span class = ${tileType}> ${game.board[i] ? game.board[i] : ''}</span>`;

         
        if(winningCombination && winningCombination.includes(i)){
           tile.classList.add('tile-winner');
         }
          
       }


      
    }


    updateTurn(game){
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");

        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if(game.turn === "X"){
            playerX.classList.add("active");
        }else{
            playerO.classList.add("active");
        }


    }

    hideBoard(){
        
        const game = document.querySelector(".game");
         game.classList.remove('appear');
         game.classList.add('hide');
        
    }

    displayWinner(game){
        const winner = document.querySelector(".displayWinner");
        winner.classList.remove('hideWinner');
        winner.innerHTML = `<span class = "winner">player ${game.turn} won </span>`;
    }

    displayBoard(){

        const game = document.querySelector(".game");
        const winner = document.querySelector(".displayWinner");
        game.classList.remove('hide');
        game.classList.add('appear');
        winner.classList.add('hideWinner');
        winner.classList.remove('winner');
    }
}