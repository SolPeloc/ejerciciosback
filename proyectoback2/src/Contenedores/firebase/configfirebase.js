const {v4 : uuidv4}= require("uuid")
const admin = require("firebase-admin");

const serviceAccount = require("./databack-4058d-firebase-adminsdk-jadsx-e1e5dc645b.json");//llave de firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "http://databack.firebaseio.com" //nombre de mi base de datos//
});

console.log("conexion a firebase okk")

const db = admin.firestore() 

const query = db.collection("productos")                     //para ejecutar los metodos, nombre de coleccion



class Firebasedb  {
 constructor(coleccion){
  this.coleccion = db.collection(coleccion)
 }
  
 async save (object) {
  try{
     let id = this.coleccion.doc(uuidv4)//asigno id con uuid
      let doc = await this.coleccion.add(object) //agrego doc nuevo
       
      return {...doc, id }
    } catch (error){
      throw new Error(`Error al guardar: ${error}`)
  }
}

async getall(){
    try{
            let docs = await this.coleccion.get()
          return docs
        }catch{
          throw new Error(`Error al traer todos: ${error}`)
        }
}

async getById(id){

        try {
          const doc = await this.coleccion.doc(id).get();
          return doc
      } catch (error) {
          throw new Error(`Error al traer por id: ${error}`)
      }

}

async deleteById(id){
      try {
        const item = await this.coleccion.doc(id).delete();
        return item
    } catch (error) {
        throw new Error(`Error al borrar: ${error}`)
    }
}

async update(doc) {
  try {
      const docupdate = await this.coleccion.doc(doc.id).set(doc);
      return docupdate
  } catch (error) {
      throw new Error(`Error al actualizar: ${error}`)
  }
}

    
}