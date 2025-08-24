const prompt = require("prompt-sync")();

console.log(`\n\tAtividade C3!!\n`);

let totalSalario = 0;

for (let i = 1; i <= 20; i++) {
    let codigo = prompt(`\tDigite o código do funcionário ${i}: `);
    let salario = Number(prompt(`\tDigite o salário do funcionário ${i}: R$ `));

    totalSalario += salario;
}

let medSalarial = totalSalario / 20;

console.log(`\n\tTotal da folha de pagamento: R$ ${totalSalario.toFixed(2)}!!`);
console.log(`\tMédia salarial: R$ ${medSalarial.toFixed(2)}!!`);
