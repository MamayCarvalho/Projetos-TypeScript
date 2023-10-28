function somar(a: number, b: number, c: number){
    return a + b + c;
}

function media(soma: number){
    return soma / 3;
}

let NumA: number = 10;
let NumB: number = 40;
let NumC: number = 30;

console.log(somar(NumA, NumB, NumC));
console.log(media(somar(NumA, NumB, NumC)));

console.log(somar(-10, 20, -5));
console.log(media(somar(-10, 20, -5)));


function adicao(a: number, b: number){
    return a + b;
}

function subtracao(a: number, b: number){
    return a - b;
}

function multiplicacao(a: number, b: number){
    return a * b ;
}

function divisao(a: number, b: number){
    return a / b;
}

let opcao: number = 3;
let valor1: number = 10;
let valor2: number = 10;

switch(opcao){
    case 1:
        console.log(adicao(valor1, valor2));
        break;
    case 2:
        console.log(subtracao(valor1, valor2));
        break;
    case 3:
        console.log(multiplicacao(valor1, valor2));
        break;
    case 4:
        console.log(divisao(valor1, valor2));
        break;
    default:
        console.log("Opção Inválida");
}