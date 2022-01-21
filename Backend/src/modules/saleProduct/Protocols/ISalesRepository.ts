import { ISaleProduct } from './ISaleProduct';



export interface ISaleProductRepository{
    create({id,products,sales,qtd}:ISaleProduct):Promise<void>,
    show(): Promise<Array<ISaleProduct>>,
    findById(id: string): Promise<ISaleProduct>,
    findBySaleId(sale_id:string):Promise<ISaleProduct>,
    findByProductId(product_id: string): Promise<Array<ISaleProduct>>,
    delete(id:string):Promise<void>

}