const express = require("express")
const app = express()
const arr = require("./data") //traigo el array//
app.listen(8080,()=>{
    console.log("server corriendo")
})
//seteo pug//
app.set("view engine","pug") //le digo al server que utilizo pug//
app.set("views","./views") //donde va a estar ubicado, y el nombre/
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url//

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/productos",(req,res)=>{        //ruta para productos
    res.render("productos",{data : arr})               //le paso el objeto donde esta el array//
})
app.post("/",(req,res)=>{
    res.render("index")
    console.log(req.body)
    let {nombre,precio,img} =req.body     //desestructurar req.body con las propiedades a usar
    let prodnuevo = {
        nombre,
        precio,
        img,
        id: arr.length + 1       //le va agregando a cada producto nuevo un id incremental//
  }
  arr.push(prodnuevo)       //pusheo el nuevo producto al arr
})

app.get("/formulario",(req,res)=>{
    console.log(req.body)            ////con body capturo la info q me quieren pasar para guardar//
    res.render("formulario")
})
