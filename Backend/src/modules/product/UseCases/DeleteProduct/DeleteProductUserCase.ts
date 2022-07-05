import { IProductRepository } from '../../Protocols/IProductRepository';
import { IDeleteProductUseCase } from '../../Protocols/IDeleteProduct/IDeleteProductUseCase';
import { AppErrors } from '../../../../errors/AppErrors';


export class DeleteProductUserCase implements IDeleteProductUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute(id:string):Promise<void>{
        const product = await this.productRepository.findById(id)
        if(!product.length){
            throw new AppErrors('Product not exists')
        }
        await this.productRepository.delete(id)

    }
}