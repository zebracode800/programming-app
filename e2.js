const prompt = require("prompt-sync")();

console.log(`\n\tAtividade E2!!\n`);

let maior, menor;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`\t\tDigite o número ${i}: `));

    if (i === 1) {
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
    }
}

console.log(`\n\t\tO maior número é: ${maior}!!`);
console.log(`\t\tO menor número é: ${menor}!!`);