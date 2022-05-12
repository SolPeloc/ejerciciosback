
// funcion que toma los valores del form de productos//
const agregarInfo = () =>{
    let dataobj ={
      nombre :document.querySelector("#nombre").value,
      precio : document.querySelector("#precio").value,
      img : document.querySelector("#img").value,
      
    }
    
   // socket.emit("agregarproductos",(dataobj)) //le envio al back, los valores del form
  }
 //funcion que renderiza la data de productos en cards//
  const renderProd = (arr) =>{
    let htmlP = arr.map((d)=>{
      return ` <div class="card productoEstilo " style="width: 18rem;">
                  <img src="img/${d.img}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${d.nombre}</h5>
                      <p class="card-text ">Precio: ${d.precio}</p>
                      <p class="card-text ">id: ${d.id}</p>
                  </div>
              </div> `
    }).join(" ") 
    document.querySelector("#dataproductos").innerHTML = htmlP
  }

   //funcion que me renderiza la data y la pinta en una tabla los productos del carrito//
   const render =  (data) =>{
    let html = data.map((p)=>{
      return `<tr>
              <th scope="row"> ${p.id} </th>
              <td> ${p.nombre} </td>
              <td> ${p.precio} </td>
              <td> <img src=${p.img}" width="150"/></td>
            </tr>`
    }).join(" ") 

 document.querySelector("#listaproductos").innerHTML = html //tomo el id de la tabla a pintar
}