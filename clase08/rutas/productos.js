const express = require("express")

const {Router} = express //desestructuro express

let router = new Router() //router es un constructor, lo instancio//
const arr = require("./data")
router.use(express.json())
router.get("/productos",(req,res)=>{
      res.send({
      mensaje:"aca estan los productos",
      data : arr
      })
})

router.get("/productos/:id",(req,res)=>{
      let id = req.params.id               //guardo variable en id
      let arrayNew =arr.filter((prod)=>{     //filtro el array y le digo q me devuelva un array con solo objeto, todo en un nuevo array//
          return prod.id == id
          })
          console.log(arrayNew)
          res.send({
              mensaje: "aca va el producto",
              data: arrayNew[0]              //aca le estoy devolviendo el objeto unico del nuevo array 
                                             //ese objeto esta en la posición 0 del array
          })
      
      })



router.post("/productosnuevos",(req,res)=>{
      let prodnuevo = {
         "nombre": req.body.nombre,
         "precio": req.body.precio,
         "img": req.body.img,
         "id" :  Math.random ()                       //le asigno un id random o id: (arrNew.length +1//
      }
     
         arr.push(prodnuevo)                                     //aca agrego el nuevo producto al array//
         console.log(req.body)                       //con body capturo la info q me quieren pasar para guardar//
          res.send({
              mensaje : "producto agregado y guardado",
              data : prodnuevo,
          })
     
     })


module.exports = router // exporto router, el que crea las rutas y las guarda//
