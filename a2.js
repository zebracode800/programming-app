const prompt = require("prompt-sync")();

console.log(`\n\tAtividade A2!!\n`);
console.log(`\tNota em formato 70 e 100...\n`);

let nota1 = Number (prompt(`\t\tDigite um numero: `));
let nota2 = Number (prompt(`\t\tDigite um numero: `));
let nota3 = Number (prompt(`\t\tDigite um numero: `));

media = (nota1+nota2+nota3)/3

if (media >= 70) {
    console.log(`\n\t\tMedia: ${media}`);
    console.log(`\t\tAprovado!!`);
    return false;
}

console.log(`\n\t\tMedia: ${media}`);
console.log(`\t\tReprovado!!`);