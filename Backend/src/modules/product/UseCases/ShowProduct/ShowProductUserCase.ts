import { IProduct } from '../../Protocols/IProduct';
import { AppErros } from '../../../../errors/AppErros';
import { IProductRepository } from '../../Protocols/IProductRepository';
import { IShowProductUseCase } from '../../Protocols/IShowProduct/IShowProductUseCase';


export class ShowProductUserCase implements IShowProductUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute(id:string):Promise<IProduct>{
        const product = await this.productRepository.findById(id)
        return product

    }
}