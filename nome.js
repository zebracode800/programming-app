const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite sua idade: ");

console.log(`\n\nSeu nome é ${nome}`);
console.log(`Você tem  idade ${idade}`);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(`Valor da linha 1 coluna 2 é: ${matriz[0][1]}`);