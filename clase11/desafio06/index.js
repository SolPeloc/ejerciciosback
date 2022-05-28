const express = require("express")
const moment = require("moment")
const app = express()
const router = require("./routes/index") //importo router
const PORT = process.env.PORT || 8080  //para que cuando este en la nube eliga entre los dos
app.use(express.json()) //formatea la data a json//
app.use(express.urlencoded({extended:false}))           //formatea la url
app.use(express.static("public")) //archivos estaticos

const contenedorProd = require("./Contenedores/productos.js")//Traigo mi constructor
const prodApi = new contenedorProd("productos.json") //creo mi archivo que va a guardar los productos//
const mensajeApi = new contenedorProd("mensajes.json")
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
let productos = prodApi.getAll()      //guardo en una variable el metodo que me trae los productos

socket.emit("dataproductos",productos) //envio los productos al front x 1era vez
socket.on("mensaje_cliente",(data)=>{  //escucha mensaje del front por la coneccion//
    console.log(data)
})
        socket.on("agregarproductos",(data)=>{  //escucho el mensaje del nuevo producto a guardar
            let {nombre, precio, img} = data
            let nuevoprod = {nombre, precio, img}
            prodApi.save(nuevoprod)                  //guardo el nuevo producto//
            
        productos = prodApi.getAll()                    
        io.sockets.emit("dataproductos",productos)     //le vuelvo a enviar los productos x segunda vez, y para todos los clientes
                
    })

    //CHAT//
    let mensajes = mensajeApi.getAll()         //guardo en variable metodo que me trae los mensajes//
    socket.emit("mensajes",mensajes)          //envio de mensajes al front
    socket.on("nuevomensaje",(data)=>{
        data.date = moment().format("DD/MM/YYYY HH:mm:ss") //esto no se como aplicarlo//
        let {nombre,mensaje,date} = data 
        let nuevomsn = {nombre, mensaje,date}
        mensajeApi.save(nuevomsn)
        mensajes = mensajeApi.getAll()
        io.sockets.emit("mensajes",mensajes)
    })

})

//configuracion rutas//
app.use("/api",router) //configuro el prepath para todas las rutas//

//configuracion ejs//
app.set("view engine","ejs")
app.set("views","./views")