let paragraphElement = document.querySelector('p');
function changeParagraphpText(){
        paragraphElement.textContent='Clicked';
}
paragraphElement.addEventListener('click',changeParagraphpText);

