const prompt = require("prompt-sync")();

let times = ['Coritiba', 'Athletico', 'Maringa', 'Operario', 'Londrina'];

times.push("Parana");
times[1] = "Rio Branco";
times.pop();
times.unshift("Cascavel");
times.shift();
console.log(times.length);

console.log(times);


let quantidadeSalarios = prompt("Quantos salários você deseja calcular a média?");
quantidadeSalarios = parseInt(quantidadeSalarios); 

let somaSalarios = 0;
let salarios = [];

for (let i = 0; i < quantidadeSalarios; i++) {
    let salarioAtual = prompt(`Digite o valor do salário °${i + 1}:`);
    salarioAtual = parseFloat(salarioAtual);

    somaSalarios += salarioAtual;

    salarios.push(salarioAtual);
}

let mediaSalarios = somaSalarios / quantidadeSalarios;

console.log("Salários digitados: ", salarios);
console.log("-----------------------");
console.log(`A média dos salários é: R$ ${mediaSalarios.toFixed(2)}`);
