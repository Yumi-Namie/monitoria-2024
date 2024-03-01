/*
01 -Te encuentras en una tienda de frutas y deseas imprimir en mayúsculas el nombre de cada fruta en tu lista hasta que encuentres la fruta "uva". Una vez que encuentres la "uva", quieres que el programa se detenga y muestre un mensaje indicando que la encontraste.
*/
let frutas = ["manzana", "banana", "uva", "fresa", "pera"];
let indice = 0
function frutas () {
    while (indice < frutas.length){
        //transformar palabras en uppercase
        let frutasMayuscula = frutas[indice].toUpperCase();
        console.log("fruta " + frutasMayuscula);
        indice ++;
        
        // imprimir mensaje cuando encontrar uva
        if (frutas[indice] === "uva") {
            console.log("Encontramos la uva")
            break
        }
    }
}




/*
Imagina que estás contando billetes en una caja registradora y quieres imprimir cada cantidad hasta que alcances un total de 180 dólares. → billetes [100, 50, 20, 10, 5]
 */

/*
Supongamos que estás trabajando con una lista de números y deseas imprimir cada número hasta que encuentres el número 7. Cuando encuentres el 7, deseas que el programa se detenga y muestre un mensaje indicando que lo encontraste.
*/

/*
Imagina que estás organizando una carrera de animales y quieres simular el proceso de contar cuántos animales han cruzado la línea de meta. Quieres imprimir el nombre de cada animal y su posición en la carrera hasta que todos los animales hayan terminado.
*/