const prompt = require("prompt-sync")();

console.log(`\n\tAtividade J3!!\n`);

let pares = 0;
let impares = 0;

for (let i = 1; i <= 30; i++) {
    let num = Number(prompt(`\tDigite o ${i}º número inteiro: `));

    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
//Julia
console.log(`\n\tQuantidade de números pares: ${pares}`);
console.log(`\tQuantidade de números ímpares: ${impares}`);
