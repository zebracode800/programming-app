const prompt = require("prompt-sync")();

console.log(`\n\tAtividade E1!!\n`);

let distancia = Number (prompt("\t\tDigite a distância da viagem (km): "));
let consumo = Number (prompt("\t\tDigite o consumo médio do carro (km/l): "));
let preco = Number (prompt("\t\tDigite o preço da gasolina (l): "));

let L, gasto;

L = distancia/consumo;
gasto = L*preco;

console.log(`\n\t\tQuantidade de litros necessários: ${L}`);
console.log(`\t\tValor da viagem: ${gasto}`);