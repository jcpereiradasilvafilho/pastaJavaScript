//O algoritmo recebe um número, verifica se pertence à sequência de Fibonacci e imprime uma mensagem de retorno.

const prompt = require("prompt-sync")();
let numero1=0,numero2=1,numero3,numeroDoUsuario;

numeroDoUsuario = parseInt(prompt("Informe um número para ver se pertence à sequência de Fibonacci: "));

function calculaFibonacci(numeroDoUsuario) {
    if (numeroDoUsuario === 0 || numeroDoUsuario === 1) {
        return true;
    }

    while (true) {
        numero3 = numero1 + numero2;
        if (numero3 === numeroDoUsuario) {
            return true;
        } else if (numero3 > numeroDoUsuario) {
            return false;
        }
        numero1 = numero2;
        numero2 = numero3;
    }
}

if (calculaFibonacci(numeroDoUsuario)) {
    console.log('O '+numeroDoUsuario+' pertence à sequência de Fibonacci.');
} else {
    console.log('O '+numeroDoUsuario+' não pertence à sequência de Fibonacci.');
}