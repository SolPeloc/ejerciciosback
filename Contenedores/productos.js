const fs = require("fs")

 class Contenedor{
    constructor(nombre){
        this.nombre = nombre
        
    }
  async  save(object) {

    await    fs.promises.readFile(`./${this.nombre}`, "utf-8")
        
        .then(data => {
        
        const array = JSON.parse(data)
        
        const obj = {...object, id: array.length + 1 }
        
        array.push(obj)
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify(array, null, 2), "utf-8", (err) => err && console.log(err));
        
       
        return obj.id;
        
        })
        
        .catch(err => {
        
        if (err) {
        
        const obj = { ...object, id: 1 };
        
        fs.writeFile(`./${this.nombre}`, JSON.stringify([obj], null, 2), "utf-8", err => err && console.log(err))
       
       
       return obj.id;
        
        }
        
        })
        
        }

  async  getById(id){

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
 
 module.exports = Contenedor