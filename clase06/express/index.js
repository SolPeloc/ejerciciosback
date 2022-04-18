const express =  require("express")
const path = require("path")
const app =  express()                                   // guardamos en una constante a express junto con sus metodos//
                                                         //app hace referencia a una aplicacion nueva de express,servidor//
const PORT = process.env.PORT || 8585          //guardo el puerto en una constante, para que pueda tomarlo el servidor remoto o local//
//a cada ruta, se le llama endpoint//
let contador = 0                        //variable global//
app.get("/",(req,res)=>{          //metodo que te permite obtener algo//
 res.send("<h1> hola como estas? </h1>")     //aca le respondo con send, con una etiqueta//
})                          

//ejemplo con html//
app.get("/productos",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))     //utilizamos el método sendfile, para enviar archivos//
})                                                       //usamos modulo nativo path, lo traemos con el requiere
                                                        //y utilizamos join para ponerle la ruta absoluta dirname, y el archivo a enviar

app.get("/objetos",(req,res)=>{          //metodo que te permite obtener algo//
 res.json({mensaje:"hola"})              //aca le respondo con send o json, con un objeto//
})                          


app.get("/visitas",(req,res)=>{          //metodo que te permite obtener algo//
    contador ++
    res.send({visitas: contador})       //aca le respondo con send o json, con un objeto de lo que contador esta acumulando//
   })                                        //cada vez que actualizo la pag, se va sumando//




//ahora abro el puerto, para escuchar, un puerto y callback//
app.listen(PORT,()=>{
 console.log("server en puerto 8585")
})