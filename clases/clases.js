// con class creamos clase, con constructor(metodo) con sus parametros si se necesita señalizamos las propiedades de la clase tal//
class Usuario {
    constructor(nombre,apellido){
       this.nombre = nombre
       this.apellido = apellido
       this.mascotas = mascotas
       this.libros = libros
    }
    //metodos//
    getFullName(){
        return (`${this.nombre} ${this.apellido} `)
    }
    addMascotas(mascota){
       this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombr,aut){
       this.libros.push({nombre:nombr,autor: aut})
    }
    getBookName(){
        return this.libros.map(libros => libros.nombre)
    }

}

//instancio las personas que quiero crear a traves de mi clase Persona//

let usuario1 = new Usuario ("SOL","PELOC", mascotas=["perro", "gato"],libros =[{nombre:"harry poter", autor :"J.K. Rowling"}])


usuario1.addMascotas("conejo")
usuario1.addBook("cielo y mar","charles j.")
console.log(usuario1.getBookName())
console.log(usuario1.getFullName())
console.log(usuario1.countMascotas())