function contarVocales(palabra){
    const vocales = "aeiouAEIOU"
    let contadorVocales = 0

    for (let i = 0; i < palabra.length; i++){
        if (vocales.includes(palabra[i])){
            contadorVocales++;

        }
    }

    console.log(`la palabra "${palabra}" tiene ${contadorVocales} vocales`)
}

contarVocales("tostadora")