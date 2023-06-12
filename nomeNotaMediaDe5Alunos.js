//O algoritmo ler o nome, duas notas de 5 alunos e imprime nome, as duas notas e a média de cada aluno.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, nota1 = 0.0, notas1 = [], nota2 = 0.0, notas2 = [], aluno, alunos = [], media = 0.0;

/*Entrada de dados*/
for (i = 0; i < 5; i++) {
    aluno = prompt("Digite o nome do " + j + "º aluno: ");
    alunos.push(aluno);
    nota1 = parseFloat(prompt("Digite a 1ª nota do " + aluno + ": "));
    notas1.push(nota1);
    nota2 = parseFloat(prompt("Digite a 2ª nota do " + aluno + ": "));
    notas2.push(nota2);
    j++;
}

/*Processamento de dados*/
for (i = 0; i < notas1.length; i++) {
    media = (notas1[i] + notas2[i]) / 2;
    
    /*Saída de dados*/
    console.log("O aluno " + alunos[i] + " possui as notas: " + notas1[i] + " e " + notas2[i] + " e sua média é: " + media);
}