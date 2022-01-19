import { IProductCategory } from '../../../product_category/Protocols/IProduct_Category';
import { IProduct } from './../IProduct';
export interface IShowProductUseCase{
    execute(id:string):Promise<IProductCategory>
}