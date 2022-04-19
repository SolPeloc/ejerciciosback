
function lista(){
    let arrayitos = ["luna","sol", "estrella"]
    if(arrayitos.length == 0){
        return "lista vacia"
    }else{
        return arrayitos.toString() // con to string, hago que me traiga en texto el array
    }
   
}
console.log(lista())
//ejemplo con funcion anonima//

let listaAnonima = function(){
       let arrayeres = ["bel","sol","san"]
       if(arrayeres.length > 0){
           return arrayeres.toString()
       }else{
           return `lista vacia `
       }
}
console.log(listaAnonima())