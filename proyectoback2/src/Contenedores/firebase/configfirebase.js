import admin from "firebase-admin"
//const admin = require("firebase-admin");
import config from "../../config" //traigo la configuracion de fb


admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: "http://databack.firebaseio.com" //nombre de mi base de datos//
});

console.log("conexion a firebase okk")

const db = admin.firestore() 

//const query = db.collection("productos")                     //para ejecutar los metodos, nombre de coleccion



class ContainerFirebasedb  {
 constructor(coleccion){
  this.coleccion = db.collection(coleccion)
 }
  
 async saveItem (object) {
  try{
      let elem = await this.coleccion.add(object) //agrego doc nuevo 
      return {...object, id : elem.id }
    } catch (error){
      throw new Error(`Error al guardar: ${error}`)
  }
}

async getAll(){
  try {
      const result = []
      const snapshot = await this.coleccion.get();
      snapshot.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
      })
      return result
  } catch (error) {
      throw new Error(`Error al traer todo: ${error}`)
  }
}

async getById(id){
  try {
      const doc = await this.coleccion.doc(id).get();
      if (!doc.exists) {
          throw new Error(`Error al traer por id: no se encontró`)
      } else {
          const data = doc.data();
          return { ...data, id }
      }
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

async updateItem(elem) {
  try {
      const docupdate = await this.coleccion.doc(elem.id).set(elem);
      return docupdate
  } catch (error) {
      throw new Error(`Error al actualizar: ${error}`)
  }
}

    
}
export default ContainerFirebasedb