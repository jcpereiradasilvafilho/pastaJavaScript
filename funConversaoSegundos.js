//O algorítmo possui uma função que recebe uma hora, converte em segundos e imprime.

const prompt = require("prompt-sync")()

/*Variáveis*/
let hora, minuto, segundo, segundoTotal;

/*Entrada de dados*/
console.log("Digite a hora atual em números. Após cada dado digitado pressione entrer.");
hora = parseInt(prompt("Digite a hora: "));
minuto = parseInt(prompt("Digite o minuto: "));
segundo = parseInt(prompt("Digite o segundo: "));

/*Processamento de dados*/
function conversaoEmSegundos(x,y,z){
    hora = x*60*60;
    minuto = y*60;
    segundoTotal = hora + minuto + z;
    return segundoTotal;
}
conversaoEmSegundos(hora,minuto,segundo);

/*Saída de dados*/
console.log("A hora atual em segundos é " + segundoTotal + ".");