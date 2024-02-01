const precoEtanol = 3.42;
const precoGasolina = 5.56;

const tipoDeCombustivel = 2;
const consumoMedio = 12;
const distaciaViagem = 1500;

const litrosConsumidos = distaciaViagem / consumoMedio;

if(tipoDeCombustivel === 1){
    const valorViagem = litrosConsumidos * precoGasolina;
    console.log(valorViagem.toFixed(2));
}else{
    const valorViagem = litrosConsumidos * precoEtanol;
    console.log(valorViagem.toFixed(2));
}