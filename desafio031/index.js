const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const path =  require("path")

const fs = require("fs")
const Contenedor = require("./Contenedor.js")

let archivos= new Contenedor("text.js")


app.get("/productos",(req,res)=>{
 const data = 
 archivos.getAll(res.send())
   
    

    //fs.readFile("./text.json", "utf-8",(err,data) =>{
           // if(err){
            //    res.json({mensaje : "error de lectura"})
            //}else{
            //    res.send(data)
        //}
   // })
})


app.get("/productoRandom",(req,res)=>{


        //fs.readFile("./text.json", "utf-8",(err,data) =>{
           // if(err){
            //    res.json({mensaje : "error de lectura"})
           // }else{
             //   let arrData = JSON.parse(data)
              //  let random =arrData[Math.floor(Math.random() * arrData.length)]
               
               // res.send(random)
    // }
    //}) 
})




app.listen(PORT,()=>{
   console.log("server en puerto 8080")
})