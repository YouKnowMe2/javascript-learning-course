function  startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set name first');
        return;
    }
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