const nota1 = 5.1;
const nota2 = 5.1;
const nota3 = 5.1;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('O aluno obteve média: '+media.toFixed(2)+'. ALUNO REPROVADO');
}else if(media >= 5 && media <= 7){
    console.log('O aluno obteve média: '+media.toFixed(2)+'. ALUNO DE RECUPERAÇÃO');
}else{
    console.log('O aluno obteve média: '+media.toFixed(2)+'. ALUNO APROVADO');
}