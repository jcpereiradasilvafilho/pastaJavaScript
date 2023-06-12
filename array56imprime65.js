//O algoritmo ler vários números e imprime na ordem inversa.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, quantosNumeros = 0, numero, numeros = [];

/*Entrada de dados*/
quantosNumeros = parseInt(prompt("Digite quantos números você deseja inserir: "))
for (i = 0; i < quantosNumeros; i++) {
    numero = parseInt(prompt("Digite o " + j + "º número: "));
    numeros.push(numero);
    j++;
}

/*Processamento de dados*/
console.log("Segue a ordem inversa dos três números digitados: ");
for (i = quantosNumeros; i >= 0; i--) {

    /*Saída de dados*/
    console.log(numeros[i]);
}