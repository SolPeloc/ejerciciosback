//const Contenedor = require("../Contenedores/fs/filesystem")

import Contenedor from "../Contenedores/fs/filesystem"
import moment from "moment"
//const moment = require("moment")

const prodapi = new Contenedor("productos.json")

const saveprod = (req,res) =>{

const newprod = {
  nombre : req.body.nombre,
  precio : req.body.precio,
  img : req.body.img,
  descripcion : req.body.descripcion,
  stock : req.body.stock,
  date : moment().format("DD/MM/YYYY HH:mm:ss")
}
prodapi.save(newprod).then(response => res.send(response)).catch(err => err && { err: 'ocurrio un error!' })

}

const getByIdProd = (res,id) =>{
prodapi.getById(id).then(response => res.send(response)).catch(err => err && { err: 'ocurrio un error!' })


}

const deleteByIdProd = (res,id) => {
prodapi.deleteById(id).then(response => res.send(response)).catch(err => err && { err: 'ocurrio un error!' })

}

const updateProd = (req,res) => {
 prodapi.updateById(req.params.id).then(response => res.send(response)).catch(err => err && { err: 'ocurrio un error!' })

}

const getallprod = (req,res) => {
  prodapi.getAll().then(response => res.send(response)).catch(err => err && { err: 'ocurrio un error!' })
}


 module.exports = {saveprod,getByIdProd,deleteByIdProd,updateProd,getallprod}
