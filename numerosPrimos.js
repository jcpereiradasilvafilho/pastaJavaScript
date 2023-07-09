//O algorítmo cria uma função que recebe um número inteiro, verifica se é um número primo e imprime todos os primos de 1 até ele.

const prompt = require("prompt-sync")();

/*Declaração de variáveis*/
let i, j, numero, primos=[];

numero = parseInt(prompt("Digite um número inteiro: "));

function encontrarNumerosPrimos(x) {
    for(j=0;j<=x;j++){
        if (ePrimo(j)) {
            primos.push(j);
        }
    }
    return primos;
}   
  
function ePrimo(x) {
    if (x <= 1) {
        return false;
    }
  
    for (i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

if (ePrimo(numero)){
    console.log("O número " + numero + " é um número primo."); 
}else{
    console.log("O número " + numero + " NÃO é um número primo."); 
}

encontrarNumerosPrimos(numero);
console.log("Os números primos menores que o número " + numero + " são: " + primos);