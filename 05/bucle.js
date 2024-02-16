//Problema 1: Contar Vocales en una Palabra - for
function contarVocales(palabra) {
    const vocales = "aeiouAEIOU"
    let contadorVocales = 0

    for (let i=0; i < palabra.length; i++ ){
        if(vocales.includes(palabra[i])) {
            contadorVocales++;
        }
    }

    console.log(`la palabra "${palabra}" tiene ${contadorVocales} vocales`)
}

//Llamar la funcion
contarVocales("Tostadora")

//Problema 2: Validar Contraseña - while