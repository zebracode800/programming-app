const prompt = require("prompt-sync")();

console.log(`\n\tAtividade H3!!\n`);

let total = 0;
let neg = 0;
//Julia
while (true) {
    let conta = Number(prompt(`\tDigite o número da conta (0 para encerrar): `));
    if (conta === 0) break;

    let saldo = Number(prompt(`\tDigite o saldo da conta ${conta}: R$ `));

    let status = saldo >= 0 ? "positivo" : "negativo";
    console.log(`\n\tConta: ${conta} | Saldo: R$ ${saldo.toFixed(2)} | ${status}`);

    total++;
    if (saldo < 0) neg++;
}

if (total > 0) {
    let percNeg = (neg / total) * 100;
    console.log(`\n\tPercentual de contas com saldo negativo: ${percNeg.toFixed(2)}%`);
} else {
    console.log(`\n\tNenhuma conta foi registrada :D`);
}
