//O algorítmo recebe um número, calcula a fim de saber se é um número perfeito e imprime o resultado.

const prompt = require("prompt-sync")()

/*Variáveis*/
let numero, soma=0, i;

/*Entrada de dados*/
numero = parseInt(prompt("Digite um número inteiro: "));

/*Processamento de dados*/
for (i = 1; i < numero; i++) {
    if (numero % i == 0){
        soma += i;
    }
}

if (soma == numero) {

    /*Saída de dados*/
    console.log('O número ' + numero + ' é um perfeito, pois sua soma de todos os seus divisores naturais próprios é igual: ' + soma);
}else{

    /*Saída de dados*/
    console.log('O número ' + numero + ' não é um perfeito, pois sua soma de todos os seus divisores naturais próprios é igual: ' + soma);
}