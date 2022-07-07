//import {Db} from "mongodb"
import mongoose  from "mongoose"//traigo la dependencia//
    
import config from "../../config.js" //traigo la conf de db
 await mongoose.connect(config.mongodb.conne)
//verificación de conección//
//mongoose.connection.on("open",()=>{
  //  console.log("base de datos conectada con exito")
//})
//mongoose.connection.on("error",()=>{
   // console.log("error al conectarse a la db")
//})



class MongodbContainer {
    constructor(nombre, esquema){
        this.coleccion = mongoose.model(nombre,esquema)
    }

    async saveItem(object){
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
           await this.coleccion.find()
          

        }catch (error) {
            throw Error(`Error al traer todos ${error}`)
        }

      }

      



   async getById(id){

   try {  let doc =    await  this.coleccion.findOne({_id : id})
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
   
 async updateItem (element){
    let docMod = await this.coleccion.replaceOne({_id : id},{})
    return docMod
  }




}
export default MongodbContainer