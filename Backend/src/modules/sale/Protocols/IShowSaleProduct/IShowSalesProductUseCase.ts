import { ISaleProduct } from '../../../saleProduct/Protocols/ISaleProduct';
export interface IShowSalesProductUseCase{
    execute(id:string):Promise<Array<ISaleProduct>>
}