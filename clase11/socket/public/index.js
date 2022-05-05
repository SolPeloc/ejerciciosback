//front//

const socket = io()           //aca abro un canal de coneccion desde el front//

socket.on("mensajes",(data)=>{     // aca con on, va a escuchar, el mensaje del back, le pasamos el nombre del mensaje, y la data es el mensaje//
    console.log(data)
    render(data)                     //ejecutamos la data con la funcion render//
    socket.emit("mensaje_cliente","gracias por la conexion") //aca le estoy enviando mensaje al back, desde el front//            
})     

 // recorre el array de mensajes//

 const render = (data)=>{
  let html= data.map((e)=>{          //lo guardo en una variable//
       return `
       <p> <strong>${e.nombre} </strong> : ${e.mensaje}   </p>      
       `                                          //parrafos a renderizar//
   }).join(" ")    //lo convierte en strings separados//

   document.querySelector("#caja").innerHTML = html             //selecciono el id del div en el html y//
 } 
                                                               //el inner hable la caja y lo igualo a lo que quiero renderizar//

//funcion que se ejecuta con el boton del form//

const addInfo = () =>{
                                                                  //dataObj va a ser lo q le enviamos al servidor para q lo almacene en el arr//
let dataObj = { nombre: document.querySelector("#nb").value,      //aca seleccion los input del form, desde su id y su valor//                  
               mensaje: document.querySelector("#msn").value 
}
socket.emit("datamensajes",dataObj)           //aca le envio al server el objeto para que lo guarde en el arr//
document.querySelector("#msn").value = ""  //para resetear el input
return false                          //para prevenir el comportamiento del submit

}