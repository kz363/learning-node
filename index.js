const remote = require('electron').remote; // like csinterface?
const main = remote.require('./main.js'); // gives this file everything exported from main.js

let button = document.createElement('button');
button.textContent = 'Open Window';
button.addEventListener('click', () => {
  main.openWindow();
});

document.body.appendChild(button);

function greet(greeting = 'Hello world') {
  console.log(greeting);
}

greet();