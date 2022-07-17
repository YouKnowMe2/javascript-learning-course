let paragraphElement = document.querySelector('p');
function changeParagraphpText(){
        paragraphElement.textContent='Clicked';
}
paragraphElement.addEventListener('click',changeParagraphpText);



let inputElement = document.querySelector('input');
function detectText(){
    console.log(inputElement.value);
}
inputElement.addEventListener('input',detectText);