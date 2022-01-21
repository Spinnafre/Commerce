import { IProduct } from './../IProduct';
export interface IUpdateProductUseCase{
    execute({id,name,img_url,price,qtd,category_id}:IProduct):Promise<void>
}