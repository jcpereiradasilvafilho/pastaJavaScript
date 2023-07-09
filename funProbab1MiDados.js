//O algorítmo imprime a probabilidade de 1 milhão de lançamentos de dados e mostra a frequência que deu para cada lado.

const prompt = require("prompt-sync")();

/*Variáveis*/
let i, um=0, dois=0, tres=0, quatro=0, cinco=0, seis=0, array=[];

/*Processamento de dados*/
function lançaDado(){
    return Math.round(Math.random() * (6-1)+1);
}

for(i=0;i<1000000;i++){
    array.push(lançaDado());
}

for(i=0;i<array.length;i++){
    //console.log(array[i]);
    switch(array[i]){
        case 1:
            um++;
            break;
        case 2:
            dois++;
            break;
        case 3:
            tres++;
            break;
        case 4:
            quatro++;
            break;
        case 5:
            cinco++;
            break;
        case 6:
            seis++;
            break;
    }
}

/*Saída de dados*/
console.log("A quantidade de números 1 é: " + um + ".");
console.log("A quantidade de números 2 é: " + dois + ".");
console.log("A quantidade de números 3 é: " + tres + ".");
console.log("A quantidade de números 4 é: " + quatro + ".");
console.log("A quantidade de números 5 é: " + cinco + ".");
console.log("A quantidade de números 6 é: " + seis + ".");