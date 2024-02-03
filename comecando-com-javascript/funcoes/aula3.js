function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const ValorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + ValorDeAcrescimo;
}

console.log(incrementarJuros(100, 20));