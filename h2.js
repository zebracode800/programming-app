const prompt = require("prompt-sync")();

console.log(`\n\tAtividade H2!!\n`);

let largura = Number(prompt(`\t\tDigite a largura do terreno (em metros): `));
let profundidade = Number(prompt(`\t\tDigite a profundidade do terreno (em metros): `));

let area = largura * profundidade;
let classificacao = "";

if (area >= 0 && area <= 49) {
    classificacao = "Mercearia";
} else if (area >= 50 && area <= 399) {
    classificacao = "Mercadinho";
} else if (area >= 400 && area <= 999) {
    classificacao = "Mercado";
} else if (area >= 1000 && area <= 2499) {
    classificacao = "Supermercado";
} else if (area >= 2500) {
    classificacao = "Hipermercado";
} else {
    classificacao = "Área inválida!";
}

console.log(`\n\t\tÁrea do estabelecimento: ${area} m²`);
console.log(`\t\tClassificação: ${classificacao}`);
