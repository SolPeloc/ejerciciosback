import MongodbContainer from "../../Contenedores/mongo/configmongo.js";

class ProductoDaoMongoDb extends MongodbContainer{

    constructor(){
        super("productos", {
            nombre:{ type: String, required: true },
            precio:{type:Number,require:true},
            img:{type:String, require:true},
            descripcion:{type:String,require:true},
            stock:{type:Number,require:true},
            date:{type:String, require:true},
        })
    }
}
export default ProductoDaoMongoDb 