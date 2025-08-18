const prompt = require("prompt-sync")();

console.log(`\n\tAtividade C2!!\n`);

let idade = Number(prompt(`\t\tDigite sua idade: `));

let classificacao = idade < 12 ? `Criança` : idade < 18 ? `Adolescente` : idade < 60 ? `Adulto` : `Idoso`;

console.log(`\t\tClassificação: ${classificacao}`);
