const fs = require("fs")
const {knex} = require("../src/db")
 class Contenedor{
    constructor(knex,db){
        this.knex = knex,
        this.db = db
    }
    save(object) {

  return  this.knex(this.db).insert(object)
        
       
        
 }

    getById(id){

      return  this.knex(this.db).select("*").where({id:id})
        
       
    }
        getAll(){
         const all = this.knex(this.db).select("*")
            return all
            }
            
     deleteById(id){

     return  this.knex(this.db).where({id :id}).del()
        
    }
        

     deleteAll(){
      
       this.knex(this.db).del()

     }

     putForId(id,object){
   return this.knex(this.db).where({id:id}).update(object)
    
     }
      
   

 }
 
 module.exports = Contenedor