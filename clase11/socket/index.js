const express = require("express")
const app = express()
app.use(express.static("views")) //le aviso a mi server que voy a usar archivos estaticos//
const http = require("http")//modulo nativo http//

const server = http.createServer(app) //creo  un server por medio de http y envuelvo a app, de express, para ejecutarlo//

server.listen(8080,()=>{         //aca seria server, que tiene a app dentro//
    console.log("server corriendo")
})

 //ARRAY DEL CHAT//
let arrChat = []
//configuracion de socket//

const{Server} = require("socket.io")
const io = new Server(server)  //con esta constante puedo abrir canales de websocket//
//coneccion//
io.on("connection",(socket)=>{       //para escuchar eventos, la coneccion del cliente,//
                                    //luego callback, con objeto socket.en esta callback va a estar toda la logica//
      socket.emit("mensajes",arrChat) // por emit, envio, el titulo del mensaje y el mensaje(el array con los mensajes) al FRONT x 1era verz//
      socket.on("mensaje_cliente",(data)=>{     //aca escucho el mensaje del FRONT, el titulo y la data//
        console.log(data)
      })
      socket.on("datamensajes",(data)=>{        //aca escucho otro mensaje del front//
      console.log(data)
      arrChat.push(data)                             //pusheo de mensajes al array
     // socket.emit("mensajes",arrChat)          //x segunda vez, actualizado al front luego del push//
     io.sockets.emit("mensajes",arrChat)         // con esto, encucha varios sockets al mismo tiempo y enviar a varios clientes//
      })

})                         

 //RUTAS//
 app.get("/chat",(req,res)=>{
     res.sendFile(__dirname+"/public/index.html")                         //le envio archivo html
 })