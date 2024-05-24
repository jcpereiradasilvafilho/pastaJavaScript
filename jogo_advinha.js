const prompt = require("prompt-sync")();
function pulaLinha() {
    console.log(' ');
}
function mostra(frase) {
    console.log(frase);
    pulaLinha();
}
var numeroPensado = Math.round(Math.random() * 10);
var tentativas = 1;
while(tentativas <= 3) {
    var chute = parseInt(prompt("Digite seu chute de 0 a 10: "));
    if(chute == numeroPensado) {
        mostra(`Você ACERTOU, o número pensado era ${numeroPensado}!`);
        break;
    } else {
        mostra(`Você ERROU!`);
    }
    tentativas++;
    
}
mostra(`FIM, o número pensado era ${numeroPensado}!`);