// Tipo Boleano
let minhaBlusaAzul = true;
let meuShortBranco = false;

console.log(minhaBlusaAzul);
console.log(meuShortBranco);

// Descobrindo se um numero é par
const numero = 25;
const numeroPar = (numero % 2) === 0;

// Estrutura Condicional
if(numero === 0){
    console.log('Número inválido');
}
else if(numeroPar){
    console.log('Esse número é par');
}else{
    console.log('Esse número é impar');
}