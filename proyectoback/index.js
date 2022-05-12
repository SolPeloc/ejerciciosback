const express = require("express")
const multer = require("multer")// con esto cargo archivos en mi servidor//
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT = process.env.PORT || 8080 //para que cuando este en la nube eliga entre los dos
//configuracion multer//
let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"upload")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)//aca va el nombre que quieras ponerle al achivo + el original
    }
})
let upload = multer({storage}) //aca ya con el upload definido puedo usar todos los metodos para cargar archivos//

app.get("/formulario",(req,res)=>{
    res.sendFile(__dirname+"/public/formulario.html") // en el principal uso el formulario de ingreso de productos nuevos//
    console.log(req.body) 

})
 //endpoint de ingreso de productos
app.post("/", (req,res) =>{  
   
     let{nombre , precio ,} = req.body
     let nuevoproducto = {
         nombre,
         precio, 
        
     }
 console.log(nuevoproducto)
 res.sendFile(__dirname+"/public/productos.html")
 
                                             
})





const productosrutas = require("./rutas/productos") //traigo el fichero de ruta productos//
const carritorutas = require("./rutas/carrito")  //traigo el fichero de ruta carrito//

app.use("/api",productosrutas)         //metodo, que se ejecuta antes de entrar a todo funcionamiento de mi aplicacion//
                                      //le digo q cree un patch anterior, en todas las rutas//

app.use("/api",carritorutas) 
                                      
//app.use("/static",express.static("public")) //le aviso a mi servidor que voy a usar archivos estaticos//
app.use(express.static("public")) //para que sepa la ubicacion los archivos estaticos//



app.listen(PORT,()=>{                        
    console.log("server corriendo " +  PORT)
})


