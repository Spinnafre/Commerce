import {UpdateProductUserCase } from './UpdateProductUserCase';
import {  UpdateProductController} from "./UpdateProductController"
import { ProductRepository} from '../../repositories/productRepository';


export default ():UpdateProductController=>{
    const productRepository=new ProductRepository()
    const productUserCase=new UpdateProductUserCase(productRepository)
    const updateProductController=new UpdateProductController(productUserCase)
    return updateProductController
}