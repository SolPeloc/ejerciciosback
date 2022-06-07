          
          
          //CON PROMESAS//
    const fs = require("fs")     
//sabemos que las promesas se trata, resuelven con then y catch//
//fs.promises.readFile("./testgr.txt","utf-8")  
//.then((data)=>{
    // try {
        //  console.log(data)

    // } catch  {
 //        console.log("error") //capta error interno//
  //   }
//}).catch((err)=>{                //capta el error de la promesa
       //throw "mmgrhgis"          // throw, devuelve string de errores//      
    //   return (err)
    //})                               //o usas el return //

    //FORMA CON SINTAXIS SINCRONICA, PERO PARA ASINCRONA//
                                //ASYNC AWAIT//
    //AWAIT, va a identificar el proceso asincrono, por eso lo ponemos adelante
 //envolvemos la funcion save en async(), para avisar que el bloque es asincrono
  const save = async()=>{
      try{
        let read =  await fs.promises.readFile("./test.txt","utf-8") //esto se envuelve en una funcion, y dentro del try, xq es lo que quiero q intente leer
        console.log(read)
    }catch(err){
         console.log("error al leer")
      }
    
  }

   save() //solo ejecuto
