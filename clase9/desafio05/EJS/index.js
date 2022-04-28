const express = require("express")
const app = express()
const arr = require("./data") //traigo el array//
app.listen(8080,()=>{
    console.log("server corriendo")
})

app.set("view engine","ejs")  //plantilla//
app.set("views","./views")   //carpeta y ruta//
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url
 
//enpoint para obtener productos del servidor//
app.get("/",(req,res)=>{
    res.render("index",{titulo:"bienvenidos",data : arr}) //le paso tmb, una variable y data//
})
//enpoint para guardar los productos en el server//
app.post("/",(req,res)=>{
    res.render("home",{titulo:"bienvenidos",data : arr}) //luego de guardar producto, renderiza el view home
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





//app.get("/productos",(req,res)=>{
  //  res.render("productos",{data: arr})
//})
