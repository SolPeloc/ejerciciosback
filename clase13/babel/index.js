const express = require("express")  //esto es lo mismo que => import express from "express"// 
const app = express()


const suma = (a,b)=>{
    return a + b
}
console.log(suma (2,5))

const resta= (a,b)=>{
    return a - b
}
console.log(resta(10,5))

const multi= (a,b)=>{
    return a * b
}
console.log(multi(10,5))

const color = ()=>{
 let1 = Math.floor(Math.random()*(255-0+1) + 0)
 let2 = Math.floor(Math.random()*(255-0+1) + 0)
 let3 = Math.floor(Math.random()*(255-0+1) + 0)
 const rgb = `${let1}, ${let2}, ${let3}`
 return rgb
}

console.log(color())

app.listen(8080,()=>{
    console.log("server corriendo")
})