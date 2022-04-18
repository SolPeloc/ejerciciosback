
const fs = require("fs")

class Contenedor{
    constructor(nombre){
        this.nombre = nombre
        
    }
    save(object) {

        fs.promises.readFile(`./${this.nombre}`, "utf-8")
        
        .then(data => {
        
        const array = JSON.parse(data)
        
        const obj = {...object, id: array.length + 1 }
        
        array.push(obj)
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify(array, null, 2), "utf-8", (err) => err && console.log(err));
        
        //console.log(obj.id)
        
        return obj.id;
        
        })
        
        .catch(err => {
        
        if (err) {
        
        const obj = { ...object, id: 1 };
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify([obj], null, 2), "utf-8", err => err && console.log(err))
        
        //console.log(obj.id)
        
        return obj.id;
        
        }
        
        })
        
        }

    getById(id){

            fs.readFile(`./${this.nombre}`, "utf-8",(err,data) =>{
                if(err){
                    return "error toma de id"
                }else{
                    let  prod = JSON.parse(data).find(x =>{
                        return x.id == id
                        })
                    console.log(prod) 
                }
            })
    }
        getAll(){
            fs.readFile(`./${this.nombre}`, "utf-8",(err,data) =>{
                if(err){
                    return "error en la lectura"
                }else{
                 console.log(JSON.parse(data))
                }
                
            })
        }
     deleteById(id){
        fs.readFile(`./${this.nombre}`, "utf-8",(err,data) =>{
                if(err){
                    return "error toma de id a borrar"
                }else{
                        let  prod = JSON.parse(data).filter(el =>{
                    return el.id !== id
                            
                    })
                    console.log(prod)
                    fs.writeFile(`./${this.nombre}`, JSON.stringify(prod, null, 2),"utf-8", (err) => err && console.log(err));


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

 let archivos = new Contenedor("text.json")
 //archivos.save({
  //  
   //  nombre : "buzo clara",
     // precio : 3500,
   // img: "./buzo.jpeg"
 // },  )
 
//archivos.getAll()

//archivos.getById(2)
//archivos.deleteAll()

//archivos.deleteById(5)
