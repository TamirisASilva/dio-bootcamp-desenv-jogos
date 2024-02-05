const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 34, 94, 56, 67, 997, 668, 49, 140,]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Numeros pares: ${numeros[i]}`);
    }else{
        console.log(`Numeros impares: ${numeros[i]}`);
    }

}