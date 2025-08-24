const prompt = require("prompt-sync")();

console.log(`\n\tAtividade B3!!\n`);

for (let i = 2; i <= 9; i++) {
    console.log(`\n\tTabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`\t${i} x ${j} = ${i * j}`);
    }
}
