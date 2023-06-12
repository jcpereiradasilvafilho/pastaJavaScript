//O algoritmo ler 3 números e imprime na ordem inversa.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, numero, numeros = [];

/*Entrada de dados*/
for (i = 0; i < 3; i++) {
    numero = parseInt(prompt("Digite o " + j + "º número: "));
    numeros.push(numero);
    j++;
}

/*Processamento de dados*/
console.log("Segue a ordem inversa dos três números digitados: ");
for (i = 2; i >= 0; i--) {

    /*Saída de dados*/
    console.log(numeros[i]);
}