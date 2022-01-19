import { ISaleProduct } from '../../../saleProduct/Protocols/ISaleProduct';
import { ISalesRepository } from '../../Protocols/ISalesRepository';
import { IShowSalesProductUseCase } from '../../Protocols/IShowSaleProduct/IShowSalesProductUseCase';

export class ShowSaleProductUserCase implements IShowSalesProductUseCase{
    constructor(private saleRepository:ISalesRepository){}
    async execute(id:string):Promise<Array<ISaleProduct>>{
        const sales=await this.saleRepository.findByProductId(id)
        return sales

    }
}