import { IProduct } from './../../Protocols/IProduct';
import { AppErrors } from '../../../../errors/AppErrors';
import { ICreateProductUserCase } from '../../Protocols/CreateProduct/ICreateProductUserCase';
import { IProductRepository } from '../../Protocols/IProductRepository';

export class CreateProductUserCase implements ICreateProductUserCase{
    constructor(private productRepository:IProductRepository){}
    async execute({name,price,img_url,qtd,category_id}:IProduct):Promise<void>{
        const product = await this.productRepository.findByName(name)
        if(!!product){
            throw new AppErrors('Product already exists')
        }
        await this.productRepository.create({ name, price,img_url,qtd,category_id })

    }
}