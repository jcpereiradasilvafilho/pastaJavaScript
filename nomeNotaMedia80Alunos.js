//O algoritmo ler a nota de 80 alunos e imprime a nota de cada aluno e a média da turma.

const prompt = require('prompt-sync')()

/*Variáveis*/
var i=0, j=1, nota = 0.0, notas = [], aluno, alunos = [], media = 0.0, somaNotas = 0.0;

/*Entrada de dados*/
for (i = 0; i < 80; i++) {
    aluno = prompt("Digite o nome do " + j + "º aluno: ");
    alunos.push(aluno);
    nota = parseFloat(prompt("Digite a 1ª nota do " + aluno + ": "));
    notas.push(nota);
    j++;
}

/*Processamento de dados*/
for (i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
    media = somaNotas / 80;
    
    /*Saída de dados*/
    console.log("O aluno " + alunos[i] + " possui a nota: " + notas[i] + ".");
}
console.log("A média da turma é: " + media + ".");