import { CreateProductUserCase } from './CreateProductUserCase';
import {  CreateProductController} from "./CreateProductController"
import { ProductRepository} from '../../repositories/productRepository';
import { ICreateProductController } from '../../Protocols/CreateProduct/ICreateProductController';

export default ():ICreateProductController=>{
    const productRepository=new ProductRepository()
    const productUserCase=new CreateProductUserCase(productRepository)
    const createProductController=new CreateProductController(productUserCase)
    return createProductController
}