import { IProduct } from '../../Protocols/IProduct';
import { AppErros } from '../../../../errors/AppErros';
import { IProductRepository } from '../../Protocols/IProductRepository';
import { IUpdateProductUseCase } from '../../Protocols/IUpdateProduct/IUpdateProductUseCase';
import { checkExists } from '../../../../utils/validator';


export class UpdateProductUserCase implements IUpdateProductUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute({id,name,img_url,price,qtd,category_id,oldCategories}:IProduct):Promise<void>{
        const product = await this.productRepository.findById(id)
        if(!product){
            throw new AppErros('Product not exists')
        }
        try {
            checkExists<string>(name,'Name is not defined')
            checkExists<number>(price,'Price is not defined')
            checkExists<string>(img_url,'Image is not defined')
            // checkExists<string>(category_id,'Category_id is not defined')
            
        }catch(error){
            throw new AppErros(error)
        }

        await this.productRepository.create({id,name,img_url,price,qtd,category_id,oldCategories})
    }
}