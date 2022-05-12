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

//const contenedorProd = require("./Contenedores/productos")//Traigo mi constructor
//const prodApi = new contenedorProd("productos.json") //creo mi archivo que va a guardar los productos//


app.get("/",(req,res)=>{
    res.render("home" )    
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
                                      



