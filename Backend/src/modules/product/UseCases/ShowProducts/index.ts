import { ShowProductsUserCase } from './ShowProductsUserCase';
import { ShowProductsController} from "./ShowProductsController"
import { ProductRepository} from '../../repositories/productRepository';


export default ():ShowProductsController=>{
    const productRepository=new ProductRepository()
    const productsUserCase=new ShowProductsUserCase(productRepository)
    const showProductsController=new ShowProductsController(productsUserCase)
    return showProductsController
}