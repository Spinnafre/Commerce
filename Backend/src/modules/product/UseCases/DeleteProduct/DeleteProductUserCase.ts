import { IProductRepository } from '../../Protocols/IProductRepository';
import { IDeleteProductUseCase } from '../../Protocols/IDeleteProduct/IDeleteProductUseCase';
import { AppErros } from '../../../../errors/AppErros';


export class DeleteProductUserCase implements IDeleteProductUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute(id:string):Promise<void>{
        const product = await this.productRepository.findById(id)
        if(!product.length){
            throw new AppErros('Product not exists')
        }
        await this.productRepository.delete(id)

    }
}