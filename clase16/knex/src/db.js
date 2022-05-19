//configuracion knex//
const knex  = require("knex")({      //traigo la dependencia, es una funcion, entonces la ejecuto()//
  client:"mysql",              //nombre del motor de bd//
  connection:{                     //propiedades q necesito para la coneccion a la bd
    host:"127.0.0.1",               //donde vemos desplegado el servidor para mysql(localhost o 127.0.0.1 )  
    port:3306,                      //puerto q abre mysql
    user:"root",                               //usuario para conectarnos a mysql
    password:"",                                //contraseña, para conectarnos a mysql//
    database:"databasecoder"                    //bd, a la cual me quiero conectar
  },
  pool:{ min: 2, max:8 }                       //hilos de concurrencia, consultas(organiza en filas de 8 y una debajo de otra)
                                                
}) 
 
knex.schema.createTableIfNotExists("usuarios",function(table){
    table.increments("id").primary() //id incremental y como dato unico con primary
    table.string("nombre")  //pongo el tipo de dato y el nombre del campo que quieres crear
    table.string("email",130) //aca le pongo un max de caracteres, un min seria(not null)
    table.string("contraseña")
}) // aca creo una tabla siempre y cuando no exista con los campos que quiera, si existe, no tengo q crear esto//
.then(()=>{
    console.log("conexion y tabla creada")
})
.catch((err)=>{
   throw err
})





module.exports = knex

