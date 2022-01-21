import { IProduct } from '../../product/Protocols/IProduct';
import { IProductCategory } from './IProduct_Category';



export interface IProductCategoryRepository{
    create({products,categories}:any):Promise<void>,
    show(): Promise<Array<IProductCategory>>,
    findByProductIdAndCategoryId(product_id:string,category_id:string):Promise<IProductCategory>,
    deleteProductIdAndCategoryId(product_id:string,category_id:string):Promise<void>,
    findByProductId(product_id:string):Promise<Array<IProductCategory>>

}