//O algorítmo possui uma função que recebe o raio de uma esfera, calcula e imprime o volume.

const prompt = require("prompt-sync")()

/*Variáveis*/
let raio, volume;

/*Entrada de dados*/
raio = parseInt(prompt("Digite o raio da esfera em centímetros: "));

/*Processamento de dados*/
function volumeEsfera(x){
    volume = x**3 * 3.14 * (4/3);
}
volumeEsfera(raio);

/*Saída de dados*/
console.log("O volume da esfera é " + volume.toFixed(3) + "!");