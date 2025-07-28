const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite sua idade: ");

console.log("\n\nSeu nome é", nome);
console.log("Você tem", idade,"anos");