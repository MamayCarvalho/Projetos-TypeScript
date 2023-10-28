"use strict";
function somar(a, b, c) {
    return a + b + c;
}
function media(soma) {
    return soma / 3;
}
let NumA = 10;
let NumB = 40;
let NumC = 30;
console.log(somar(NumA, NumB, NumC));
console.log(media(somar(NumA, NumB, NumC)));
console.log(somar(-10, 20, -5));
console.log(media(somar(-10, 20, -5)));
function adicao(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
let opcao = 3;
let valor1 = 10;
let valor2 = 10;
switch (opcao) {
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
