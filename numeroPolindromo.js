//O algorítmo recebe um número, inverte e informa ao usuário se o número é políndromo ou não.

const prompt = require("prompt-sync")();

/*Variáveis*/
let numero, numeroInvertido;

/*Entrada de dados*/
numero = parseInt(prompt('Digite um número inteiro: '));

/*Processamento de dados*/
numeroInvertido = numero.toString().split('').reverse().join('');

if (numero == numeroInvertido) {

    /*Saída de dados*/
    console.log('O número digitado é políndromo, pois ', numero, ' é igual ao invertido ', numeroInvertido);
}else{

    /*Saída de dados*/
    console.log('O número digitado não é políndromo!');
}