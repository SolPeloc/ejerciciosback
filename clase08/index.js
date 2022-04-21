const express = require("express")

const app = express()

const productosrutas = require("./rutas/productos") //traigo el fichero de ruta//

app.use("/api",productosrutas)         //metodo, que se ejecuta antes de entrar a todo funcionamiento de mi aplicacion//
                                      //le digo q cree un patch anterior, en todas las rutas//


app.use("/static",express.static("/public")) //le aviso a mi servidor que voy a usar archivos estaticos//

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html") //le estoy enviando un archivo html
})

app.listen(8080,()=>{                        
    console.log("server corriendo")
})


