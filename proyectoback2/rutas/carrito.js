const express = require("express")
const data = require("../data")

const {Router} = express //desestructuro express

let router = new Router() //router es un constructor, lo instancio//
router.use(express.json()) //formatea el objeto a json//
router.use(express.urlencoded({extended:false}))
router.use(express.static("public"))
let arr = require("../data")
let carrito = require("../cart")
//Me permite listar todos los productos guardados en el carrito

router.get("/carrito",(req,res)=>{
    res.render("index.ejs",{root : ".", data : carrito})

    
 })
//leo los productos
router.post("/carrito",(req,res)=>{


    res.render("productos",{data : arr})


})
//Para incorporar productos al carrito por su id de producto

router.post("/carrito/:id/productos",(req,res)=>{
   
   let objselec = arr.find(e =>{
       return e.id === req.params.id
   })
   arr.push(objselec)

   let cartSelec = arr.find((x)=>{
       return x.id === req.params.id
   })
  cartSelec.productos.push(objselec)
})




//Vacía un carrito y lo elimina
router.delete("/carrito/:id",(req,res)=>{
  let  arraynuevo = arr.filter((i) =>{
    return   i.id != req.params.id   
        }) 
        arr = arraynuevo
          res.send({
            mensaje:"producto eliminado",
            data: arr})

     

})
//Eliminar un producto del carrito por su id de carrito y de producto
router.delete("/carrito/:id/productos/:id_prod",(req,res)=>{

})



module.exports = router // exporto router, el que crea las rutas y las guarda//
