
const http = require("http")
const moment = require("moment") //aca traigo la dependencia a usar de horas//

const server = http.createServer((req,res)=>{ 
  console.log(req.url)     //con esto capturo las url, rutas, patch desde donde me estan haciendo la peticion//
  
  if(req.url === "/"){   // corroboro si la url es igual al patch principal, y que luego le responda al cliente, q muestre algo //
    res.end("este es el patch principal") // con este metodo puedo responder, mandarle lo que quieras,xj un string//
  }
  if(req.url === "/productos"){
      res.end("este es el patch de productos")
  }
  if(req.url === "/hora"){
      let horario = moment().format("HH:mm")
    res.end(`esta es la hora : ${horario}`)  // aca estoy pasandole la hora al cliente, el puerto hora/
}

})






// metodo para escuchar, 1ar, numero para escuchar, y callback, para ejecutar
server.listen(8585,()=>{
  console.log("servidor http escuchando en el puerto 8585") // si me devuelve el console, significa que esta escuchando
})