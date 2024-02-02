const precoDaEtiqueta = 200;
const opcaoDePg = 4;



if (opcaoDePg === 1) {
    console.log(precoDaEtiqueta - (precoDaEtiqueta * 0.1))
} else if (opcaoDePg === 2) {
    console.log(precoDaEtiqueta - (precoDaEtiqueta * 0.15))
} else if (opcaoDePg === 3) {
    console.log(precoDaEtiqueta)
} else if (opcaoDePg === 4) {
    console.log(precoDaEtiqueta + (precoDaEtiqueta * 0.1))
}
