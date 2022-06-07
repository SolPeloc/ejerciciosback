//callbacks hells, funcion de otra funcion, dentro de otra funcion.. como una piramide
//se ejecutan de adentro hacia afuera// dependen entre ellas//ya no usan asi
//ahora se usan las PROMESAS//}
//con new Promise creo una, dentro de ()creo una callback, una funcion anonima con parametros//
//resolve(cuando se resuelve), reject(cuando se rechaza)


const getInfo = () =>{
    const datos = [
        { nombre:"sol",
          edad : 32,
          ciudad: "caba"

        },
        { nombre:"ram",
          edad : 40,
          ciudad: "caba"

        }
    ]
    return new Promise ((resolve, reject)=>{
            if(datos.length === 0){            //condicion si toda la longitud del array es igual a 0
               reject(new Error("error en la promesa!"))     //uso reject cuando voy a rechazar/incumplir la promesa, reject recibe strings o contructores de errores como Error
            }else{
               setTimeout(()=>{
                resolve(datos) //si hay datos, pongo resolve, q me ayuda a resolver la promesa//
               },2000)         
            }
    
        }
    )
}
    //nosotros no creamos promesas, solo las vamos a resolver(.then) o , vamos a ejecutar la promesa//
 // si yo necesito hacer algo para cuando se resuelva uso el metodo .then
 // then recibe una callback con parametro res, que va a ser el resolve de la promesa resolve(datos)
    getInfo().then((res)=>{
         console.log(res)
    }).catch((err)=> {
        console.log(err)     //.cath tmb va a recibir una callback, con parametro err, que va a ser referencia
                            //a lo que  reject devuelve.
    })
