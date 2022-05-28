// constructor de rutas//
const express = require("express")

const {Router} = express      
const router = new Router()
router.use(express.json()) //formatea el objeto a json//
router.use(express.urlencoded({extended:false}))
router.use(express.static(__dirname+"public"))
const contenedorProd = require("../Contenedores/productos")
const prodApi = new contenedorProd("productos.json")

const isAdmin = require("../Contenedores/admin")
const moment = require("moment")




router.get("/productos",(req,res)=>{ 
  let data = prodApi.getAll()
  console.log(data)
   console.log(req.body)
    res.sendFile("/public/index.html",{root: "."})// no puedo renderizarlo
    
    })

router.get("/productos/:id",(req,res)=>{   
 prodApi.getById(req.params.id)       //me trae el console.log del metodo, pero no se como tomarlo desde la ruta//
  

      })



router.post("/productos",isAdmin,(req,res)=>{           
    
        let {nombre,precio,img,descripcion,stock } = req.body          
        let prodnuevo = {
            nombre,
            precio,
            img,
            descripcion,
            stock,
            date : moment().format("DD/MM/YYYY HH:mm:ss")
        
         }
        console.log(req.body) 
    prodApi.save(prodnuevo)
        console.log(prodnuevo)
                                            
           
            res.sendFile("/public/index.html",{root: "."})   //no puedo renderizarlo//                   
               
})



//este no entiendo como plantearlo//
router.put("/productos/:id",isAdmin,(req,res)=>{
let idbuscado = prodApi.getById(req.params.id) 
  let {nombre, precio, img, descripcion,stock} = req.body
  //let prodmod = arr.find((i)=>{
  // return i.id== req.params.id              //filtro el id//
 // })
 console.log(idbuscado)
  if(prodmod ==undefined){
    res.send("producto no encontrado") 
  }else{
    prodmod.nombre = nombre                              
    prodmod.precio = precio
    prodmod.img =  img

    res.send({
      mensaje:`producto id ${req.params.id} modificado`,
      data:prodmod
    })
  }

})
router.delete("/productos/:id",isAdmin,(req,res)=>{
  
    prodApi.deleteById(req.params.id) //no me borra nada solo me trae, todos los productos

  //let  arraynuevo = arr.filter((i) =>{
   // return   i.id != req.params.id   
        //}) 
      //  arr = arraynuevo
          //res.send({
           // mensaje:"producto eliminado",
            //data: arr})    
})

module.exports = router 