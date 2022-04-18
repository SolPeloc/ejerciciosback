

let arrayes = ["rojo","blanco","azul","lila"];


console.table(arrayes)

let objetitos = {
    nombre: "sol",apellido:"p",edad: 32
}
console.table(objetitos)
console.log(objetitos.apellido) //acceder a una propiedad//
let usuarios =[
    { nombre: "sol",apellido:"p",edad: 32},
    { nombre: "rami",apellido:"s",edad: 42},
    { nombre: "sofia",apellido:"s",edad: 2}
]
console.table(usuarios)
console.log(usuarios[1])// acceder a un objeto segun posición//

//variables//

var nombrePila = "sol" // varible declarado en entorno global//





function entorno() { 
    //entorno local, lo que esta dentro de esta funcion {}//
    var nombre = "sol";
            if(true){
            var nombre = "sole"
            console.log(nombre)
            }
   
}
 entorno()
// var no respeta el entorno de donde se declara la variable, la pisa, ignora {}//

function entorno() { 
    
    let nombre = "sol";
        if(true){
        let nombre = "sole"
        console.log(nombre)
        }
   
}

entorno()
// let respeta el entorno de donde se declaro la viable//

//FUNCIONES//

function foo(){
  return  1 + 2    //instrucciones// la palabra reservada return, es para que devuelva el resultado.
}

foo() //ejecución de funcion//
console.log(foo())

//parametros de una función//

function multi(num1,num2) {
    return num1 * num2

}
multi()
console.log(multi(5,5)) //valores de los parámetros

//FUNCIONES ANONIMAS//
//definidas a traves de una variable//

let funcionSol = function(n1,n2){
    return n1 + n2

}
console.log(funcionSol(5,2))

//SCOPE//
//ambiente donde se crea, ejecuta, variables, funciones..//

 //let num = 100  //variable definida en el scope global//

    function resta (){
        let numero = 150//variable definida en el scope de la funcion/local//
        //scope local//
        
    }
    console.log(numero) //aca no puedo acceder a numero xq esta definida en local//
    resta()//ejecuto funcion//



function resta (){
    let numeros = 180 //variable definida en el scope de la funcion/local//
    //scope local//
    console.log(numeros)
}
 //aca SI puedo acceder a numero xq esta definida en local//
resta()//ejecuto funcion//


