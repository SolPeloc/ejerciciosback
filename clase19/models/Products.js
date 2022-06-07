const { Schema, model } = require("mongoose")//desestructuro mongo con los metodos que quiero usar
//creación de esquema para la collección//
const productSchema = new Schema({           
  nombre :{                   //aca pongo las propiedades que quiero que tenga cada producto, con sus reglas
      type:String, 
      required:true           //con esto aseguro que tenga esa propiedad, nombre
  }, 
  descripcion : String,                // si tengo solo una regla, asi//
  precio:{
      type:Number,
      default:0
  },
  stock:{
      type:Number,
      default:0
  }

})

//creación de colleccion//

module.exports = model("producto",productSchema )//le paso el nombre de la collección y el esquema creado.
