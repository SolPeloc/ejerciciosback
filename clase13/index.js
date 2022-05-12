const express = require("express")  //esto es lo mismo que => import express from "express"// 
const app = express()

app.listen(8080,()=>{
    console.log("server corriendo")
})