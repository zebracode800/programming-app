const prompt = require("prompt-sync")();

console.log(`\n\tAtividade F2!!\n`);

let soma = 0;

for (let i = 11; i < 30; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}

console.log(`\t\tA soma dos números ímpares entre 10 e 30 é: ${soma}!!`);
