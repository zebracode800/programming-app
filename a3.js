const prompt = require("prompt-sync")();

console.log(`\n\tAtividade A3!!\n`);

let experienciaBatalha = 10;
let totalExp = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`\tBatalha ${i}: Você ganhou ${experienciaBatalha} pontos de experiência!!`);
    totalExp += experienciaBatalha;
}

console.log(`\n\tTotal de experiência recebida: ${totalExp} pontos`);
