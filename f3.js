const prompt = require("prompt-sync")();

console.log(`\n\tAtividade F3!!\n`);

let alturaRomario = 1.50; 
let alturaBebeto = 1.10;  
let anos = 0;

while (alturaBebeto <= alturaRomario) {
    alturaRomario += 0.02;
    alturaBebeto += 0.03;  
    anos++;
}
//poggers
console.log(`\n\tBebeto será maior que Romário em ${anos} anos!!`);
console.log(`\tAltura de Romário: ${alturaRomario.toFixed(2)} m`);
console.log(`\tAltura de Bebeto: ${alturaBebeto.toFixed(2)} m`);
