// constructor de rutas//
const express = require("express")

const {Router} = express      
const router = new Router()


///enpoint para obtener data del servidor//
router.get("/",(req, res)=>{ 
res.render("index.ejs")

console.log(req.body)
})



//enpoint para guardar los datos en el server//
router.post("/",(req,res)=>{
     res.render("index.ejs")
     console.log(req.body)
     
})





//exporto router//
module.exports = router