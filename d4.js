const prompt = require("prompt-sync")();

console.log(`\n\tAtividade D4!!\n`);

let v1 = [];
let v2 = [];
let soma = [];

for (let i = 0; i < 15; i++) {
    let numero1 = Number(prompt(`\tDigite o valor ${i + 1} do vetor 1: `));
    let numero2 = Number(prompt(`\tDigite o valor ${i + 1} do vetor 2: `));

    v1.push(numero1);
    v2.push(numero2);
    soma.push(numero1 + numero2);
}

console.log(`\n\tVetor 1: ${v1}`);
console.log(`\tVetor 2: ${v2}`);
console.log(`\tSoma: ${soma}`);


