function resetGame(){
    activePlayer =0;
    currentRound =0;
    gameOverElement.firstElementChild.innerHTML = 'You won <span id="winner-name">Player Name</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameData[i][j] = 0;
            const gameBoardElement =gameBoard.children[gameBoardIndex];
             gameBoardElement.textContent= '';
             gameBoardElement.classList.remove('disabled');
             gameBoardIndex++;

        }
    }

}

function  startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set name first');
        return;
    }
    resetGame();
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if (activePlayer === 0){
        activePlayer =1;
    }else{
        activePlayer =0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
    const selectedField = event.target;
    const selectedColoum = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;

    if(gameData[selectedRow][selectedColoum] >0){
        alert('Please select an empty field');
        return;
    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColoum] = activePlayer+1;
    const checkWinnerId=checkForGameOver();
    console.log(checkWinnerId);
    if(checkWinnerId !== 0){
        endGame(checkWinnerId);
    }
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    for(let i=0;i<3;i++){
        //checking rows
        if(gameData[i][0] >0 &&
            gameData[i][0] ===  gameData[i][1] &&
            gameData[i][1] === gameData[i][2]){
            return gameData[i][0];
        }
    }

    for(let i=0;i<3;i++){
        //checking cols
        if(gameData[0][i] >0 &&
            gameData[0][i] ===  gameData[1][i] &&
            gameData[0][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }

    //Diagonal from top left to bottom right
    if(gameData[0][0] === gameData[1][1] && gameData[1][1]===gameData[2][2] ){
        return gameData[0][0];
    }
    //Diagonal from bottom left to top right
    if(gameData[2][0] === gameData[1][1] && gameData[1][1]===gameData[0][2] ){
        return gameData[2][0];
    }
    if(currentRound === 9){
        return  -1;
    }

    return  0;

}

function endGame(winnerId){
    gameOverElement.style.display = 'block';
    if(winnerId>0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId-1].name;
    }else{
        gameOverElement.firstElementChild.textContent = 'it is a draw';
    }
}