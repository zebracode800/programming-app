const prompt = require("prompt-sync")();

console.log(`\n\tAtividade I3!!\n`);

let n = Number(prompt(`\tDigite um número: `));

console.log(`\n\tDivisores de ${n}:`);

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(`\t${i}`);
    }
}
