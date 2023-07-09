//O algorítmo possui uma função que recebe três medidas e imprime o tipo de triângulo.

const prompt = require("prompt-sync")()

/*Variáveis*/
let lado1, lado2, lado3, forma, nome;

/*Entrada de dados*/
lado1 = parseInt(prompt("Digite em centímetros a 1ª medida: "));
lado2 = parseInt(prompt("Digite em centímetros a 2ª medida: "));
lado3 = parseInt(prompt("Digite em centímetros a 3ª medida: "));

/*Processamento de dados*/
function formaTriangulo(x,y,z){
    if(x>0 && y>0 && z>0){
        if(x<y+z && y<x+z && z<x+y){
            return forma = true;
        }
    }
}

function nomeTriangulo(x,y,z){
    if(x==y && y==z){
        nome = "equilátero";
    }else if((x==y && (x!=z || y!=z)) || (z==y && (z!=x || y!=x)) || (x==z && (x!=y || x!=y))){
        nome = "isósceles";
    }else{
        nome = "escaleno";
    }
    return nome;
}

formaTriangulo(lado1,lado2,lado3);
nomeTriangulo(lado1,lado2,lado3);

if(forma == true){
    
    /*Saída de dados*/
    console.log("As medidas informadas formam um triângulo.");
    console.log("O tipo de triângulo formado possui o nome de " +nome+".");
}else{

    /*Saída de dados*/
    console.log("As medidas informadas NÃO formam um triângulo.");
}

