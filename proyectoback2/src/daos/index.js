let productosDao
let carritosDao
let db = "mongodb"

if(db === "mongodb"){
   
    const {default : ProductoDaoMongoDb} = await import ("./productos/productodaosmongo.js")
    const {default : carritoDaoMongoDb} = await import ("./carritos/carritodaosmongo.js")
    productosDao = new ProductoDaoMongoDb()
    carritosDao = new carritoDaoMongoDb()
}

if(db === "firebase"){ 
    const { default : ProductodaoFirebase} = await import ("./productos/productodaoFirebase.js")
    const {default : CarritodaoFirebase} = await import ("./carritos/carritodaosfirebase.js")
    productosDao = new ProductodaoFirebase()
    carritosDao = new CarritodaoFirebase()
    
}


export {productosDao, carritosDao}