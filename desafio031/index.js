const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const path =  require("path")

const fs = require("fs")
const Contenedor = require("./Contenedor.js") //traigo el contructor//
const { json } = require("express")

let archivos= new Contenedor("text.js") //creo un nuevo archivo //


app.get("/productos",(req,res)=>{
let data = archivos.getAll()      //utilizo metodo de mi contructor//
res.send(data)

console.log(data)
    //fs.readFile("./text.json", "utf-8",(err,data) =>{
           // if(err){
            //    res.json({mensaje : "error de lectura"})
            //}else{
            //    res.send(data)
        //}
   // })
})


app.get("/productoRandom",(req,res)=>{

    let data = archivos.getAll()
    console.log(data)
      let random = data[Math.floor(Math.random() * data.length)]
      res.send(random)
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