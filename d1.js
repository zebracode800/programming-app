const prompt = require("prompt-sync")();

console.log(`\n\tAtividade D1!!\n`);

let numero = 120.00;
let desconto = 0.15;
let taxa = 10;

console.log(`\t\tO valor do produto: ${numero}!!`);
console.log(`\t\tO desconto a ser aplicado: 15%`);
console.log(`\t\tA taxa: 10 reais`);

console.log(`\n\t\tA soma entre eles é ${numero-(numero*desconto)+taxa}!!`);