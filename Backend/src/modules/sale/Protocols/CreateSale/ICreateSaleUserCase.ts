import { ISale } from './../ISales';

export interface ICreateSaleUserCase{
    execute({id,date,product_id,qtd}:ISale):Promise<void>
}