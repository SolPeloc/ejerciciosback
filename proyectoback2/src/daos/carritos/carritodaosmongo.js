import MongodbContainer from "../../Contenedores/mongo/configmongo.js";

class carritoDaoMongoDb extends MongodbContainer{
    constructor(){
        super("carritos",{
            productos: { type: [], required: true }
        })
    }
    async saveItem(carrito = { productos: [] }) {
        return super.saveItem(carrito)
    }
}
export default carritoDaoMongoDb