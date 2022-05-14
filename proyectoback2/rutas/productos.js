// constructor de rutas//
const express = require("express")

const {Router} = express      
const router = new Router()
router.use(express.json()) //formatea el objeto a json//
router.use(express.urlencoded({extended:false}))
router.use(express.static("public"))
//const contenedorProd = require("../Contenedores/productos")
//const prodApi = new contenedorProd("productos.json")

const isAdmin = require("../Contenedores/admin")


let arr = require("../data")

router.get("/productos",(req,res)=>{ 
   console.log(req.body)
    res.render("productos", {data : arr})
      
    })

router.get("/productos/:id",(req,res)=>{
        let id = req.params.id               //guardo variable en id
        let arrayNew =arr.filter((prod)=>{     //filtro el array y le digo q me devuelva un array con solo objeto, todo en un nuevo array//
            return prod.id == id
            })
            console.log(arrayNew)
            arr = arrayNew
            res.render("productos",{data : arr}) //aca le estoy devolviendo el objeto unico del nuevo array 
        })



router.post("/productos",isAdmin,(req,res)=>{            //se usa la misma ruta tanto para traer como para enviar//
      
        let {nombre,precio,img} = req.body          //puedo sino desestructurar al req.body
        let prodnuevo = {
            nombre,
            precio,
            img,
            id: arr.length + 1                     //le asigno un id random o id: (arr.length +1//
        }
            arr.push(prodnuevo)                                     //aca agrego el nuevo producto al array//
            console.log(req.body) 
            res.render("productos",{data : arr})                      //con body capturo la info q me quieren pasar para guardar//
               
})

router.put("/productos/:id",isAdmin,(req,res)=>{
  let {nombre, precio, img} = req.body
  let prodmod = arr.find((i)=>{
   return i.id== req.params.id              //filtro el id//
  })
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
  
  let  arraynuevo = arr.filter((i) =>{
    return   i.id != req.params.id   
        }) 
        arr = arraynuevo
          res.send({
            mensaje:"producto eliminado",
            data: arr})    
})

module.exports = router // exporto router, el que crea las rutas y las guarda//
