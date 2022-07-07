//const express = require("express")
import express from "express"
import {prodrouter as productosrutas} from "../rutas/productos.js"
import {carrrouter as carritorutas} from "../rutas/carrito.js"
const app = express()
const PORT = process.env.PORT || 8080 //para que cuando este en la nube eliga entre los dos
app.listen(PORT,()=>{
    console.log("server corriendo " + PORT)
})



app.use("/api/",productosrutas)         //metodo, que se ejecuta antes de entrar a todo funcionamiento de mi aplicacion//
                                      //le digo q cree un patch anterior, en todas las rutas//

app.use("/api",carritorutas) 
                                      


app.use(express.static("public")) //para que sepa la ubicacion los archivos estaticos//
app.set("view engine","ejs")  //plantilla//
app.set("views","./views")   //carpeta y ruta//
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url//


import {isAdmin} from "../src/Contenedores/admin.js"

app.get("/",(req,res)=>{
   // res.render("home" )    
})



app.get("/formulario",isAdmin,(req,res)=>{
  //  console.log(req.body)            ////con body capturo la info q me quieren pasar para guardar//
   // res.render("formulario")
})

