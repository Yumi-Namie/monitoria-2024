//funciones

//sumar 5
function sumarCinco(numero) {
    const resultado = numero + 5
    return resultado
}

//MULTIPLICAR 2
function multiplicarDos(numero){
    const resultado = numero * 2
    return resultado
}
//RESTAR 3
function restarTres(num){
    const result = num - 3
    return result
}

//imprimir el resultado
function mostrarResult(resultado){
    console.log(`Resultado: ${resultado}`)
}

//funcion realizar una operacion y mostrar resultado
function realizarOperacion(operacion, numero){
    const resultado = operacion(numero);
    mostrarResult(resultado)
}

//llamar funcion
realizarOperacion(sumarCinco, 10)

