import ContainerFirebasedb from "../../Contenedores/firebase/configfirebase.js";

class ProductodaoFirebase extends ContainerFirebasedb {
    constructor(){
        super("productos")
    }
}
export default ProductodaoFirebase