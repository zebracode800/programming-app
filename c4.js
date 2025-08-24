const prompt = require("prompt-sync")();

console.log(`\n\tAtividade C4!!\n`); //poggers

let nomes = [];
let notas = [];

for (let i = 1; i <= 35; i++) {
    let nome = prompt(`\tDigite o nome do aluno ${i}: `);
    let nota = Number(prompt(`\tDigite a nota de ${nome}: `));

    nomes.push(nome);
    notas.push(nota);
}

console.log(`\n\tRelatório de notas >= 7.0:`);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7.0) {
        console.log(`\t${nomes[i]}: ${notas[i]}`);
    }
}
//pog
