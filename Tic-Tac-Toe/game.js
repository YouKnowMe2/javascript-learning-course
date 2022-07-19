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
    console.log(gameData);
    switchPlayer();
    //finding the clicked field
}