const express = require("express")
const app = express()

const arr = require("./text.js")

// endpoint que devuelva el array //
app.get("/",(req,res)=>{
    res.send({
        mensaje : "hola aca estan los producto",
        dataproductos : arr   
    })
})
 // endpoint que devuelva un solo producto//
app.get("/:id",(req,res)=>{
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
//endpoint que reciba info POST//
app.post("/",(req,res)=>{

    console.log(req.body)                           //con body capturo la info q me quieren pasar para guardar//
     res.send("hola posts")
})
















app.listen(8080,()=>{
    console.log("server ok")
})