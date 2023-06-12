//O algoritmo ler as notas de 10 alunos e imprime somente as notas maiores que 5.0.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, nota = 0.0, notas = [];

/*Entrada de dados*/
for (i = 0; i < 10; i++) {
    nota = parseFloat(prompt("Digite a nota do " + j + "º aluno: "));
    notas.push(nota);
    j++;
}

/*Processamento de dados*/
for (i = 0; i < notas.length; i++) {
    if (notas[i] > 5.0){
        /*Saída de dados*/
        console.log("A nota " + notas[i] + " é maior que 5.0!");
    }
}