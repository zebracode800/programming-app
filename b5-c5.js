const prompt = require("prompt-sync")();

console.log(`\n\tCalculadora Interativa\n`);

function soma(a, b) { 
  return a + b; 
}
function sub(a, b) { 
  return a - b; 
}
function mult(a, b) { 
  return a * b; 
}
function div(a, b) { 
  return a / b; 
}

function escolha(n1, n2, op) {
    switch(op) {
        case 1:
            return soma(n1, n2);
        case 2:
            return sub(n1, n2);
        case 3:
            return mult(n1, n2);
        case 4:
            return div(n1, n2);
        default:
            console.log(`\n\tOperação inválida!`);
            return;
    }
}

function calculadora() {
    console.log(`\n\tDigite os números:`);

    let n1 = Number(prompt(`\tPrimeiro número: `));
    let n2 = Number(prompt(`\tSegundo número: `));

    console.log(`\n\tEscolha a operação:`);
    console.log(`\t1 - Soma`);
    console.log(`\t2 - Subtração`);
    console.log(`\t3 - Multiplicação`);
    console.log(`\t4 - Divisão`);

    let op = Number(prompt(`\tDigite o número da operação: `));

    let res = escolha(n1, n2, op);

    if (res !== undefined) {
        console.log(`\n\tResultado: ${res}`);
    }
}
calculadora();
