const express = require("express")
const app = express()

const arr = require("./text.js")
app.use(express.json()) //formatea la data que venga por el body, a json//
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
 let prodnuevo = {
    "nombre": req.body.nombre,
    "precio": req.body.precio,
    "img": req.body.img,
    "id" :  Math.random ()                       //le asigno un id random o id: (arrNew.length +1//
 }

    arr.push(prodnuevo)                                     //aca agrego el nuevo producto al array//
    console.log(req.body)                       //con body capturo la info q me quieren pasar para guardar//
     res.send({
         mensaje : "producto agregado y guardado",
         data : prodnuevo,
     })

})
















app.listen(8080,()=>{
    console.log("server ok")
})