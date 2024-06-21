let numeroSecreto = generateNumber();
let intentos = 1;

function insertText(selector, message) {
  let element = document.querySelector(selector);
  element.innerHTML = message;
}

insertText('h1', 'Juego del numero secreto');
insertText('p', 'Ingrese un numero del 1 al 10');

function generateNumber() {
  let min = 1;
  let max = 11;

  return parseInt(Math.random() * (max - min) + min);
}

const playGame = () => {
  let numUsuario = parseInt(document.getElementById('numberUser').value);

  if (numUsuario == numeroSecreto) {
    insertText(
      'p',
      `acertaste el numero en ${intentos} ${
        intentos === 1 ? 'Intendo' : 'Intentos'
      } `,
    );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if (numUsuario > numeroSecreto) {
    insertText('p', `Es menor `);
    clean();
    intentos++;
  } else if (numUsuario < numeroSecreto) {
    insertText('p', `Es mayor `);
    clean();
    intentos++;
  }
};

function resetGame() {
  insertText('p', 'Ingrese un numero del 1 al 10');
  clean();
  intentos = 1;
  numeroSecreto = generateNumber();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function clean() {
  document.querySelector('#numberUser').value = '';
}
