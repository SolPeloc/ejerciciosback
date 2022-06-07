// constructor de rutas//
const express = require("express")

const {Router} = express      
const prodrouter = new Router()
prodrouter.use(express.json()) //formatea el objeto a json//
prodrouter.use(express.urlencoded({extended:false}))
prodrouter.use(express.static(__dirname+"public"))
const metodosprod = require("../src/models/productosfs")

const isAdmin = require("../src/Contenedores/admin")




prodrouter.get("/productos",(req,res)=> metodosprod.getallprod(res,req))

prodrouter.get("/productos/:id",(req,res)=>metodosprod.getByIdProd(res, req.params.id))



prodrouter.post("/productos",isAdmin,(req,res)=>metodosprod.saveprod(req,res))

prodrouter.put("/productos/:id",isAdmin,(req,res)=>metodosprod.updateProd(req,res))


prodrouter.delete("/productos/:id",isAdmin,(req,res)=> metodosprod.deleteByIdProd(res,req.params.id))




module.exports = prodrouter 