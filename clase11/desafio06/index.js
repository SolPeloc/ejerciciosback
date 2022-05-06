const express = require("express")
const app = express()
const router = require("./routes/index") //importo router
const PORT = process.env.PORT || 8080  //para que cuando este en la nube eliga entre los dos
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url
app.use(express.static("public")) //archivos estaticos

const contenedorProd = require("./Contenedores/productos") //Traigo mi constructor
const prodApi = new contenedorProd("productos.json") //creo un nuevo
//server//

const http = require("http")
const server = http.createServer(app)
server.listen(PORT,()=>{       
    console.log("server corriendo"  + PORT)
})

//configuracion socket.io//
const {Server} = require("socket.io")
const io = new Server(server)
//coneccion io//
io.on("connection",(socket)=>{
console.log("un cliente se conecto!")
socket.emit("mensaje_back","hola soy el back")//le envio 1er mensaje al front//
////socket.emit("crearproducto",(data) =>{
////let {nombre, precio, img} = data
//let nuevoprod = {nombre, precio, img}
//prodApi.save(nuevoprod)
//})
socket.emit("dataproductos",prodApi.getAll()) //envio el array de productos al front
socket.on("mensaje_cliente",(data)=>{
    console.log(data)
})



})

//configuracion rutas//
app.use("/api",router) //configuro el prepath para todas las rutas//

//configuracion ejs//
app.set("view engine","ejs")
app.set("views","./views")