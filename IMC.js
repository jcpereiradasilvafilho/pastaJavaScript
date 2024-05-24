//O algoritmo recebe a altura e peso do usuário, calcula e imprime o IMC.

const prompt = require("prompt-sync")();
let altura, peso, IMC=0;

altura = parseFloat(prompt("Qual sua altura: "));
peso = parseFloat(prompt("Qual seu peso: "));

function calculaIMC(altura,peso){
    IMC = (peso/(altura*altura)).toFixed(1);
    return IMC;
}
calculaIMC(altura,peso);

if (IMC < 18.5) {
    console.log(`O valor do seu IMC é ${IMC}. Você está abaixo do peso.`);
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`O valor do seu IMC é ${IMC}. Você está com o peso normal.`);
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`O valor do seu IMC é ${IMC}. Você está com sobrepeso.`);
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`O valor do seu IMC é ${IMC}. Você está com obesidade grau I.`);
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`O valor do seu IMC é ${IMC}. Você está com obesidade grau II.`);
} else if (IMC >= 40) {
    console.log(`O valor do seu IMC é ${IMC}. Você está com obesidade grau III.`);
} else {
    console.log("Valor inválido.");
}