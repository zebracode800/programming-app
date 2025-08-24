const prompt = require("prompt-sync")();

console.log(`\n\tAtividade E4)\n`);

let numeros = [];
for (let i = 0; i < 30; i++) {
    numeros[i] = (i + 1) * 1.5; 
}
//Julia
for (let i = 0; i < 30; i++) {
    if ((i + 1) % 2 === 0) {
    
        numeros[i] *= 1.02;
    } else {
        numeros[i] *= 1.05;
    }
}

console.log(`\tVetor resultante: `);
console.log(numeros);
