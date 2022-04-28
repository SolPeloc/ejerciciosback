const express = require("express")
const { engine } = require("express-handlebars") //traigo el motor de plantilla
const app = express()
app.set("view engine","hbs")         //aca le estoy diciendo q voy a usar un motor de plantilla y es hbs//
app.set("views","./views")         //aca aviso q las views, se guardan en carpeta views, y le paso la ruta//
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url

//seteo handlebars//
app.engine("hbs",engine({
    extname: ".hbs",
    defaultLayout:"main.hbs",
    layoutsDir:__dirname+"/views/layouts",//carpetas layouts//
    partialsDir:__dirname + "/views/partials"  //carpetas partials//
}))


let arr = require("./data") //traigo el array externo//
 
//enpoint para obtener productos del servidor//
app.get("/",(req,res)=>{
    res.render("homewiev",{layout:"main",titulo:"Tienda ATIA"})   //aca uso metodo render,le digo que renderice el archivo con extension hbs//
})                                                // y tmb, un objeto, lo que quiero q muestre en vista, en index{{titulo}}

//enpoint para guardar los productos en el server//
app.post("/",(req,res)=>{
    res.render("homewiev",{layout:"main",titulo:"producto guardado"}) //luego de guardar producto, renderiza el view home
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
//enpoint para guardar los productos en el server//
app.get("/productos",(req,res)=>{
    res.render("productos",{layout:"index",data : arr}) //aca le estoy diciendo que renderice la vista productos en el index//
})
app.get("/formulario",(req,res)=>{
    console.log(req.body)            ////con body capturo la info q me quieren pasar para guardar//
    res.render("formulario")
})
app.listen(8080,()=>{
    console.log("server corriendo")
})

