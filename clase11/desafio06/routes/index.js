// constructor de rutas//
const express = require("express")
const data = require("../../../clase9/desafio05/EJS/data")
const {Router} = express      
const router = new Router()

const arr = [] //array donde se va a almacenar los productos

///enpoint para obtener productos del servidor//
router.get("/",(req, res)=>{ 
res.render("index.ejs",{data : arr})

console.log(req.body)
})



//enpoint para guardar los productos en el server//
router.post("/",(req,res)=>{
     res.render("index.ejs",{data : arr})
  
     console.log(req.body)
     



})





//exporto router//
module.exports = router