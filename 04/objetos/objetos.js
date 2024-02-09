// >> OBJETOS -> Un elemento que creamos y que tienes propriedades definidas em:
// {clave : valor}

/* >> Para probar en VSC, se puede usar el terminal (en ela carpeta del archivo) y 
ejecutar con node + nombre_archivo (node objetos.js)*/

// >> objeto 1:
let perro1 = {nombre:"rex", edad:5, vivo:true};
// >> objeto 2:
let perro2 = {nombre:"toby", edad:8, vivo:false};


// console.log(perro1);
// console.log(perro2);
// console.log("el nombre del perro2 es: " + perro2.vivo);


// function Dog (nombre, edad, vivo) {
//   this.name = nombre;
//   this.age = edad;
//   this.life = vivo
// }

class Dog {
  constructor(nombre, edad, vivo) {
    this.name = nombre;
    this.age = edad;
    this.life = vivo
  }
}

let perro3 = new Dog("Pity", 3, true)

// console.log(perro3)

//LISTA DE OBJETOS
let dogList = [perro1, perro2, perro3]
console.log("Array:", dogList)

gatos = [
  {
    name:"felix",
    edad:"5"
  },
  {
    name:"Tom",
    edad: "3"
  }
]

// console.log(gatos[1])














/*otro ejemplo con metodo dentro de un objeto*/
// const persona = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 30,
//     saludar: function() {
//       console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
//     }
//   };

//   persona.saludar();
  // Hola, mi nombre es Juan Pérez y tengo 30 años

/*Encontrar key*/
//   const myObject = {name: "John", age: 30};
// const valueToFind = 30;
// let keyToFind;

// for (const key in myObject) {
//   if (myObject[key] === valueToFind) {
//     keyToFind = key;
//     break;
//   }
// }

// console.log(keyToFind); // Output: age