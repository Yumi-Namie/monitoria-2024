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
function validarContrasena(contrasena){

    let esValida = false;

    while (!esValida) {
        if (contrasena.length >= 6) {
            esValida = true;
            console.log("La contraseña  es valida")
        } else {
            esValida = false;
            console.log("La contraseña no es valida")
            break
        }
    }
}

// validarContrasena("tostadera")