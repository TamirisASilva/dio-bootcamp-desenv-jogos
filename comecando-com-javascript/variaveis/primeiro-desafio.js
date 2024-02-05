const precoGasolina = 6.58;
const consumoMedio = 12;
const distaciaViagem = 1500;

const litrosConsumidos = distaciaViagem / consumoMedio;
const valorViagem = litrosConsumidos * precoGasolina;

console.log(valorViagem.toFixed(2)); //tofixed limita as casas decimais


