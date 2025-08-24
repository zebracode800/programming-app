const prompt = require("prompt-sync")();

console.log(`\n\tAtividade G2!!\n`);

let nome = prompt(`\t\tDigite seu nome: `);
let idade = Number(prompt(`\t\tDigite sua idade: `));
let email = prompt(`\t\tDigite seu e-mail: `);

let resposta = "";

if (nome === "") {
    resposta = "Preencha os dados corretamente.";
} else if (idade < 18) {
    resposta = "Preencha os dados corretamente.";
} else if (!email.includes("@")) {
    resposta = "Preencha os dados corretamente.";
} else {
    resposta = "Cadastro realizado com sucesso!";
}

console.log(`\n\t\t${resposta}`);

