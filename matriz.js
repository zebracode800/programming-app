const prompt = require("prompt-sync")();

let times = ['Coritiba', 'Athletico', 'Maringa', 'Operario', 'Londrina'];

times.push(`Parana`);
times[1] = `Rio Branco`;
times.pop();
times.unshift(`Cascavel`);
times.shift();
console.log(times.length);

console.log(times);

//arraw

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(`Valor da linha 1 coluna 2 é: ${matriz[0][1]}`);
