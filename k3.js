const prompt = require("prompt-sync")();

console.log(`\n\tAtividade K3!!\n`);

let totalF21 = 0;   
let totalM18 = 0;  
let somaM = 0;      
let somaF = 0;     
let countM = 0;     
let countF = 0;    

for (let i = 1; i <= 200; i++) {
    let nome = prompt(`\tDigite o nome do estudante ${i}: `);
    let idade = Number(prompt(`\tDigite a idade de ${nome}: `));
    let sexo = prompt(`\tDigite o sexo de ${nome} (M/F): `).toUpperCase();

    if (sexo === "F") {
        somaF += idade;
        countF++;
        if (idade > 21) totalF21++;
    } else if (sexo === "M") {
        somaM += idade;
        countM++;
        if (idade > 18) totalM18++;
    }
}
//poggers :D
let mediaM = countM > 0 ? (somaM / countM).toFixed(2) : 0; //agora tudo em uma linha wow...
let mediaF = countF > 0 ? (somaF / countF).toFixed(2) : 0; //consegui

console.log(`\n\tFeminino maior de 21 anos: ${totalF21}`);
console.log(`\tMasculino maior de 18 anos: ${totalM18}`);
console.log(`\tMédia de idade masculina: ${mediaM}`);
console.log(`\tMédia de idade feminina: ${mediaF}`);
