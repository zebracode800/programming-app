const prompt = require("prompt-sync")();

console.log(`\n\tAtividade I2!!\n`);

let anos = Number(prompt(`\t\tHá quantos anos você fuma? `));
let cigarrosPorDia = Number(prompt(`\t\tQuantos cigarros você fuma por dia? `));
let precoCarteira = Number(prompt(`\t\tQual o preço de uma carteira com 20 cigarros? R$ `));

let totalCigarros = anos * 365 * cigarrosPorDia;
let precoPorCigarro = precoCarteira / 20;
let gastoTotal = totalCigarros * precoPorCigarro;

console.log(`\n\t\tQuantidade de cigarros fumados: ${totalCigarros}`);
console.log(`\t\tTotal gasto: R$ ${gastoTotal.toFixed(2)}`);

if (gastoTotal > 10000) {
    console.log(`\t\tVocê já gastou muito!`);
} else {
    console.log(`\t\tSeu gasto ainda não ultrapassou R$ 10.000,00.`);
}
