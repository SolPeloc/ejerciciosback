const express = require("express")
const app = express()
const arr = require("./data") //traigo el array//
const PORT = process.env.PORT || 8080 //para que cuando este en la nube eliga entre los dos
app.listen(PORT,()=>{
    console.log("server corriendo " + PORT)
})
app.use(express.static("public")) //para que sepa la ubicacion los archivos estaticos//
app.set("view engine","ejs")  //plantilla//
app.set("views","./views")   //carpeta y ruta//
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url//

const contenedorProd = require("./Contenedores/productos")//Traigo mi constructor
const prodApi = new contenedorProd("productos.json") //creo mi archivo que va a guardar los productos//

                                      
//enpoint para obtener productos del servidor//
app.get("/",(req,res)=>{
   // let productos = prodApi.getAll()
    res.render("productos",{titulo:"bienvenidos", data : arr} ) //le paso tmb, una variable y data//
    
})
//enpoint para guardar los productos en el server//
app.post("/",(req,res)=>{
    if(req.query.admin){
        res.render("productos",{titulo:"bienvenidos",data : arr}) //luego de guardar producto, renderiza el view home
        console.log(req.body)
        let {nombre,precio,img} =req.body     //desestructurar req.body con las propiedades a usar
        let prodnuevo = {
            nombre,
            precio,
            img,
            id: arr.length + 1       //le va agregando a cada producto nuevo un id incremental//
      }
      arr.push(prodnuevo)       //pusheo el nuevo producto al arr
    }else{
        res.send("no esta autorizado")
    }
    
})

app.get("/formulario",(req,res)=>{
    console.log(req.body)            ////con body capturo la info q me quieren pasar para guardar//
    res.render("formulario")
})

const productosrutas = require("./rutas/productos") //traigo el fichero de ruta productos//
const carritorutas = require("./rutas/carrito")  //traigo el fichero de ruta carrito//


app.use("/api",productosrutas)         //metodo, que se ejecuta antes de entrar a todo funcionamiento de mi aplicacion//
                                      //le digo q cree un patch anterior, en todas las rutas//

app.use("/api",carritorutas) 
                                      


//app.get("/productos",(req,res)=>{
  //  res.render("productos",{data: arr})
//})
