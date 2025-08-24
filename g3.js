const prompt = require("prompt-sync")();

console.log(`\n\tAtividade G3!!\n`);

let n1 = 1;
let n2 = 1;

console.log(`\tFibonacci até o 15º termo:`);
//OMG :D
for (let i = 1; i <= 15; i++) {
    if (i === 1 || i === 2) {
        console.log(`\tTermo ${i}: 1`);
    } else {
        let proximo = n1 + n2;
        console.log(`\tTermo ${i}: ${proximo}`);
        n1 = n2;
        n2 = proximo;
    }
}
