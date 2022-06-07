
//primero traemos el modulos fs//
let fs = require("fs")
                  //para leer//
//usamosreadFile, en la primera parte el texto a leer y luego utf, directamente
// por ultimo la callback, que tienen data, (parametro) que quiero leer
//err, captura el error

        //CON CALLBACKS//
fs.readFile("./test.txt", "utf-8",(err,data) =>{
  if(err){
      return "error en la lectura"
  }else{
    console.log(data)
  }
  
})

// para escribir//
//tmb, el texto donde quiero que escriba, luego texto, utf y la callback
//con un solo argumento err

fs.writeFile("./test.txt","contenido nuevo","utf-8",(err)=>{
     if(err){
         return "error al escribir"
     }else{
         console.log("se escribio correctamente")
     }
})

// para agregar //
fs.appendFile("./test.txt"," te agrego mas cosas \n","utf-8",(err)=>{
    if(err){
        return "error al agregar"
    }else{
        console.log("se agregó correctamente")
    }
})
    // para BORRAR ARCHIVOS//
fs.unlink("./nombrearchivoborrar",(err)=>{
    if(err){
        return "error al borrar"
    }else{
        console.log("se borro correctamente")
    }
})

               