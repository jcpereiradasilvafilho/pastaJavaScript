//O algorítmo recebe o valor da compra, a quantidade de parcela e divide até deixar do jeito que pedrinho quer.

const prompt = require('prompt-sync')();

/*Variáveis*/
let valor, parcela, metadeParcela, valorParcela=0, soma=0, novaDivisao=0, i, contador;

/*Entrada de dados*/
valor = parseFloat(prompt('Digite o valor da compra: '));
parcela = parseInt(prompt('Digite o número de parcela: '));

/*Processamento de dados*/
if (valor % parcela == 0){
    valorParcela = valor / parcela;

    /*Saída de dados*/
    console.log('O valor da parcela é de: '+valorParcela+' reais!');
}else{
    metadeParcela = parseInt(parcela / 2);
    switch(valor%parcela){
    case 1:
        valorParcela = parseInt(valor / parcela) + 1;
        break;
    case 2:
        valorParcela = parseInt(valor / parcela) + 2;
        break;
    case 3:
        valorParcela = parseInt(valor / parcela) + 3;
        break;
    case 4:
        valorParcela = parseInt(valor / parcela) + 4;
        break;
    case 5:
        valorParcela = parseInt(valor / parcela) + 5;
        break;
    }
    for (i = 1; i <= parcela; i++) {
        while (metadeParcela >= i) {
            console.log('O valor da parcela '+i+' é de: '+valorParcela+' reais!');
            soma += valorParcela;
            contador = (parcela - i);
            i++;
            if ((valor - soma)%contador == 0){
                break;
            }
        }
        while(i <= parcela){
            novaDivisao = (valor - soma) / contador;
            console.log('O valor da parcela '+i+' é de: '+novaDivisao+' reais!');
            i++;
        }
    }
}