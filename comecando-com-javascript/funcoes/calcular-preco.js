function calcularPreco(precoDaEtiqueta, opcaoDePg) {

    if (opcaoDePg === 1) {
    return (precoDaEtiqueta - (precoDaEtiqueta * 0.1))
    } else if (opcaoDePg === 2) {
    return (precoDaEtiqueta - (precoDaEtiqueta * 0.15))
    } else if (opcaoDePg === 3) {
    return (precoDaEtiqueta)
    } else if (opcaoDePg === 4) {
    return (precoDaEtiqueta + (precoDaEtiqueta * 0.1))
    }
}

console.log(' Você deve pagar: '+calcularPreco(100,4))