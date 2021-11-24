// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const dadoPlayer = Math.floor(Math.random() * 6) + 1;
console.log('Player: ', dadoPlayer);
const dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log('Computer: ', dadoComputer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (dadoPlayer > dadoComputer) {
    console.log('Player Win');
} else if (dadoPlayer == dadoComputer) {
    console.log('Pareggio');
} else {
    console.log('Computer Win')
}