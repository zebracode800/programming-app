const prompt = require("prompt-sync")();

console.log(`\n\tAtividade D2!!\n`);

let idade = Number(prompt(`\t\tDigite sua idade: `));

let sexo = prompt(`\t\tDigite seu sexo (M/F): `).toUpperCase();

let resposta = sexo === "M"
    ? (idade === 18
        ? `Você deve se alistar este ano :)`
        : idade < 18
            ? `Ainda não é hora de se alistar!! Faltam ${18 - idade} anos :)`
            : idade > 18 && idade <= 45
                ? `Você já deveria ter se alistado!! Procure a junta militar mais próxima :)`
                : `O alistamento não é mais obrigatório para sua faixa etária :)`
      )
    : `O alistamento militar não é obrigatório para mulheres :)`;

console.log(`\n\t\t${resposta}`);
