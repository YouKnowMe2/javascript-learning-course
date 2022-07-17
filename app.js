let wordName = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = wordName.maxLength;
function numberReamin(event)
{

    let enteredtext = event.target.value;
    let enteredTextLength = enteredtext.length;
    let remainingCharacters = maxAllowedChars -enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;
    if(remainingCharacters<=10){
       remainingCharsElement.className = 'warning';
       wordName.className = 'warning';
    }else{
        remainingCharsElement.className = '';
        wordName.className = '';
    }

}

wordName.addEventListener('input',numberReamin);
