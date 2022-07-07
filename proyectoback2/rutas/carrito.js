 
import express from "express"
const {Router} = express //desestructuro express

const carrrouter = new Router() //router es un constructor, lo instancio//
carrrouter.use(express.json()) //formatea el objeto a json//
carrrouter.use(express.urlencoded({extended:false}))
carrrouter.use(express.static("public"))
import { carritosDao as carritoApi } from "../src/daos/index.js"

//const moment = require("moment")

//Me permite listar todos los productos guardados en el carrito

carrrouter.get("/carrito",async(req,res)=>{
   await carritoApi.getAll()
    })
//creacion de carrito
carrrouter.post("/carrito",async(req,res)=>{
 await carritoApi.saveItem()
})

//Vacía un carrito por id y lo elimina
carrrouter.delete("/carrito/:id",async(req,res)=>{
  await carritoApi.delete(req.params.id)
 
})
//Para incorporar productos al carrito por su id de producto y id carrito

carrrouter.post("/carrito/:id/productos",async(req,res)=>{
  const carrito = await carritoApi.getById(req.params.id)
  const producto = await productoApi.getById(req.body.id)
  carrito.productos.push(producto)
  await carritoApi.updateItem(carrito)
  res.end()
 
  })

  carrrouter.get("/carrito/:id/productos",async(req,res)=>{
    const carrito = await carritoApi.getById(req.params.id)
    res.json(carrito.productos)

})


/
//Eliminar un producto del carrito por su id de carrito y de producto
carrrouter.delete("/carrito/:id/productos/:idProd",async(req,res)=>{
  const carrito = await carritoApi.getAll(req.params.id)
  const index = carrito.productos.findIndex(p => p.id == req.params.idProd)
  if (index != -1) {
      carrito.productos.splice(index, 1)
      await carritoApi.updateItem(carrito)
  }
  res.end()
})



export {carrrouter} // exporto router, el que crea las rutas y las guarda//
