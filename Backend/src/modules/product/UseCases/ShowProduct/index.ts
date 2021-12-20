import {ShowProductUserCase } from './ShowProductUserCase';
import {  ShowProductController} from "./ShowProductController"
import { ProductRepository} from '../../repositories/productRepository';


export default ():ShowProductController=>{
    const productRepository=new ProductRepository()
    const productUserCase=new ShowProductUserCase(productRepository)
    const showProductController=new ShowProductController(productUserCase)
    return showProductController
}