class Carro {
    marca;
    cor;
    gastoMedioDeCombustivel;

    constructor(marca, cor, gastoMedioDeCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;
    }

    calculaGastoDePercuso(distancia, precoDaGasolina) {
        return distancia * this.gastoMedioDeCombustivel * precoDaGasolina;
    }
}

const uno = new Carro('Fiat', 'Preto', 1 / 12);
console.log(uno.calculaGastoDePercuso(70, 5).toFixed(2));
const palio = new Carro('Fiat', 'vermelho', 1 /10);
console.log(palio.calculaGastoDePercuso(100, 5.69).toFixed(2));