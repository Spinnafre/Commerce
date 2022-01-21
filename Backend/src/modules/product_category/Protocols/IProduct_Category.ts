import { Category } from './../../categories/mapper/categories';
import { Product } from './../../product/mapper/product';
export interface IProductCategory{
    // product_id: string,
    // category_id:string,
    products?:Product,
    categories?:Category,
    created_at?:Date,
    updated_at?:Date,
}   