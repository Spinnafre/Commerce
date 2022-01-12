import { ISaleProduct } from '../../saleProduct/Protocols/ISaleProduct';
import { ISale } from './ISales';



export interface ISalesRepository{
    create({id,date,users}:ISale):Promise<ISale>,
    show(): Promise<Array<ISaleProduct>>,
    findById(id:string):Promise<ISaleProduct>,
    findByProductId(product_id:string):Promise<Array<ISaleProduct>>,
    delete(id:string):Promise<void>

}