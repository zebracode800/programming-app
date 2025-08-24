const prompt = require("prompt-sync")();

console.log(`\n\tAtividade E3!!\n`);

let maior = -Infinity;
let menor = Infinity;
let soma = 0;
let count = 0;

while (true) {
    let num = Number(prompt(`\tDigite um número (0 para sair): `));

    if (num === 0) break;

    if (num > maior) maior = num;
    if (num < menor) menor = num;

    soma += num;
    count++;
}

if (count === 0) {
    console.log(`\n\tNenhum número foi digitado!!`);
} else {
    let media = soma / count;
    console.log(`\n\tMaior número: ${maior}`);
    console.log(`\tMenor número: ${menor}`);
    console.log(`\tMédia: ${media.toFixed(2)}`);
}
