import { Product } from "../../product/mapper/product";
import { Sales } from "../../sale/mapper/sales";

export interface ISaleProduct{
    id?:string,
    qtd:number,
    product_id?:string,
    products?:Product,
    sales?:Sales,
    created_at?:Date,
    updated_at?:Date
}