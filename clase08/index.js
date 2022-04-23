const express = require("express")
const multer = require("multer")// con esto cargo archivos en mi servidor//
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
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

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/productos.html") //le estoy enviando un archivo html
})
 //endpoint de ingreso de productos
app.post("/", upload.single("mifile"), (req,res) =>{  //en single le digo el nombre del input,el q va a encontrar el archivo//
    const file = req.file                           //guardo la info del archivo
   if(!file){
    return  res.status(400).send({mensaje:"producto no encontrado"})
      
   }
     let{nombre , precio ,} = req.body
     let nuevoproducto = {
         nombre,
         precio, 
        
     }
 console.log(nuevoproducto)
  res.send("producto guardado")
                                             
})





const productosrutas = require("./rutas/productos") //traigo el fichero de ruta//

app.use("/api",productosrutas)         //metodo, que se ejecuta antes de entrar a todo funcionamiento de mi aplicacion//
                                      //le digo q cree un patch anterior, en todas las rutas//

                                      
app.use("/static",express.static("public")) //le aviso a mi servidor que voy a usar archivos estaticos//




app.listen(8080,()=>{                        
    console.log("server corriendo")
})


