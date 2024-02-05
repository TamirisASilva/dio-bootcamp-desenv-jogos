const pesoPaciente = 100;
const alturaPaciente = 1.60;

const calculoImc = pesoPaciente / (alturaPaciente * alturaPaciente);

if (calculoImc < 18.5) {
    console.log('IMC: ' + calculoImc.toFixed(2) + '. ABAIXO DO PESO');
} else if (calculoImc >= 18.5 && calculoImc <= 25) {
    console.log('IMC: ' + calculoImc.toFixed(2) + '. PESO NORMAL');
} else if (calculoImc >= 25 && calculoImc <= 30) {
    console.log('IMC: ' + calculoImc.toFixed(2) + '. ACIMA DO PESO');
} else if (calculoImc >= 30 && calculoImc <= 40) {
    console.log('IMC: ' + calculoImc.toFixed(2) + '. OBESO');
}
else {
    console.log('IMC: ' + calculoImc.toFixed(2) + '. OBESIDADE GRAVE');
}