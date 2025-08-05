//for
/*let frutas = ["banana", "morango", "uva", "maçã", "melancia", "abacate"];

console.log(frutas[1]);

for(let contador = 0; contador <= 5; contador++){
    console.log(contador);
    console.log(frutas[contador]);
    console.log(`A fruta ${frutas[contador]} está na posição ${contador}`);
}

for(let i = 10; i >= 0; i--){
    if (i==10){
        console.log(`Iniciando contagem regressiva...`)
    }
console.log(i);
 if(i == 0) {
    console.log(`Boooooooom`);
 }
}*/

//foreach
let protagonistas = ["Naruto", "Luffy", "Sung-jin-woo", "Goku"];

protagonistas.forEach(function(Element, index) {
    console.log(Element);
    console.log(index);
});

//while
let contador = 1;
while(contador <= 3){
    console.log("O contador é menor ou igual a 3");
}

//do while
let conta = 1;
do {
    console.log("O contador é menor ou igual a 3");
    conta = 4;
} while(conta <= 3);