//O algorítmo ler vários números, busca pelo primeiro número negativo e imprime a posição.

const prompt = require("prompt-sync")();

//Declaração de variáveis
let numero, numeros = [], i, posicao, novaPosicao=0, contador=-1;

//Entrada de dados
do{
    numero = parseInt(prompt("Digite os números da lista(digite 0 quando terminar a lista): "));
    numeros.push(numero);
}while(numero != 0);

//Processamento de dados
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0){
        posicao = numeros.indexOf(numeros[i]);
        novaPosicao = numeros.indexOf(numeros[i], i);
        if (posicao == 0 && novaPosicao == 0){

            //Saída de dados
            console.log("A posição do número negativo na lista é: " + posicao);
        }else{
        
            //Saída de dados
            console.log("A posição do número negativo na lista é: " + novaPosicao);
        }
    }else{
        contador++;
    }
}
if(contador == numeros.indexOf(0)){

    //Saída de dados
    console.log("Não há número negativo na lista.");
}