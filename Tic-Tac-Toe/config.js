function openPlayerConfig(){
        playerConfigElement.style.display = 'block';
        backDropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigElement.style.display = 'none';
    backDropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const enteredPlayerName =formData.get('player_name');
    console.log(enteredPlayerName);
}