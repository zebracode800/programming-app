const prompt = require("prompt-sync")();

console.log(`\n\tAtividade B4!!\n`);

let notas = [];

for (let i = 1; i <= 35; i++) {
    let nota = Number(prompt(`\tDigite a nota do aluno ${i}: `)); //Ju
    notas.push(nota);
}

console.log(`\n\tRelatório de notas >= 7.0:`);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7.0) {
        console.log(`\tAluno ${i + 1}: ${notas[i]}`);
    }
}
//  Juuuuu
