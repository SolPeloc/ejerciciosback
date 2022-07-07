import ContainerFirebasedb from "../../Contenedores/firebase/configfirebase.js";

class CarritodaoFirebase extends ContainerFirebasedb{
    constructor(){
        super("carritos")
    }
    async saveItem(carrito = { productos: [] }) {
        return super.saveItem(carrito)
    }
}
export default CarritodaoFirebase
