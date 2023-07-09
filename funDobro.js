//O algorítmo possui uma função que recebe um número inteiro e imprime o dobro.

const prompt = require("prompt-sync")()

/*Variáveis*/
let numero, dobro;

/*Entrada de dados*/
numero = parseInt(prompt("Digite um número inteiro: "));

/*Processamento de dados*/
function vezes2(x){
    dobro = numero*2;
}
vezes2(numero);

/*Saída de dados*/
console.log('O dobro do número digitado é ' + dobro + '.');