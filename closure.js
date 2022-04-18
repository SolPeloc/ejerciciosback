
function saludo(saludo){
        return function(nombre){
            return saludo + " " + nombre
        }
    }


    //let saludoFinal = saludo()
    console.log(saludo("hola")("sol")) //ejecucion de saludo y ejecucion de anonima

// OTRA FORMA//
function saludo(saludo){
    return function(nombre){
        return saludo + " " + nombre
    }
}

let saludoFinal = saludo("hola")// guardo en variable la funcion saludo, su ejecucion

console.log(saludoFinal("sol")) // ejecucion de funcion anonima//

//TEMPLATE STRING// con comillas invertidas ( alt 96 en teclado)


let nombre = "bel"

console.log(`hola ${nombre}`) // interpolacion de variable, ${}, hace referencia a una variable//