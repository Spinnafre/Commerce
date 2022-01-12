import { ISale } from '../../Protocols/ISales';
import { ISalesRepository } from '../../Protocols/ISalesRepository';
import { IShowSaleUseCase } from '../../Protocols/IShowSale/IShowSaleUseCase';

export class ShowSaleUserCase implements IShowSaleUseCase{
    constructor(private saleRepository:ISalesRepository){}
    async execute(id:string):Promise<ISale>{
        const sales=await this.saleRepository.findById(id)
        return sales

    }
}