 //funcion que me renderiza la data y la pinta en una tabla los productos//

 const render =  (data) =>{
    let html = data.map((p)=>{
      return `<tr>
              <th scope="row"> ${p.id} </th>
              <td> ${p.nombre} </td>
              <td> ${p.precio} </td>
              <td> <img src=${p.img}" width="150"/></td>
              <td> ${p.descripcion} </td>
              <td> ${p.stock} </td>
            </tr>`
    }).join(" ") 

 document.querySelector("#productos").innerHTML = html //tomo el id de la tabla a pintar
}
