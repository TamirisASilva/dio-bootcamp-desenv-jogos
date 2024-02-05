class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calculoImc() {
        const imc = this.peso / (this.altura * this.altura);
        medirImc(imc);
    }
}
function medirImc(calculoImc) {
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
}

const tamiris = new Pessoa('Tamiris', 90, 1.60);
console.log(tamiris);
console.log(tamiris.calculoImc());