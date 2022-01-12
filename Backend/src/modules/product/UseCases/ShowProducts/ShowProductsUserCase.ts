import { IProductCategory } from '../../../product_category/Protocols/IProduct_Category';
import { IProduct } from '../../Protocols/IProduct';
import { IProductRepository } from '../../Protocols/IProductRepository';
import { IShowProductsUseCase } from '../../Protocols/IShowProducts/IShowProductsUseCase';


export class ShowProductsUserCase implements IShowProductsUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute():Promise<Array<IProductCategory>>{
        const products = await this.productRepository.show()
        return products

    }
}