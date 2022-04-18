const express = require("express")
//const PORT = process.env.PORT || 8080
const app = express()



app.get("/",(req,res)=>{
  res.sendStatus(201).send("hola todo ok") // sendstatus, para enviar el codigo que quiero q vea el front//
})


  //PARAMS//
  app.get("/productos",(req,res)=>{
    res.send("hola productos")  
  })
//endpoint que recibe parametros
app.get("/productos/:id",(req,res)=>{
    res.send("hola estoy con params")  
   console.log (req.params)           //req params, me devuelve un objeto,aca seria el id con en valor que le di en la url(2)//
    let id = req.params.id            //puedo guardar en una variable el id//
    console.log(id)
})


// QUERY//
app.get("/query",(req,res)=>{
    res.send("hola usuarios")
    console.log(req.query) //req query, me devuelve un objeto, id/variable y valor, que le di en la url (?id=3)//
                             // puedo enviarle mas parametros en la url (?id=3&email=sol) con &

  })

 


app.listen(8080,()=>{
    console.log("puerto 8080 ok")
})