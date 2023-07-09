//O algorítmo possui uma função que recebe uma data e imprime a data por extenso.

const prompt = require("prompt-sync")()

/*Variáveis*/
let dia, mes, ano;

/*Entrada de dados*/
console.log("Digite a data atual em números. Após cada dado digitado pressione entrer.");
dia = parseInt(prompt("Digite o dia: "));
mes = parseInt(prompt("Digite o mês: "));
ano = parseInt(prompt("Digite o ano: "));

/*Processamento de dados*/
function dataPorExtenso(x){
    switch(x){
        case 1:
            mes = "janeiro";
            break;
        case 2:
            mes = "fevereiro";
            break;
        case 3:
            mes = "março";
            break;
        case 4:
            mes = "abril";
            break;
        case 5:
            mes = "maio";
            break;
        case 6:
            mes = "junho";
            break;
        case 7:
            mes = "julho";
            break;
        case 8:
            mes = "agosto";
            break;
        case 9:
            mes = "setembro";
            break;
        case 10:
            mes = "outubro";
            break;
        case 11:
            mes = "novembro";
            break;
        case 12:
            mes = "dezembro";
            break;
    }
    return mes;
}
dataPorExtenso(mes);

/*Saída de dados*/
console.log("A data de hoje por extenso é " + dia + " de " + mes + " de " + ano + ".");