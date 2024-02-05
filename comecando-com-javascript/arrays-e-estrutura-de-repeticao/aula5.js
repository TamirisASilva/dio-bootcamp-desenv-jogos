/*const alunos = ['Cassio', 'Pedro', 'Luana']

alunos.push('Renan'); // Adiciona itens na lista
alunos[4] = 'Ana'; //Adiciona itens na lista adicionando

const materias = [];

materias.push('Html');
materias.push('Css');
materias.push('JavaScript');

console.log(alunos);
console.log(alunos[0]);


console.log(materias);
console.log(materias.pop());//Imprimi o ultimo elemento
console.log(materias.shift()); //Imprimi o primeiro*/


const notas = []

notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);

/* Fazendo soma sem estrutura de repetição
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma/5)*/

/*Fazendo for correr uma string
const nome = 'Tamiris Alves da Silva';
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}*/

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}
console.log(soma / notas.length)