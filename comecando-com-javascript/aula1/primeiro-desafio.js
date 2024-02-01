let precoGasolina = 6.58;
let consumoMedio = 12;
let distaciaViagem = 1500;

const litrosConsumidos = distaciaViagem / consumoMedio;
const valorViagem = litrosConsumidos * precoGasolina;

console.log(valorViagem.toFixed(2)); //tofixed limita as casas decimais
