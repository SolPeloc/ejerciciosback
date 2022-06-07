const mongoose = require("mongoose")//traigo la dependencia//
mongoose.connect("mongodb://localhost:27017/ecommerce")            //con este método, puedo poner la url del entorno de mdb y la db, que yo voy a conectar

//verificación de conección//
mongoose.connection.on("open",()=>{
    console.log("base de datos conectada con exito")
})
mongoose.connection.on("error",()=>{
    console.log("error al conectarse a la db")
})



class Mongodb {
    constructor(nombre, esquema){
        this.coleccion = mongoose.model(nombre,esquema)
    }

    async save(object){
      try { 
          let docNew = await this.coleccion.create(object)
         return docNew
         } catch(error)
         {
            throw Error('Error al guardar')
      }
     }
    




   async   getAll(){
       try { 
           let docs =   await this.coleccion.find()
           return docs

        }catch (error) {
            throw Error(`Error al traer todos ${error}`)
        }

      }

      



   async getById(id){

   try {  let doc =    await  this.coleccion.findOne({_id :id})
       return doc

    }catch (error) {
        throw Error(`Error al traer por id ${error}`) 
    }

   }

  
 
   async deleteById (id) {
    try {
      const doc = await this.coleccion.findOneAndDelete({ _id: id })
      if (doc) {
        return doc
      } else {
        return { err: 'Error en doc, id no encontrado' }
      }
    } catch (error) {
     
      throw Error(`Error en el deleteById ${error}`)
    }
  }
 

async deleteAll () {
    try {
      await this.coleccion.deleteMany({})
      return { msg: 'Todos los productos borrados' }
    } catch (error) {
     
      throw Error(`Error al borrar ${error}`)
    }
  }
 //este no se como hacerlo//
   
 async update (element){
    let docMod = await this.coleccion.replaceOne({_id : id},{})
    return docMod
  }




}
