const express = require("express")

const {Router} = express //desestructuro express

let router = new Router() //router es un constructor, lo instancio//

//Me permite listar todos los productos guardados en el carrito

router.get("/:id/productos",(req,res)=>{
    
 })
//Crea un carrito y devuelve su id
router.post("/carrito",(req,res)=>{
    
})
//Para incorporar productos al carrito por su id de producto

router.post("/carrito/:id/productos",(req,res)=>{


})
//Vacía un carrito y lo elimina
router.delete("/carrito/:id",(req,res)=>{

})
//Eliminar un producto del carrito por su id de carrito y de producto
router.delete("/carrito/:id/productos/:id_prod",(req,res)=>{

})



module.exports = router // exporto router, el que crea las rutas y las guarda//
