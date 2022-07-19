const playerConfigElement = document.getElementById('config-overlays');
const backDropElement = document.getElementById('backdrop');

const editPlayer1Element = document.getElementById('edit-player-1');
const editPlayer2Element = document.getElementById('edit-player-2');

const cancelConfigElement = document.getElementById('PlayerConfigElement');


editPlayer1Element.addEventListener('click',openPlayerConfig);
editPlayer2Element.addEventListener('click',openPlayerConfig);

playerConfigElement.addEventListener('click',closePlayerConfig);
backDropElement.addEventListener('click',closePlayerConfig);
