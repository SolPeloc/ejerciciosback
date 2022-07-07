//Desarrollar un servidor basado en Node.js y express que para la ruta '/test' responda con un array de 10 objetos, con el siguiente formato:
//{ nombre: '',apellido: '',color: ''}
//Los objetos generados tendrán un valor aleatorio para cada uno de sus campos. El valor será obtenido de los siguientes arrays:

//Con cada request se obtendrán valores diferentes.

const express = require("express")
const app = express()

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

//armo funcion que me retorne de forma aleatoria los valores de los objetos declarados arriba//
const armarMock = () =>{
    const indiceNombre = Math.floor(Math.random()*nombres.length)
    const indiceApellido = Math.floor(Math.random()*apellidos.length)
    const indiceColor = Math.floor(Math.random()*colores.length)

    return{
        nombre: nombres [indiceNombre],
        apellido : apellidos[indiceApellido],
        color: colores[indiceColor]
    }
}

//armo la ruta
//app.get("/test",(req,res)=>{
  //  const mocks = []
  //  for(let i = 0; i <10; i ++){
  //   mocks.push(armarMock())
   // }
    /////res.send(mocks)
//})

app.listen(8080,()=>{
    console.log("server corriendo")
})

//con FAKEr para que me traiga datos aleatorios//
const {faker} = require("@faker-js/faker")//traigo la dependencia
faker.setLocale('es')//paso los datos a español
//armo funcion que me retorne de forma aleatoria los valores de los objetos declarados arriba//
const armarMockFaker = () =>{
    

    return{
        nombre: faker.name.firstName(),
        apellido : faker.name.lastName(),
        color: faker.color.human(),
    }
}

//armo la ruta
app.get("/test",(req,res)=>{
    const {param = 10} = req.query
    const mocks = []
    for(let i = 0; i <10; i ++){
     mocks.push(armarMockFaker())
    }
    res.send(mocks)
})