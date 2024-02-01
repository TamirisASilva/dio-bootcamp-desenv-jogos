const pesoPaciente = 100;
const alturaPaciente = 1.60;

const imc = pesoPaciente / (alturaPaciente * alturaPaciente);

if(imc < 18.5){
    console.log('IMC: '+imc.toFixed(2)+'. ABAIXO DO PESO');
}else if(imc >= 18.5 && imc <= 25){
    console.log('IMC: '+imc.toFixed(2)+'. PESO NORMAL');
}else if(imc >= 25 && imc <= 30){
    console.log('IMC: '+imc.toFixed(2)+'. ACIMA DO PESO');
}else if(imc >= 30 && imc <= 40){
    console.log('IMC: '+imc.toFixed(2)+'. OBESO');
}
else{
    console.log('IMC: '+imc.toFixed(2)+'. OBESIDADE GRAVE');
}