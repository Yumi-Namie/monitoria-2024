//FUNCIONES

//sumar 5
function sumarCinco(numero) {
    const resultado = numero + 5
    console.log(`Resultado de sumar 5: ${resultado}`)
    return resultado
}

//MULTIPLICAR 2
function multiplicarDos(numero){
    const resultado = numero * 2
    console.log(`Resultado de multiplicar por 2: ${resultado}`)
    return resultado
}
//RESTAR 3
function restarTres(num){
    const result = num - 3
    //num - 3
    console.log(`resultado de restar tres: ${result}`)
    return result()
}
//LLAMAR FUNCIONES
const resultadoSuma = sumarCinco(2)
const multiplicar = multiplicarDos(10)
const restar = restarTres(5)