const mongoose = require("mongoose")//traigo la dependencia//
//mongoose.connect("mongodb://localhost:27017/database01")            //con este método, puedo poner la url del entorno de mdb y la db, que yo voy a conectar

//verificación de conección//
mongoose.connection.on("open",()=>{
    console.log("base de datos conectada con exito")
})
mongoose.connection.on("error",()=>{
    console.log("error al conectarse a la db")
})