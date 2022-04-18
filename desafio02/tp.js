const productos = [{ id:1, nombre:'Escuadra', precio:323.45 },
{ id:2, nombre:'Calculadora', precio:234.56 },
{ id:3, nombre:'Globo Terráqueo', precio:45.67 },
{ id:4, nombre:'Paleta Pintura', precio:456.78 },
{ id:5, nombre:'Reloj', precio:67.89 },
{ id:6, nombre:'Agenda', precio:78.90 }]
//obtener los nombres de de los productos en un string//
let nombres = productos.map((n) => n.nombre);
//nombres.join() es lo mismo que con string
console.log(nombres.toString());

//obtener el precio total//

let precioTotal = productos.reduce((previousValue, currentValue) =>
// Solo realiza la suma, sin encerrar entre corchetes []
previousValue + currentValue.precio,0);
console.log("precioTotal", precioTotal.toFixed(2))

// otra forma

let acumulador = 0; 

 productos.map((x)=>{
      acumulador = acumulador + x.precio // aca estoy sumando al acumulador todos los precios del array//
 })
 console.log(acumulador.toFixed(2))
// obtener precio promedio//


let promedio = precioTotal / productos.length;
console.log(promedio.toFixed(2)) //le pone solo 2 decimales//
// otra forma promedio//

console.log(acumulador/productos.length)

// obtener el producto con menor precio//

 let menorPrecio = productos.filter(precio =>precio.length >= 10)
// console.log(menorPrecio)//


// obtener el producto con mayor precio//