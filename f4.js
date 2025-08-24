console.log(`\n\tAtividade F4)\n`);

let numeros = [];
for (let i = 0; i < 30; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1); //aleatorio poggers
}

let maior = numeros[0];
let pos = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
        pos = i;
    }
}

console.log(`\tVetor: ${numeros}`);
console.log(`\tMaior número: ${maior}`);
console.log(`\tPosição (índice): ${pos}`);
//Julia
