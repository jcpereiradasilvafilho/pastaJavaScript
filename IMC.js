//O algoritmo recebe a altura e peso do usuário, calcula e imprime o IMC.

const prompt = require("prompt-sync")();
let altura, peso, IMC=0;

altura = parseFloat(prompt("Qual sua altura: "));
peso = parseFloat(prompt("Qual seu peso: "));

function calculaIMC(altura,peso){
    IMC = peso/(altura*altura);
    return IMC;
}
calculaIMC(altura,peso);

console.log("O valor do seu IMC é "+IMC+".");