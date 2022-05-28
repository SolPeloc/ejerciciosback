const express = require("express")

const {Router} = express //desestructuro express

let router = new Router() //router es un constructor, lo instancio//
router.use(express.json()) //formatea el objeto a json//
router.use(express.urlencoded({extended:false}))
router.use(express.static("public"))
const moment = require("moment")
const carritoContenedor = require("../Contenedores/carrito")
const carritoApi = new carritoContenedor("carrito.json")

//Me permite listar todos los productos guardados en el carrito

router.get("/carrito",(req,res)=>{
  let  carritos = carritoApi.getAll()
    res.send(carritos)
    })
//creacion de carrito
router.post("/carrito",(req,res)=>{
  let nuevoCarrito = {
    date : moment().format("DD/MM/YYYY HH:mm:ss"),
    productos : []
  }
  carritoApi.crearCarrito(nuevoCarrito)
})

//Para incorporar productos al carrito por su id de producto y id carrito

router.post("/carrito/:id/productos/:idcarrito",(req,res)=>{

 // let id = req.params.id               //guardo variable en id
 // let prodSelec =arr.find((prod)=>{     //filtro el array y le digo q me devuelva un array con solo objeto, todo en un nuevo array//
    //  return prod.id == id
     // })
     // console.log(prodSelec)

     // let carritoSelect = carrito.find((x)=>{
      //  return x.id === req.params.id
     // })
     //carritoSelect.productos.push(prodSelec) //pusheeo el producto al array de la prop carrito
     //carritoSelect = carrito
     // console.log(carrito)
     
  })

router.get("/carrito/:id/productos/:idcarrito",(req,res)=>{
  //let id = req.params.id               
 // let arrayNew =arr.filter((prod)=>{     
   //   return prod.id == id
    //  })
    //  console.log(arrayNew)
    //  arr = arrayNew



 // res.render("index.ejs",{data : carrito})

})


//Vacía un carrito por id y lo elimina
router.delete("/carrito/:id",(req,res)=>{
  carritoApi.deleteById(req.params.id)
  res.send({
     
  })
  //let  arraynuevo = carrito.filter((i) =>{
   // return   i.id != req.params.id   
     //   }) 
      //  carrito= arraynuevo
         // res.send({
         //   mensaje:"carrito eliminado",
        //    data: carrito})

     

})
//Eliminar un producto del carrito por su id de carrito y de producto
router.delete("/carrito/:id/productos/:id_prod",(req,res)=>{

})



module.exports = router // exporto router, el que crea las rutas y las guarda//
