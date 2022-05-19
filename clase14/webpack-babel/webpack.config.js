//configuracion de empaquetado
const path = require("path")       //ayuda a resolver problemas de rutas

module.exports={
  entry:"./src/index.js",        //le paso mi index, principal//
  output:{
      path:path.resolve(__dirname,"dist"), //ruta absoluta de la carpeta donde va a estar el fichero final
      filename: "main.js"                  //nombre del fichero dentro de carpeta dist, el main es donde va estar almacenado el empaquetado        
  },
 module:{
     rules:[
          {
              test:/\.m?js$/,
              exclude:/(node_modules)/,
              use:{
                  loader:"babel-loader",
              }
          }
         
     ]
 }













}