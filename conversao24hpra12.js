// o programa converte as horas digitadas pelo usuário, de 24h para 12h.

const prompt = require("prompt-sync")();

/*Declaração de variáveis*/
let horas=1, minutos, horas12;

/*Processamento de dados*/
function conversao(x){
    if(x>12){
        horas12 = x - 12;
    }else{
        horas12 = x;
    }
}

/*Saída de dados*/
function saida(x,y){
    console.log("As horas convertidas em 12h é igual a: " + x + ":" + y + ".");
}

/*Entrada de dados*/
while(horas!=0){
    console.log("A cada dado informado pressione enter.");
    horas = parseInt(prompt("Digite primeiramente a hora (presione 0 para sair): "));
    if(horas==0){
        break;
    }else{
        minutos = parseInt(prompt("Agora digite os minutos: "));
        conversao(horas);
        saida(horas12,minutos);
    }
}