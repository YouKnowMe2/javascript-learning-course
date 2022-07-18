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
