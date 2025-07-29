const prompt = require("prompt-sync")();

console.log(`\n\tAtividade G1!!\n`);

let numero = Number (prompt("\t\tDigite um numero: "));

if (numero % 3 === 0) {
    console.log(`\n\t\tO numero ${numero} é multiplo de 3!!`);
    return false;
}

console.log(`\n\t\tO numero ${numero} é não multiplo de 3!!`);