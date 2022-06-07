const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://solpcoder:1234@clusterecommerce.qfdve54.mongodb.net/ecommerce?retryWrites=true&w=majority")//en : pongo la contraseña y luego de .net/ pongo el nombre de bd a conectar//

//validación de conección//
mongoose.connection.on("open", () =>{
    console.log("base datos en mongo atlas conectada")
})
mongoose.connection.on("error",(err)=>{
    console.log("error en la conección ", err)
})

//hacemos una colección//
const {Schema,model} = mongoose

const prodschema = new Schema ({
    nombre:{type:String,required:true},
    precio:{type:Number,required:true}
})

model("producto",prodschema)