//O algoritmo ler as notas de 5 alunos e imprime somente o nome dos alunos com notas maiores que 5.0.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, nota = 0.0, notas = [], aluno, alunos = [];

/*Entrada de dados*/
for (i = 0; i < 5; i++) {
    aluno = prompt("Digite o nome do " + j + "º aluno: ");
    alunos.push(aluno);
    nota = parseFloat(prompt("Digite a nota do " + aluno + ": "));
    notas.push(nota);
    j++;
}

/*Processamento de dados*/
for (i = 0; i < notas.length; i++) {
    if (notas[i] > 5.0){
        /*Saída de dados*/
        console.log("A nota do aluno " + alunos[i] + " é maior que 5.0!");
    }
}