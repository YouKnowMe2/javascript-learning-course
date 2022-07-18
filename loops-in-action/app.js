//Display User Data

const loggedInUser = {
    name: 'Abir',
    age: 21,
    isAdmin: true
};


let displayUser =  document.querySelector('#user-data button');


  function displayData(){
    const outputDataElement =  document.getElementById('output-user-data');
    for(const info in loggedInUser){
       const newUserDataListElement = document.createElement('li');
       const outputText = info.toUpperCase() + ' : ' + loggedInUser[info];
       newUserDataListElement.textContent = outputText;
       outputDataElement.append(newUserDataListElement);

    }
}
displayUser.addEventListener('click',displayData);



// Statics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){

    return Math.floor(Math.random()*5) +1;
}

function deriveNumberOfDiceRolls(){
    const targetNumber = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumber.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls =0;
    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollsListElement = document.createElement('li');
        const outputtext = 'Roll' + numberOfRolls + ':' + rolledNumber;
        diceRollsListElement.append(newRollsListElement);
        diceRollsListElement.append(outputtext);
        /*if(rolledNumber == enteredNumber){
            hasRolledTargetNumbr = true;
        }*/
        hasRolledTargetNumber = rolledNumber == enteredNumber;

    }
    const outputTotalRolls = document.getElementById('output-total-rolls');
    const outputTarget = document.getElementById('output-target-number');

    outputTarget.textContent = enteredNumber;
    outputTotalRolls.textContent=numberOfRolls;
}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);