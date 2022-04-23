const express = require("express")

const app = express()

app.listen(8080,()=>{
    console.log("server corriendo")
})

app.get("/productos",(req,res)=>{

})
app.get("/productos:id",(req,res)=>{

})


app.post("/productos",(req,res)=>{

})


app.put("/productos:id",(req,res)=>{

})

app.delete("/productos:id",(req,res)=>{

})

