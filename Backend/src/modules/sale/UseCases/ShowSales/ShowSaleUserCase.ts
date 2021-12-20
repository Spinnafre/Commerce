import { ISaleProduct } from '../../../saleProduct/Protocols/ISaleProduct';
import { ISalesRepository } from '../../Protocols/ISalesRepository';
import { IShowSalesUseCase } from '../../Protocols/IShowSales/IShowSalesUseCase';

export class ShowSalesUserCase implements IShowSalesUseCase{
    constructor(private salesRepository:ISalesRepository){}
    async execute():Promise<Array<ISaleProduct>>{
        const sales=await this.salesRepository.show()
        return sales

    }
}