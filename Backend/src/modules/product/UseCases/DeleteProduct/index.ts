import {DeleteProductUserCase} from './DeleteProductUserCase';
import {  DeleteProductController} from "./DeleteProductController"
import { ProductRepository} from '../../repositories/productRepository';


export default ():DeleteProductController=>{
    const productRepository=new ProductRepository()
    const deleteUserCase=new DeleteProductUserCase(productRepository)
    const deleteProductController=new DeleteProductController(deleteUserCase)
    return deleteProductController
}