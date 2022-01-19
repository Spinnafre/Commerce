import { ISaleProduct } from '../../../saleProduct/Protocols/ISaleProduct';

export interface IShowSalesUseCase{
    execute():Promise<Array<ISaleProduct>>
}