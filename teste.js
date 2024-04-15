var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var quantidade, separacao, i, X, Y, divisao;

quantidade = parseInt(lines.shift());

for(i=0;i<quantidade;i++){
    separacao = lines.shift().split(" ");
    X = parseInt(separacao[0]);
    Y = parseInt(separacao[1]);
    
    divisao = (X / Y).toFixed(1);

    if (Y == 0){
        console.log("divisao impossivel");
    }else{
        console.log(divisao);
    }
}
