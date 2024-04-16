//O algoritmo recebe uma string, inverte e imprime invertida.

const prompt = require('prompt-sync')()
let i, palavra, invertidas=[];

palavra = prompt("Digite uma palavra: ");

function separaLetras(palavra){
    for (i=palavra.length-1;i>=0;i--) {
        invertidas += palavra[i];
    }
    return invertidas;
}

separaLetras(palavra);
console.log("A inversão da palavra digitada é: "+invertidas+".");