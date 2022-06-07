const fs = require("fs")

 class Carrito{
    constructor(nombre){
        this.nombre = nombre
       // this.productos = require("../productos.json")
        
    }
    crearCarrito(object) {

        fs.promises.readFile(`./${this.nombre}`, "utf-8")
        
        .then(data => {
        
        const array = JSON.parse(data)
        
        const nuevoCarrito = {...object, id: array.length + 1}
        
        array.push(nuevoCarrito)
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify(array, null, 2), "utf-8", (err) => err && console.log(err));
        
       
        return nuevoCarrito;
        
        })
        
        .catch(err => {
        
        if (err) {
        
        const nuevoCarrito = { ...object, id: 1};
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify([nuevoCarrito], null, 2), "utf-8", err => err && console.log(err))
       
       
       return nuevoCarrito;
        
        }
        
        })
        
        }

    getById(id){

            fs.readFile(`./${this.nombre}`, "utf-8",(err,data) =>{
                if(err){
                    return "error toma de id carrito"
                }else{
                    let  carrito = JSON.parse(data).find(x =>{
                        return x.id == id
                        })
                    console.log(carrito) 
                }
            })
    }
        getAll(){
            try{
            let data = fs.readFileSync(`./${this.nombre}`, "utf-8")
            return JSON.parse(data)
            } catch (err) {
                        return "error en la lectura"
                    }
                    
            }
            

            
     deleteById(id){
        fs.readFile(`./${this.nombre}`, "utf-8",(err,data) =>{
                if(err){
                    return "error toma de id carrito a borrar"
                }else{
                        let  carrito = JSON.parse(data).filter(el =>{
                    return el.id !== id
                            
                    })
                    console.log(carrito)
                    fs.writeFile(`./${this.nombre}`, JSON.stringify(carrito, null, 2),"utf-8", (err) => err && console.log(err));


                }
                 
            }
        )}
        

     deleteAll(){
        fs.unlink("./test.json",(err)=>{
            if(err){
                return "error al borrar"
            }else{
                console.log("se borro correctamente")
            }
        })


        
          

     }
      
   

 }
 
 module.exports = Carrito