require("./db")

const Product = require("../models/Products")//importo el modelo, que es un constructor de productos

//CRUD//
const saveProd = async ()=>{
//para crear el producto tengo que usar el modelo
    const nuevoProd = new Product({      
        nombre : "tapado clara",
        descripcion:"paño",
        precio: 8000,
        stock:10                             //aca van las propiedades del nuevo producto, con el esquema Product
    })
    
const prodGuardado = await nuevoProd.save()                          //con metodo save, de mongoose, guardo el nuevo producto
return prodGuardado   //promesa//                                                
}

//saveProd().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)})        //devuelve una promesa, entonces then/catch

// lEER PRODUCTOS//

const getAllProduct = async ()=>{
  const productos =  await    Product.find()
  return productos
}
//getAllProduct().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)})

//lEER POR ID//

const getById = async()=>{
const prod =    await Product.find({_id:"629373f247cbffd51117f4af"})//con find busca,y dentro le pongo el id que quiero q me devuelva
 return prod
}

//getById().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)})

//ACTUALIZAR PRODUCTO//

const updateProd = async ()=>{
 const produpdate = await   Product.findByIdAndUpdate({_id:"629373f247cbffd51117f4af"},{nombre: "jean jacinta" }) // en el 1ero pongo el id a modificar, y en el segundo la propiedad que quiero cambiar//
return produpdate
}
//updateProd().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)}) //me devuelve el objeto q se actualizo, pero no actualizado, lo veo en compass//

//BORRAR //

const deleteProd = async () =>{
    const prodDel = await Product.findOneAndDelete({_id:"629373f247cbffd51117f4af"})
    return prodDel                
}
//deleteProd().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)})// me devuelve el objeto borrado

//BORAR VARIOS PRODUCTOS EN BASE A IGUAL PROPIEDAD Y VALOR//
const deleteAll = async () => {
 await Product.deleteMany({descripcion : "algodon" })
 return "productos eliminados"
}
deleteAll().then((res)=>{console.log(res) }).catch((err)=>{console.log(err)})