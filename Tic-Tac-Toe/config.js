function openPlayerConfig(){
        playerConfigElement.style.display = 'block';
        backDropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const enteredPlayerName =formData.get('player_name').trim();

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error')
        errorElement.textContent = 'Please Enter a Valid Name';
        return;
    }else{

    }
}