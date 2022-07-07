// constructor de rutas//

import express from "express"
const {Router} = express     
import {productosDao as productoApi} from "../src/daos/index.js"
const prodrouter = new Router()
prodrouter.use(express.json()) //formatea el objeto a json//
prodrouter.use(express.urlencoded({extended:false}))
prodrouter.use(express.static("public"))



import {isAdmin} from "../src/Contenedores/admin.js"



//prodrouter.get("/productos",(req,res)=> metodosprod.getallprod(req,res))

//prodrouter.get("/productos/:id",(req,res)=>metodosprod.getByIdProd(res, req.params.id))



//prodrouter.post("/productos",isAdmin,(req,res)=>metodosprod.saveprod(req,res))

//prodrouter.put("/productos/:id",isAdmin,(req,res)=>metodosprod.updateProd(req,res))


//prodrouter.delete("/productos/:id",isAdmin,(req,res)=> metodosprod.deleteByIdProd(res,req.params.id))
 
//rutas productos//
prodrouter.get("/productos", async (req,res)=> {
    const productos = await productoApi.getAll()
    res.json(productos)
    console.log(productos)
})

prodrouter.get("/productos/:id", async (req,res)=> await productoApi.getById(res, req.params.id))



prodrouter.post("/productos",isAdmin,async(req,res)=>await productoApi.saveItem(req.body,res))

prodrouter.put("/productos/:id",isAdmin,async(req,res)=>await productoApi.updateItem(req.body,res))


prodrouter.delete("/productos/:id",isAdmin,async(req,res)=> await productoApi.deleteById(res,req.params.id))




export {prodrouter}