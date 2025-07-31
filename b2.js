const prompt = require("prompt-sync")();

console.log(`\n\tAtividade B2!!\n`);

let numero = Number (prompt(`\t\tDigite um numero: `));
console.log(`\n\t\tNumero === ${numero}`);


numero % 2 === 0 ? console.log(`\t\tNumero par!!`) : console.log(`\t\tNumero impar!!`) ;

