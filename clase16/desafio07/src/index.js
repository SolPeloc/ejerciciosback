const express = require("express")
const app = express()

app.listen(8080, () => {
    console.log("server corriendo")
})
app.use(express.json())//formatea la data que venga por el body, a json//
const knex = require("./db") //traigo knex

//crear productos
app.post("/",(req, res)=>{
    console.log(req.body)
let nuevoObj = {             //objeto que voy a insertar en mi bd//
    nombre : req.body.nombre,
    precio : req.body.precio,
    descripcion : req.body.descripcion,
    img : req.body.img
}
 knex("productos").insert(nuevoObj).then(()=>{     //aca le paso el nombre de la tabla a la cual me voy a conectar 
      console.log("registro ok")                                                  //con insert, agrego el nuevo objeto a la tabla//
     res.send({ mensaje:"registro ok"})                                                          //esto devuelve una promesa, entonces then/catch

    }).catch((err)=>{
        console.log(err)
    })        
})

//obtener todos los productos
app.get("/all",(req, res)=>{
    knex
    .from("productos")               //le pongo el nombre de la tabla a consultar
    .select("*")                     //selecciono aca todos los campos
    .then((json)=>{                        //resultado por promesa
        res.send({ data : json})
    })
    .catch((err)=>{
        console.log(err)
    })     
})



//obtener un producto por su id//
app.get("/:id",(req, res)=>{
     knex
     .from("productos")  //le pongo el nombre de la tabla a consultar
     .select("*")            //selecciono aca todos los campos
     .where({id: req.params.id})   //filtro por id ,id igual al id q me den por params                  
     .then((json)=>{            //resultado por promesa
         res.send({ data : json})
     })
     .catch((err)=>{
         console.log(err)
     })                                                   
})


//actualizar producto
app.put("/:id",(req, res)=>{
    knex
    .from("productos")  //le pongo el nombre de la tabla a consultar
    .where({id: req.params.id})   //filtro por id ,id igual al id q me den por params  
    .update({nombre :req.body.nombre}) // aca pongo lo que quiero actualizar,en este caso nombre,puedo poner varios          
    .then((json)=>{            //resultado por promesa
        res.send({ data : "producto actualizado"})
    })
    .catch((err)=>{
        console.log(err)
    })                                                   
})


//eliminar producto por id//
app.delete("/:id",(req, res)=>{
    knex
    .from("productos")  //le pongo el nombre de la tabla a consultar
    .where({id: req.params.id})   //filtro por id ,id igual al id q me den por params  
    .del()                         //metodo para eliminar
    .then((json)=>{            //resultado por promesa
        res.send({ data : "producto eliminado"})
    })
    .catch((err)=>{
        console.log(err)
    })  
})
