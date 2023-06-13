//O algorítmo recebe um número de 4 dígitos, faz a inversão e imprime o resultado.

const prompt = require("prompt-sync")();

/*Variáveis*/
let numero, numeroInvertido;

/*Entrada de dados*/
numero = parseInt(prompt('Digite um número inteiro de 4 dígitos: '));

/*Processamento de dados*/
if (numero > 999 && numero <= 9999) {
    numeroInvertido = numero.toString().split('').reverse().join('');

    /*Saída de dados*/
    console.log('A inversão do número digitado é: ' + numeroInvertido);
}else{

    /*Saída de dados*/
    console.log('Digite um número com 4 dígitos!');
}