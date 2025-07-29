const prompt = require("prompt-sync")();

console.log(`\n\tAtividade F1!!\n`);

let conta = Number (prompt("\t\tDigite o valor total da conta da mesa: "));
let cliente = Number (prompt("\t\tDigite quantidade de clientes que pagaram: "));


let totalDividido;

totalDividido = conta/cliente

console.log(`\n\t\tQuantidade paga por cliente: ${totalDividido}`);
