import { IProduct } from './../IProduct';


export interface ICreateProductUserCase{
    execute({id,name,img_url,price,qtd,category_id}:IProduct):Promise<void>
}