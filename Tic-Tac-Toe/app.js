const playerConfigElement = document.getElementById('config-overlays');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorElement = document.getElementById('config-error');

const editPlayer1Element = document.getElementById('edit-player-1');
const editPlayer2Element = document.getElementById('edit-player-2');

const cancelConfigElement = document.getElementById('cancel-config');


editPlayer1Element.addEventListener('click',openPlayerConfig);
editPlayer2Element.addEventListener('click',openPlayerConfig);

cancelConfigElement.addEventListener('click',closePlayerConfig);
backDropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);