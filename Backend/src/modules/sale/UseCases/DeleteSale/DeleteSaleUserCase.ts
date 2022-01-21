import { AppErros } from '../../../../errors/AppErros';
import { IDeleteSaleUseCase } from '../../Protocols/IDeleteSale/IDeleteSaleUseCase';
import { ISalesRepository } from '../../Protocols/ISalesRepository';


export class DeleteSaleUserCase implements IDeleteSaleUseCase{
    constructor(private saleRepository:ISalesRepository){}
    async execute(id:string):Promise<void>{
        const sale= await this.saleRepository.findById(id)
        if(!sale){
            throw new AppErros('Sale not exists')
        }
        await this.saleRepository.delete(id)

    }
}