//configuracion knex//
const knex  = require("knex")({      //traigo la dependencia, es una funcion, entonces la ejecuto()//
  client:"mysql",              //nombre del motor de bd//
  connection:{                     //propiedades q necesito para la coneccion a la bd
    host:"127.0.0.1",               //donde vemos desplegado el servidor para mysql(localhost o 127.0.0.1 )  
    port:3306,                      //puerto q abre mysql
    user:"root",                               //usuario para conectarnos a mysql
    password:"",                                //contraseña, para conectarnos a mysql//
    database:"database00"                    //bd, a la cual me quiero conectar
  },
  pool:{ min: 2, max:8 }                       //hilos de concurrencia, consultas(organiza en filas de 8 y una debajo de otra)
                                                
}) 
 
knex.schema.createTableIfNotExists("productos",function(table){
  table.increments("id").primary() //id incremental y como dato unico con primary
  table.string("nombre")  //pongo el tipo de dato y el nombre del campo que quieres crear
  table.string("precio") 
  table.string("descripcion")
  table.string("img")
}) // aca creo una tabla siempre y cuando no exista con los campos que quiera, si existe, no tengo q crear esto//
.then(()=>{
  console.log("conexion y tabla productos creada")
})
.catch((err)=>{
 throw err
})





module.exports = knex

