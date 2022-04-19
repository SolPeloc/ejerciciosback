
//funcion constructora de persona// su definicion comienza en mayúscula//
//a partir de aca puedo construir varias personas, nombre, es el parametro que vamos a pasar
//como valor a la propiedad name//
function Persona(nombre){
  // con el this. le estoy dando contexto a la funcion, tenemos 2 propiedades
  // name y saludar.

   this.name = nombre 

   this.saludar = function () {
        return ("hola " + this.name)
     }
     Persona.prototype.correr = function(){   //prototypes// es un objeto, aca tengo un metodo correr dentro de mi constructor Persona//
        return ("corriendo!!" + this.name)
    } 
}
//ejemplo de creacion de personas, con new creo un nuevo objeto, persona nueva, que creamos
//a partir de la funcion constructora Persona//

let persona1 = new Persona("ram")
let persona2 = new Persona("sol")
let persona3 = new Persona("LUNA")

console.log(persona1.name) // al ser objetos puedo acceder a su valor con su propiedad .name//
console.log(persona2.saludar())//accedo a la propiedad funcion con su valor HOLA


console.log(persona1.saludar()) // hola ram//
console.log(persona3.correr()) // esto sirve para solo utilizar el metodo que quiera sin tener que 
//tmb acceder a las propiedades o demas metodos de todo el constructor Persona// corriendo!! LUNA
  
  



// aca le estoy creando un metodo al constructor String, con la funcion de dar vuelta los caracteres//
String.prototype.reverses = function(){
    return this.split("").reverse().join("") //reverse(invierte el orden de los elementos) 
    //y join(une  los elementos)son metodos de los arrays
}
 
console.log("sol".reverses()) //los//
