import { IProductCategory } from '../../product_category/Protocols/IProduct_Category';
import { IProduct } from './IProduct';


export interface IProductRepository{
    create({id,name,img_url,price,qtd,category_id}:IProduct):Promise<void>,
    updateQtd(product:IProduct):Promise<void>
    show(): Promise<Array<IProductCategory>>,
    findById(id:string): Promise<Array<IProductCategory>>,
    findByName(name:string): Promise<IProduct>,
    delete(id:string): Promise<void>
    
}