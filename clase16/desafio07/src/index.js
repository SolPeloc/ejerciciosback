const express = require("express")
const app = express()

app.listen(8080, () => {
    console.log("server corriendo")
})
app.use(express.json())//formatea la data que venga por el body, a json//
const knex = require("./db") //traigo knex
const contenedorProd = require("../Contenedores/productos")
const apiProd = new contenedorProd(knex,"productos")
//crear productos
app.post("/",(req, res)=>{
    console.log(req.body)
let nuevoObj = {             //objeto que voy a insertar en mi bd//
    nombre : req.body.nombre,
    precio : req.body.precio,
    descripcion : req.body.descripcion,
    img : req.body.img,
    stock : req.body.img
  //  date = moment().format("DD/MM/YYYY HH:mm:ss")
}
 apiProd.save(nuevoObj).then(()=>{     //aca le paso el nombre de la tabla a la cual me voy a conectar 
      console.log("registro ok")                                                  //con insert, agrego el nuevo objeto a la tabla//
     res.send({ mensaje:"registro ok"})                                                          //esto devuelve una promesa, entonces then/catch

    }).catch((err)=>{
        console.log(err)
    })        
})

//obtener todos los productos
app.get("/all",(req, res)=>{
  apiProd.getAll()

   // knex
   // .from("productos")               //le pongo el nombre de la tabla a consultar
    //.select("*")                     //selecciono aca todos los campos
    .then((json)=>{                        //resultado por promesa
        res.send({ data : json})
        console.log(json)
    })
    .catch((err)=>{
        console.log(err)
    })     
})



//obtener un producto por su id//
app.get("/:id",(req, res)=>{
    apiProd.getById(req.params.id)
    // knex
     //.from("productos")  //le pongo el nombre de la tabla a consultar
     //.select("*")            //selecciono aca todos los campos
     //.where({id: req.params.id})   //filtro por id ,id igual al id q me den por params                  
     .then((ide)=>{            //resultado por promesa
         res.send({ data : ide})
         console.log(ide)
     })
     .catch((err)=>{
         console.log(err)
     })                                                   
})


//actualizar producto
app.put("/:id",(req, res)=>{

   // knex
   // .from("productos")  //le pongo el nombre de la tabla a consultar
  //  .where({id: req.params.id})   //filtro por id ,id igual al id q me den por params  
   // .update({nombre :req.body.nombre}) // aca pongo lo que quiero actualizar,en este caso nombre,puedo poner varios          
  const id = req.params.id
    let prodmod = {
        nombre: req.body.nombre,
        precio : req.body.precio,
        descripcion : req.body.descripcion,
        img: req.body.img,
        stock: req.body.stock
    }
    return  apiProd.putForId(id,prodmod)
      
    .then((id)=>{            //resultado por promesa
        res.json({ data : "producto actualizado" + {id}})
      console.log(id)
    })
    .catch((err)=>{
        console.log(err)
    })                                                   
})


//eliminar producto por id//
app.delete("/:id",(req, res)=>{
 //   knex
  //  .from("productos")  //le pongo el nombre de la tabla a consultar
  //  .where({id: req.params.id})   //filtro por id ,id igual al id q me den por params  
   // .del()                         //metodo para eliminar

   apiProd.deleteById(req.params.id)
    .then((json)=>{            //resultado por promesa
        res.send({ data : "producto eliminado"})
    })
    .catch((err)=>{
        console.log(err)
    })  
})
