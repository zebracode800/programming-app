const prompt = require("prompt-sync")();

console.log(`\n\tAtividade D4!!\n`);

let n = Number(prompt(`\tDigite o número de pessoas no grupo: `));

let novo, velho;

for (let i = 1; i <= n; i++) {
    let nome = prompt(`\tDigite o nome da pessoa ${i}: `);
    let idade = Number(prompt(`\tDigite a idade de ${nome}: `));

    if (i === 1) {
        novo = { nome, idade };
        velho = { nome, idade };
    } else {
        if (idade < novo.idade) novo = { nome, idade };
        if (idade > velho.idade) velho = { nome, idade };
    }
}

console.log(`\n\tPessoa mais jovem: ${novo.nome} (${novo.idade} anos)!!`);
console.log(`\tPessoa mais velha: ${velho.nome} (${velho.idade} anos)!!`);
